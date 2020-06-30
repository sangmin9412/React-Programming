/* async await 이해하기

    async await 함수는 프로미스를 반환한다
    프로미스는 객체로 존재하지만 async await는 함수에 적용되는 개념이다.
    다음과 같이 async await 함수는 프로미스를 반환한다.
*/

// 프로미스를 반환하는 async await 함수
(() => {
    async function getData() { // async 키워드를 이용해서 정의된 함수는 async await 함수이며, 항상 프로미스를 반환한다.
        return 123;
    }
    getData().then(data => console.log(data)); // 따라서 함수 호출 후 then 메서드를 사용할 수 있다.
})();

// async await 함수 내부에서 프로미스를 반환하는 경우를 살펴보자.
// 프로미스를 반환하는 async await 함수
(() => {
    async function getData() {
        // 프로미스의 then 메서드와 마찬가지로 
        // async await 함수 내부에서 반환하는 값이 프로미스라면 그 객체를 그대로 반환한다.
        return Promise.resolve(123); 
    }
    getData().then(data => console.log(data));
})();

// 다음과 같이 async await 함수 내부에서 예외가 발생하는 경우에는 거부됨 상태인 프로미스가 반환된다.
// async await 함수에서 예외가 발생하는 경우
(() => {
    async function getData() {
        throw new Error('123');
    }
    getData().catch(error => console.log(error));
})();

/* await 키워드를 사용하는 방법

    await 키워드는 async await 함수 내부에서 사용된다. await 키워드 오른쪽에 프로미스를 입력하면
    그 프로미스가 처리됨 상태가 될 떄까지 기다린다. 따라서 await 키워드로 비동기 처리를 기다리면서
    순차적으로 코드를 작성할 수 있다.
*/

// 다음은 await 키워드를 사용한 예다.
// await 키워드를 사용 예
(() => {
    function requestData(value) {
        return new Promise(resolve => setTimeout(() => {
                console.log('requestData:', value);
                resolve(value);
            }, 100),
        );
    }
    async function getData() {
        const data1 = await requestData(10); // requestData 함수가 반환하는 프로미스가 처리됨 상태가 될 때까지
        const data2 = await requestData(20);
        console.log(data1, data2); // <- 코드는 실행되지 않는다.
        return [data1, data2];
    }
    getData();
    // requestData: 10
    // requestData: 20
    // 10 20
})();

// await 키워드는 오직 async await 함수 내에서만 사용될 수 있다.
// 다음과 같이 await 키워드를 일반 함수에서 사용하면 에러가 발생한다.
(() => {
    function requestData(value) {
        return new Promise(resolve => setTimeout(() => {
                console.log('requestData:', value);
                resolve(value);
            }, 100),
        );
    }
    // function getData() {
    //     const data = await requestData(10) // 에러 발생
    //     console.log(data);
    // }
})();

/* async await는 프로미스보다 가독성이 좋다

    async await와 프로미스는 비동기 프로그래밍을 동기 프로그래밍 방식으로 작성할 수 있게 해 준다.
*/

// 다음 코드는 async await와 프로미스를 비교하기 위해 같은 기능을 각각의 방식으로 구현한 것이다.
// async await 와 프로미스 비교하기
(() => {
    function asyncFunc1(){}
    function asyncFunc2(){}
    function getDataPromise() {
        asyncFunc1().then(data => {
            console.log(data);
            return asyncFunc2();
        }).then(data => {
            console.log(data);
        });
    }

    // async await 함수는 then 메서드를 호출할 필요가 없기 때문에 더 간결하다.
    async function getDataAsync() {
        const data1 = await asyncFunc1();
        console.log(data1);
        const data2 = await asyncFunc2();;
        console.log(data2);
    }
})();
/*
    비동기 함수 간에 의존성이 높아질수록 async await 와 프로미스의 가독성 차이는 더 선명하게 드러난다.
    다음은 서로 의존성이 있는 여러 비동기 함수의 처리를 각각 async await와 프로미스로 작성한 코드다.
    asyncFunc1, asyncFunc2, asyncFunc3 세 함수는 각각의 반환값을 다른 함수의 인수로 넣으면서 의존성을 갖고 있다.
*/

// 의존성이 높은 코드에서 가독성 비교하기
(() => {
    function asyncFunc1(){}
    function asyncFunc2(){}
    function asyncFunc3(){}
    function getDataPromise() { // 두 반환값을 asyncFunc3 함수에 전달하기 위해 Promise.all을 사용했다.
        return asyncFunc1()
        .then(data1 => Promise.all([data1, asyncFunc2(data1)]))
        .then(([data1, data2]) => {
            return asyncFunc3(data1, data2);
        });
    }

    async function getDataAsync() { // async await 함수는 복잡한 의존성이 존재함에도 코드가 직관적이다.
        const data1 = await asyncFunc1();
        const data2 = await asyncFunc2(data1);
        return asyncFunc3(data1, data2);
    }
})();