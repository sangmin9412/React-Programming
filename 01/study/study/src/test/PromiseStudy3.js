/**
 * 프로미스 활용하기
 * 
 * 병렬로 처리하기 : Promise.all
 * Promise.all은 여러 개의 프로미스를 병렬로 처리할 때 사용하는 함수다. then 메서드를
 * 체인으로 연결하면 각각의 비동기 병렬로 처리되지 않는다는 단점이 있다.
 * 다음과 같이 여러 개의 비동기 함수를 then 메서드로 연결하면 순차적으로 실행된다.
 * 
 */

// 순차적으로 실행되는 비동기 코드
(() => {
    function requestData1() {
        return (
            Promise.resolve(10)
            // Promise.reject('error')
        )
    }
    function requestData2() {
        return (
            Promise.resolve(20)
        )
    }
    function requestData3() {
        return (
            Promise.resolve(30)
        )
    }
    function requestData4() {
        return (
            Promise.resolve(40)
        )
    }
    requestData1()
        .then(data => {
            console.log(data);
            return requestData2();
        })
        .then(data => {
            console.log(data);
            return requestData3();
        })
        .then(data => {
            console.log(data);
            return requestData4();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
})();

/**
 * 비동기 함수 간에 서로 의존성이 없다면 병렬로 처리하는 게 더 빠르다. then 메서드를
 * 체인으로 연결하지 않고 다음과 같이 비동기 함수를 각각 호출하면 병렬로 처리된다.
 * 
 */

// 병렬로 실행되는 코드
(() => {
    function requestData1() {
        return (
            Promise.resolve(100)
            // Promise.reject('error')
        )
    }
    function requestData2() {
        return (
            Promise.resolve(200)
        )
    }
    // 알 코드에서 requestData1, requestData2 두 함수는 동시에 실행된다. 이렇게 여러 프로미스를 병렬로 처리하고 싶은 경우에
    // 다음과 같이 Promise.all을 사용할 수 있다.
    requestData1().then(data => console.log(data));
    requestData2().then(data => console.log(data));
})();

// Promise.all을 사용하는 코드
(() => {
    function requestData1() {
        return (
            Promise.resolve(1000)
            // Promise.reject('error')
        )
    }
    function requestData2() {
        return (
            Promise.resolve(2000)
        )
    }
    // Promise.all 함수는 프로미스를 반환한다. Promise.all 함수가 반환하는 프로미스는 입력된 모든
    // 프로미스가 처리됨 상태가 되어야 마찬가지로 처리됨 상태가 된다. 만약 하나라도 거부됨 상태가 된다면
    // Promise.all 함수가 반환하는 프로미스도 거부됨 상태가 된다.
    Promise.all([requestData1(), requestData2()]).then(([data1, data2]) => {
        console.log(data1, data2);
    });
})();

/**
 * 가장 빨리 처리된 프로미스 가져오기 : Promise.race
 * 
 * Promise.race는 여러 개의 프로미스 중에서 가장 빨리 처리도니 프로미스를 반환하는 함수다.
 * Promise.race 함수에 입력된 여러 프로미스 중에서 하나라도 처리됨 상태가 되면, Promise.race 함수가 반환하는 프로미스도 처리됨 상태가 된다.
 * 다음 코드는 Promise.race 함수의 사용법을 보여준다.
 * 
 */

// Promise.race를 사용한 간단한 코드
(() => {
    function requestData() {
        return (
            new Promise(resolve => setTimeout(() => resolve(10000), 1000))
        )
    }
    // requestData 함수가 2초 안에 데이터를 받으면 then 메서드가 호출되고, 그렇지 않으면 catch 메서드가 호출된다.
    Promise.race([
        requestData(),
        new Promise((_, reject) => setTimeout(reject, 2000)),
    ])
    .then(data => console.log(data))
    .catch(error => console.log(error)); // undefined
})();

/**
 * 프로미스를 이용한 데이터 캐싱
 * 
 * 처리됨 상태가 되면 그 상태를 유지하는 프로미스의 성질을 이용해서 데이터를 캐싱할 수 있다.
 * 다음은 프로미스를 이용해서 데이터 캐싱하는 코드다.
 * 
 */

// 프로미스로 캐싱 기능 구현하기
(() => {
    function requestData() {
        return (
            new Promise((resolve, reject) => {
                resolve(100000);
                // reject('errorrrrrrr');
            })
        )
    }
    let cachedPromise;
    function getData() {
        // getData 함수를 처음 호출할 때만 호출된다. 데이터를 가져오는 작업이 끝나면 그 결과는
        // cachedPromise 프로미스에 저장된다. 데이터를 가져오는 작업에 실패하는 경우가 고려되지 않았지만,
        // 지금은 프로미스로 캐싱을 구현할 수도 있다는 점만 기억하기 바란다.
        cachedPromise = cachedPromise || requestData();
        return cachedPromise;
    }
    getData().then(v => console.log(v), error => console.log(error));
    getData().then(v => console.log(v), error => console.log(error));
})();