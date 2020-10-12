/* async await 활용하기

    비동기 함수를 병렬로 실행하기
    async await 함수에서 여러 비동기 함수를 병렬로 처리하는 방법을 알아보자.
*/

// 다음과 같이 여러 비동기 함수에 각각 await 키워드를 사용해서 호출하면 순차적으로 실행된다.
// 순차적으로 실행되는 비동기 코드
(() => {
    function asyncFunc1(){return "asyncFunc1"}
    function asyncFunc2(){return "asyncFunc2"}
    async function getData() {
        const data1 = await asyncFunc1();
        const data2 = await asyncFunc2();
        console.log(data1, data2);
    }
    getData();
})();

/**
 * 앞의 코드에서 두 함수 사이에 의존성이 없다면 동시에 실행하는 게 더 좋다.
 * 프로미스는 생성과 동시에 비동기 코드가 실행된다.
 * 따라서 두 개의 프로미스를 먼저 생성하고 await 키워드를 나중에 사용하면 병렬로 실행되는 코드가 된다.
 * 
 */

 // await 키워드를 나중에 사용해서 병렬로 실행되는 비동기 코드
(() => {
    function asyncFunc1(){return "asyncFunc1"}
    function asyncFunc2(){return "asyncFunc2"}
    async function getData() {
        // p1, p2 두개의 프로미스가 생성되고 각자의 비동기 코드가 실행된다.
        const p1 = asyncFunc1();
        const p2 = asyncFunc2();
        // 두 프로미스가 생성된 후 기다리기 때문에 두 개의 비동기 함수가 병렬로 처리된다.
        const data1 = await p1;
        const data2 = await p2;
        console.log(data1, data2);
    }
    getData();
})();

// 위 코드는 Promise.all을 사용하면 다음과 같이 더 간단해진다.
// Promise.all을 사용해서 병렬로 실행하기
(() => {
    function asyncFunc1(){return "asyncFunc1"}
    function asyncFunc2(){return "asyncFunc2"}
    async function getData() {
        const [data1, data2] = await Promise.all([asyncFunc1(), asyncFunc2()]);
        console.log([data1, data2]);
    }
    getData();
})();

/**
 * 예외 처리하기
 * 
 * async await 함수에서 예외를 처리하는 방법을 알아보자.
 * async await 함수 내부에서 발생하는 예외는 다음과 같이 try catch 문으로 처리하는 게 좋다.
 * 
 */

// 동기와 비동기 함수 모두 catch 문에서 처리된다
(() => {
    function doAsync(){return "doAsync"};
    // function doAsync(){throw new Error('doAsync')}
    function doSync(){return "doSync"}
    // function doSync(){throw new Error('doSync')}
    async function getData() {
        try {
            /**
             * 비동기 함수와 동기 함수에서 발생하는 모든 예외가 catch 문에서 처리된다.
             * 만약 getData 함수가 async await 함수가 아니였다면 doAsync 함수에서 발생하는 예외는 catch 문에서 처리되지 않는다.
             * 이는 doAsync 함수의 처리가 끝나는 시점을 알 수 없기 때문이다.
             * 
             */
            await doAsync();
            return doSync();
        } catch (error) {
            console.log(error);
        }
    }
    getData();
})();

/**
 * Thenable을 지원하는 async await
 * 
 * Thenable은 프로미스처럼 동작하는 객체다. 프로미스가 ES6에 등장하기 이전부터
 * 이미 여러 프로미스 라이브러리가 나왔다. 많은 개발자가 이러한 라이브러리를 사용해서
 * ES6 이전부터 프로미스를 사용해 왔다. async await는 ES6의 프로미스가 아니더라도 then 메서드를 가진 객체를 프로미스처럼 취급한다.
 * 이렇게 ES6의 프로미스가 아니더라도 then 메서드를 가진 객체를 Thenable 이라고 부른다.
 * 
 */

// 다음 코드의 ThenableExample 클래스로 생성한 객체는 Thenable이다. 
// await 키워드와 함께 Thenable을 사용할 수 있다.
// async await 함수에서 Thenable을 사용한 예
(() => {
    class ThenableExample {
        // ThenableExample 클래스는 then 메서드를 갖고 있으므로, 
        // ThenableExample 클래스로 생성된 객체는 Thenable 이다.
        then(resolve, reject) {
            setTimeout(() => resolve(123), 1000);
        }
    }

    async function asyncFunc() {
        // async await 함수는 Thenable 도 프로미스처럼 처리한다.
        const result = await new ThenableExample();
        console.log(result);
    }
    asyncFunc();
})();