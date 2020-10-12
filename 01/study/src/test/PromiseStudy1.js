const consoleCss = "color:orange;font-family:'맑은 고딕';font-size:14px;font-weight:bold;";
/**
 * 2.4.1 프로미스 이해하기
 * 
 * 콜백 패턴의 문제
 * 자바스크립트에서는 비동기 프로그래밍의 한 가지 방식으로 콜백(callback) 패턴을
 * 많이 사용했었다. 하지만 콜백 패턴은 조금만 중첩돼도 코드가 상당히 복잡해지는 단점이 있다.
 * 
 */

// 콜백 함수의 중첩 사용
// 이 코드는 1 > 2 > 3 > 4 > 5 순서대로 실행되기 때문에, 짧은 코기임에도 쉽게 읽히지 않는다.
(() => {
    console.log('%c[콜백 함수의 중첩 사용]', consoleCss);
    const data = {
        data1: undefined
    };
    function requestData1(callback) {
        callback(data); // 2.
    }
    function requestData2(callback) {
        callback(data); // 4.
    }
    function onSuccess1(data) {
        const { data1 = "data1" } = data;
        console.log(data1);
        requestData2(onSuccess2); // 3.
    }
    function onSuccess2(data) { // 5.
        const { data1 = "data2" } = data;
        console.log(data1);
    }
    requestData1(onSuccess1); // 1.
    // console.log(data);
})();

// 간단한 프로미스 코드 예
// 프로미스를 사용하면 비동기 프로그래밍을 할 때 코드를 순차적으로 작성할 수 있다.
(() => {
    // requestData1()
    //     .than(data => {
    //         console.log(data);
    //         return requestData2();
    //     })
    //     .than(data => {
    //         console.log(data);
    //     });
})();

/**
 * 프로미스의 세 가지 상태
 * 
 * 프로미스는 다음 세 가지 상태 중 하나의 상태로 존재한다.
 * 
 * 대기중(pending)      : 결과를 기다리는 중
 * 이행됨(fulfilled)    : 수행이 정상적으로 끝났고 결괏값을 갖고 있음
 * 거부됨(rejected)     : 수행이 비정상적으로 끝났음
 * 
 * 이행됨, 거부됨 상태를 처리됨(settled) 상태라고 부른다.
 * 프로미스는 처리됨 상태가 되면 더 이상 다른 상태로 변경되지 않는다.
 * 대기 중 상태일 때만 이행됨 또는 거부됨 상태로 변할 수 있다.
 * 
 */

// 프로미스를 생성하는 방법
// 프로미스는 다음 세 가지 방식으로 생성할 수 있다.
(() => {
    console.log('%c[프로미스는 다음 세 가지 방식으로 생성할 수 있다.]', consoleCss);
    const param = undefined;
    /*
     * 일반적으로 new 키워드를 사용해서 프로미스를 생성한다.
     * 이 방법으로 생성된 프로미스는 대기 중 상태가 된다.
     * 생성자에 입력되는 함수는 resolve와 reject라는 콜백 함수를 매개변수로 갖는다.
     * 비동기로 어떤 작업을 수행 후 성공했을 때 resolve를 호출하고, 실패했을 때 reject를 호출하면 된다.
     * resolve를 호출하면 p1 객체는 이행됨 상태가 된다.
     * 반대로 reject를 호출하면 거부됨 상태가 된다. 만약 생성자에 입력된 함수 안에서 예외(exception)가 발생하면 거부됨 상태가 된다.
     * new 키워드를 사용해서 프로미스를 생성하는 순간 생성자의 입력 함수가 실행된다.
     * 만약 API 요청을 보내는 비동기 코드가 있다면 프로미스가 생성되는 순간에 요청을 보낸다.
     */
    const p1 = new Promise((resolve, rejcet) => {
        // ...
        // resolve(data)
        // or rejcet('error message')
    });
    // new 키워드를 사용하지 않고 Promise.reject를 호출하면 거부됨 상태인 프로미스가 생성된다.
    const p2 = Promise.reject('error message');
    // Promise.resolve를 호출해도 프로미스가 생성된다. 만약 입력값이 프로미스였다면
    // 그 객체가 그대로 반환되고, 프로미스가 아니라면 이행됨 상태인 프로미스가 반환된다.
    const p3 = Promise.resolve(param);
    console.log(p2);
    console.log(p3);
})();

// 다음은 Promise.resolve의 인수가 프로미스인 경우와 아닌 경우의 반환값을 보여 준다
(() => {
    console.log('%c[다음은 Promise.resolve의 인수가 프로미스인 경우와 아닌 경우의 반환값을 보여 준다.]', consoleCss);
    // 프로미스가 아닌 인수와 함께 Promise.resolve 함수를 호출하면 그 값 그대로 이행됨 상태인 프로미스가 반환된다.
    // p1은 123을 데이터로 가진 프로미스다.
    const p1 = Promise.resolve(123);
    console.log(p1);
    console.log(p1 !== 123); // true
    // p1.then(data => console.log(data !== 123)); // false
    // Promise.resolve 함수에 프로미스가 입력되면 그 자신이 반환된다.
    const p2 = new Promise(resolve => setTimeout(() => resolve(10), 1));
    console.log(p2);
    console.log(Promise.resolve(p2) === p2); // true
})();

// 프로미스 이용하기 1 : then
// then은 처리됨 상태가 된 프로미스를 처리할 때 사용되는 메서드다.
// 프로미스가 처리됨 상태가 되면 then 메서드의 인수로 전달된 함수가 호출된다.
// 다음은 then 메서드의 사용법을 보여주는 코드다.
(() => {
    console.log('%c[다음은 then 메서드의 사용법을 보여주는 코드다.]', consoleCss);
    // 프로미스가 처리됨 상태가 되면 onResolve 함수가 호출되고, 거부됨 상태가 되면 onReject 함수가 호출된다.
    // requestData().then(onResolve, onReject);
    Promise.resolve(123).then(data => console.log(data)); // 123
    Promise.reject('err2222').then(null, error => console.log(error)); // 에러 발생
})();

// 연속해서 then 메서드 호출하기
// onResolve 또는 onReject 함수에서 프로미스를 반환하면 then 메서드는 그 값을 그대로 반환한다
// 만약 프로미스가 아닌 값을 반환하면 then 메서드는 이행됨 상태인 프로미스를 반환한다.
// onResolve 또는 onReject 함수 내부에서 예외가 발생하면 then 메서드는 거부됨 상태인 프로미스를 반환한다.
// 결과적으로 then 메서드는 항상 프로미스를 반환한다.
(() => {
    console.log('%c[연속해서 then 메서드 호출하기]', consoleCss);
    function requestData1() {
        return (
            Promise.resolve(123)
            // Promise.reject('error')
        )
    }
    function requestData2() {
        return (
            Promise.resolve(222)
        )
    }
    requestData1()
        .then(data => {
            console.log(data);
            return requestData2();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .then(data => {
            throw new Error('some error');
        })
        .then(null, error => {
            console.log(error);
        });
})();

// 거부됨 상태가 되면 onRejecct 함수를 호출한다\
// 프로미스가 거부됨 상태인 경우에는 onReject 함수가 존재하는 then을 만날 때까지 이동한다. 
// 거부됨 상태인 프로미스는 처음으로 만나는 onReject 함수를 호출하므로 1번 코드 블록은 생략되고
// 2번 코드의 then 4가 출력된다. then4를 출력하는 onReject 함수는 undefined를 결과로 가지면서
// 이행됨 상태인 프로미스를 생성한다. 3. 따라서 이어지는 then 메서드에서는 then5가 출력된다.
// then 메서드의 가장 중요한 특징은 항상 연결된 순서대로 호출된다는 점이다.
// 이 특징은 프로미스로 비동기 프로그래밍을 할 때 동기 프로그래밍 방식으로 코드를 작성할 수 있게 해 준다.
(() => {
    Promise.reject('err')
        .then(() => console.log('then1')) // 1.
        .then(() => console.log('then2')) // 1.
        .then(() => console.log('then3'), () => console.log('then4')) // 2.
        .then((data) => console.log(data, 'then5'), () => console.log('then6')); // 3.
})();

