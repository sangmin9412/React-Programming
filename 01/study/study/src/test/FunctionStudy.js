(() => {
// 매개변수에 기본값 주기
function printLog(a = getDefault()) {
    console.log({ a });
}
printLog();

// 매개변수 기본값으로 함수 호출 사용하기
function getDefault() {
    console.log('[getDefault()]');
    return 1;
}
})();


// 매개변수 기본값을 이용해서 필숫값을 표현하는 방법
(() => {
function required() {
    throw new Error('no parameter');
}
function printLog(a = required()) {
    console.log({ a });
}
printLog(10);
// printLog(); // 에러 발생 : no parameter
})();

// 나머지 매개변수를 사용한 코드
(() => {
function printLog(a, ...rest) {
    console.log({ a, rest });
}
printLog(1, 2, 3); // { a: 1, rest: [2, 3] }
})();


// 위 코드를 arguments로 구현
(() => {
function printLog(a) {
    // const rest = arguments;
    const rest = Array.from(arguments).splice(1); // splicee 1번째 값을 뺌.
    console.log(a, rest);
}
printLog(1, 2, 3);
})();

// function getValues() {
    
// }

// const numbers = [10, 20, 30, 40, 50];
// const result1 = getValues(numbers, 5 ,25); // 함수 호출 시 매개변수의 이름이 보이지 않아 인수가 의미하는 바를 알기 어렵다.
// const result2 = getValues({ numbers, greaterThan: 5, lessThan: 25 });

// const result1 = getValues(numbers, undefined, 25); // 명명된 매개변수 없이 선택적 매개변수를 사용한 예로, 필요 없는 매개변수 자리에 undefined를 넣으면 된다.
// const result2 = getValues({ numbers, greaterThan: 5 }); // 명명된 매개변수를 사용했다. 필요한 인수만 넣어 주면 되기 때문에 선택적 매개변수가 늘어나도 문제없이 사용할 수 있다.
// const result3 = getValues({ numbers, lessThan: 25 });

