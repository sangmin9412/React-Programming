/**
 * 프로미스 이용하기 2: catch
 * 
 * catch는 프로미스 수행 중 발생한 예외를 처리하는 메서스다. catch 메서드는
 * then 메서드의 onReject 함수와 같은 역할을 한다.
 * 
 */

// 같은 기능을 하는 then 메서드와 catch 메서드
// 다음은 동일한 기능을 then 메서드와 catch메서드로 각각 구현한 코드다.
(() => {
    Promise.reject(1).then(null, error => {
        console.log(error);
    });
    // 예외 처리는 then 메서드의 onReject 함수보다는 catch 메서드를 이용하는게 가독성 면에서 더 좋다.
    Promise.reject(1).catch(error => {
        console.log(error);
    });
})();

// then 메서드의 onReject를 사용했을 때의 문제점
// 다음은 onReject 함수에서 예외를 처리할 때 발생하는 문제를 보여 준다.
(() => {
    Promise.resolve().then(
        // then 메서드의 onResolve 함수에서 발생한 예외는 같은 then 메서드의 onReject 함수에서 처리되지 않는다.
        // 아래 코드를 실행하면 Unhandled Rejection Error 가 발생한다. 거부됨 상태인 프로미스를 처리하지 않았기 때문이다.
        // () => {
        //     throw new Error('some error');
        // },
        // error => {
        //     console.log(error);
        // }
    );
})();

// 코드를 다음과 같이 수정하면 이 문제는 해결된다.
// onReject 함수를 사용하지 않고 catch를 사용한 예
(() => {
    // 프로미스에서 예외 처리를 할 때는 then 메서드의 onReject 함수보다는 좀 더 직관적인 catch 메서드를 이용할 것을 추천한다.
    // then 메서드와 마찬가지로 catch 메서드도 새로운 프로미스를 반환한다.
    Promise.resolve()
        .then(() => {
            throw new Error('some error');
        })
        .catch(error => {
            console.log(error);
        })
})();

// 따라서 다음처럼 catch 메서드 이후에도 계속해서 then 메서드를 사용할 수 있다.
// catch 메서드 이후에도 then 메서드 사용하기
(() => {
    Promise.reject(10)
        .then(data => { // resolve 메서드는 무시됨.
            console.log('then1:', data);
            return 20;
        })
        .catch(error => { // catch 인자로 들어온 error = 10;
            console.log('catch:', error);
            return 30; // return = 30;
        })
        .then(data => { // data = 30;
            console.log('then2:', data);
        });
})();

/**
 * 프로미스 이용하기 3: finally
 * 
 * finally는 프로미스가 이행됨 또는 거부됨 상태일 때 호출되는 메서드다. 이 메서드는 2018년에 자바스크립트 표준으로 채택됐다.
 * finally 메서드는 다음과 같이 프로미스 체인의 가장 마지막에 사용된다.
 * 
 */

// finally를 사용한 간단한 코드
(() => {
    function requestData() {
        return (
            Promise.resolve(10)
            // Promise.reject('finally error')
        )
    }
    requestData()
        .then(data => {
            // ....
            console.log('then :', data);
        })
        .catch(error => {
            // ....
            console.log('catch :', error);
        })
        .finally(() => {
            // ....
            console.log('finally');
        })
})();

/**
 * finally 메서드는 .then(onFinally, onFinally) 코드와 유사하지만, 이전에 사용된 프로미스를 그대로 반환한다는 점이 다르다.
 * 따라서 처리됨 상태인 프로미스의 데이터를 건드리지 않고 추가 작업을 할 때 유용하게 사용될 수 있다.
 * 다음은 데이터 요청의 성공, 실패 여부와 상관없이 서버에 로그를 보낼 때 finally 메서드를 사용한 코드다.
 * 
 */

// finally 메서드는 새로운 프로미스를 생성하지 않는다.
(() => {
    function requestData() {
        return fetch()
            .catch(error => {
                // ...
            })
            .finally(() => {
                // sendLogToServer('requestData finished');
                console.log('requestData finished');
            })
    }
    // requestData 함수의 반환값은 finally 메서드 호출 이전의 프로미스다.
    // 따라서 requestData 함수를 사용하는 입장에서는 finally 메서드의 존재 여부를 신경 쓰지 않아도 된다.
    requestData().then(data => console.log(data));
})();