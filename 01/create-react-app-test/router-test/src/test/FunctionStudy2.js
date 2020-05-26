/**
 * 2.3.2 함수를 정의하는 새로운 방법 : 화살표 함수
 * 
 * ES6에서는 화살표 함수(arrow function)를 이용해 함수를 정의하는 방법이 추가되었다.
 * 화살표 함수를 이용하면 함수를 간결하게 작성할 수 있다.
 * 
 **/

// 화살표 함수의 사용 예
const add = (a, b) => a + b; // 화살표 함수를 중괄호로 감싸지 않으면 오른쪽의 계산 결과가 반환된다. return 키워드 생략가능.
console.log(add(1, 2)); // 3
const add5 = a => a + 5; // 매개변수가 하나라면 매개변수를 감싸는 소괄호도 생략가능.
console.log(add5(1)); // 6
const addAndReturnObject = (a, b) => ({ result: a + b }); // 객체를 반환해야 한다면 소괄호로 감싸야 한다.
// const addAndReturnObject = (a, b) => {
//     return {
//         result: a + b
//     }
// };
console.log(addAndReturnObject(1, 2));
console.log(addAndReturnObject(1, 2).result);

// 코드가 두 줄 이상인 화살표 함수
const add2 = (a, b) => {
    if (a <= 0 || b <= 0) {
        throw new Error('must be positive number');
    }
    return a + b;
};

// this와 arguments가 바인딩되지 않는 화살표 함수
// arguments가 필요하다면 나머지 매개변수를 이용한다.
// 화살표 함수에서 나머지 매개변수 사용하기
const printLog = (...rest) => console.log(rest);
printLog(1, 2, 3); // [1, 2, 3]

/**
 * 일반 함수에서 this 바인딩 때문에 버그가 발생하는 경우
 * 
 * 일반 함수에서 this는 호출 시점에 사용된 객체로 바인딩된다.
 * 따라서 객체에 정의된 일반 함수를 다른 변수에 할당해서 호출하면 버그가 발생할 수 있다.
 * 
 */

// this 바인딩 때문에 버그가 발생한 경우
(() => {
    const obj = {
        value: 1,
        increase: function() {
            this.value++;
        }
    };
    obj.increase();
    console.log(obj.value); // 2
    const increase = obj.increase;
    window.value = 1;
    increase(); // 객체 없이 호출되는 경우에는 전역 객체가 바인딩되는데, 브라우저 환경에서는 window 객체가 바인딩된다. 따라서 obj.value가 증가하는게 아니라 window.value가 증가한다.
    console.log(window.value);
    console.log(obj.value); // 2
})();

// 생성자 함수 내부에서 정의된 화살표 함수의 this

// 생성자 함수 내부에서 화살표 함수 사용하기
(() => {
    function Something() {
        this.value = 1;
        // 화살표 함수 increase의 this는 가장 가까운 일반 함수인 Something의 this를 참조한다.
        // obj객체가 생성될 때 호출된다. 주의할 점은 new 키워드를 이용해서 생성자 함수를 호출하면 this는 생성되는 객체를 참조한다.
        // 따라서 increase 함수의 this는 생성된 객체를 가리킨다.
        // 그러므로 호출 시점의 객체와는 무관하게 increase 함수의 this는 항상 생성된 객체를 참조하고 obj.value는 계속 증가한다.
        this.increase = () => this.value++;
    }
    const obj = new Something();
    obj.increase();
    console.log(obj.value); // 2
    const increase = obj.increase;
    increase();
    console.log(obj.value); // 3

    const obj2 = new Something();
    console.log(obj2.value);
    obj2.increase();
    console.log(obj2.value);
    const increase2 = obj2.increase;
    increase2();
    console.log(obj2.value);
})();

// setInterval 함수 사용 시 this 바인딩 문제
// 다음은 1초마다 obj.value를 증가시키는 코드다. this가 어떤 객체를 참조할지 생각해 보자.
(() => {
    function Something() {
        this.value = 1;
        window.value = 1;
        const interVal = setInterval(function increase(){
            // 의도와 달리 obj.value는 증가하지 않는다.
            // setInterval 함수의 인수로 들어간 increase 함수는 전역 환경(global context)에서 실행되기 때문에 this는 window 객체를 참ㅈ한다.
            this.value++;
            console.log(window.value);
        }, 1000);

        setTimeout(function() {
            clearInterval(interVal);
        }, 10000);
    }
    // const obj = new Something();
})();

// setInterval 함수에서 this 객체를 참조하기 위해 편법 사용
// 화살표 함수를 사용하면 아래와 같은 편법을 사용하지 않고 원하는 기능을 구현할 수 있다.
(() => {
    function Something() {
        this.value = 1;
        var that = this;
        window.value = 1;
        const interVal = setInterval(function increase() {
            // increase 함수에서는 클로저(closure)를 이용해서 미리 저장해둔 that 변수를 통해 this 객체에 접근한다.
            that.value++;
            console.log(that.value);
            console.log(window.value);
        }, 1000);

        setTimeout(function() {
            clearInterval(interVal);
        }, 10000);
    }
    // const obj = new Something();
})();

/**
 * 클로저 개념 이해하기
 * 
 * 클로저는 함수가 생성되는 시점에 접근 가능했던 변수들을 생성 이후에도 계속해서 접근
 * 할 수 있게 해 주는 기능이다. 접근할 수 있는 변수는 그 함수를 감싸고 있는 상위 함수들
 * 의 매개변수와 내부 변수들이다.
 * 
 */

// 클로저를 사용한 간단한 코드
(() => {
    function makeAddFunc(x) {
        // add 함수는 상위 함수인 makaAddFunc의 매개변수 x에 접근할 수 있다.
        return function add(y) {
            return x + y;
        };
    }
    const add5 = makeAddFunc(5);
    // add5 함수가 생성된 이후에도 상위 함수를 호출할 때 사용했던 인수에 접근할 수 있다.
    console.log(add5(1)); // 6
    // 중간에 makeAddFunc(7)가 호출되지만 add5에 영향을 주지 않는다. 즉, 생성된 add 함수별로 클로저 환경이 생성된다.
    const add7 = makeAddFunc(7);
    console.log(add7(1)); // 8
    console.log(add5(1)); // 6
})();

// setInterval 함수에서 this 객체를 참조하기 위해 화살표 함수 사용하기
(() => {
    function Something() {
        this.value = 1;
        const interVal = setInterval(() => {
            // 화살표 함수를 사용했기 때문에 this는 setInterval의 동작과는 상관없이 obj를 참조한다.
            this.value++;
            console.log(this.value);
        }, 1000);

        setTimeout(function() {
            clearInterval(interVal);
        }, 10000);
    }
    const obj = new Something();
})();

// (() => {
    
// })();

// (() => {
    
// })();

// (() => {
    
// })();

// (() => {
    
// })();

// (() => {
    
// })();

