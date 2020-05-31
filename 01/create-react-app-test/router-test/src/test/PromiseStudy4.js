// 프로미스 사용 시 주의할 점

 /**
  * return 키워드 깜빡하지 않기
  * 
  * then 메서드 내부 함수에서 return 키워드를 입력하는 것을 깜빡하기 쉽다.
  * then 메서드가 반환하는 프로미스 객체의 데이터는 내부 함수가 반환한 값이다.
  * return 키워드를 사용하지 않으면 프로미스 객체의 데이터는 unbefined가 된다.
  * 다음 코드는 then 메서드 내부에서 return 키워드를 깜빡한 경우를 보여 준다.
  * 
  */

// return 키워드를 깜빡한 코드
// 의도와는 다르게 2번 코드에 undefined가 출력된다. 1번 코드에서 return 키워드를 입력하면 의도한 대로 20이 출력된다.
(() => {
    Promise.resolve(10)
        .then(data => {
            console.log(data);
            Promise.resolve(20); // 1.
        })
        .then(data => {
            console.log(data); // 2.
        })
})();

/**
 * 프로미스는 불변 객체라는 사실 명심하기
 * 
 * 프로미스는 불변 객체다. 이를 인지하지 못하고 코드를 작성하면
 * 다음과 같은 실수를 할 수 있다.
 * 
 */

// 프로미스가 수정된다고 생각하고 작성한 코드
// then 메서드는 기존 객체를 수정하지 않고, 새로운 프로미스를 반환한다.
// 2번 코드에서 20이 출력되길 원한다면 requestData 함수를 다음과 같이 수정해야 한다.
(() => {
    function requestData() { 
        const p = Promise.resolve(10);
        p.then(() => { // 1.
            return 20;
        })
        return p;
    }
    requestData()
        .then(v => {
            console.log(v); // 2.
        });
})();

// 수정.
(() => {
    function requestData() {
        return Promise.resolve(10).then(v => {
            return 20;
        });
    }
    requestData()
        .then(v => {
            console.log(v);
        })
})();

/**
 * 프로미스 중첩해서 사용하지 않기
 * 
 * 프로미스를 중첩해서 사용하면 콜백 패턴처럼 코드가 복잡해지므로 사용을 권장하지 않는다.
 * 프로미스를 사용하다 보면 무심결에 다음 코드와 같이 중첩해서 사용하기 쉽다.
 * 
 */

// 프로미스를 중첩해서 사용한 코드
(() => {
    // requestData1()
    //     .then(result1 => {
    //         requestData2(
    //             result1.then(result2 => {
    //             // ...
    //             })
    //         )
    //     })
})();

// 위 코드보다 다음과 같이 사용하는게 좋다.
// 중첩된 코드를 리팩터링한 코드
(() => {
    // requestData1()
    //     .then(result1 => {
    //         return requestData2(result1);
    //     })
    //     .then(result2 => {
    //         // ... // 1.
    //     });
})();

// 위 코드의 1번 영역에서 result1 변수를 참조해야 한다면 어떻게 해야 할까?
// Promise.all 함수를 사용하면 프로미스를 중첩하지 않고도 다음과 같이 해결할 수 있다.
// Promise.all을 사용해서 변수 참조 문제를 해결한 코드
// 1. - Promise.all 함수로 입력하는 배열에 프로미스가 아닌 값을 넣으면, 그 값 그대로 이행됨 상태인 프로미스처럼 처리된다.
(() => {
    // requestData()
    //     .then(result1 => {
    //         return Promise.all([result1, requestData2(result1)]); // 1.
    //     })
    //     .then(([result1, result2]) => {
    //         // ...
    //     });
})();

/**
 * 동기 코드의 예외 처리 신경 쓰기
 * 
 * 프로미스를 동기(sync) 코드와 같이 사용할 때는 예외 처리에 신경 써야 한다.
 * 다음과 같이 동기 함수에서 예외가 바생하는 경우에는 이 예외를 처리하는 곳이 없어서 문제가 된다.
 * 
 */

// 동기 코드에서 발생한 예외가 처리되지 않는 코드
(() => {
    function doSync(){
        //...
    };
    function requestData() {
        doSync();
        return fetch()
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
})();

// 위 코드의 dosync(); 함수가 반드시 fetch 전에 호출되어야 하는 게 아니라면
// 다음과 같이 then 메서드 안쪽으로 넣어 주는게 좋다.
// 1. - doSync에서 발생하는 예외는 catch 메서드에서 처리가 된다.
(() => {
    function doSync(){
        //...
    };
    function requestData() {
        return fetch()
            .then(data => {
                doSync(); // 1.
                console.log(data);
            })
            .catch(error => console.log(error));
    }
})();