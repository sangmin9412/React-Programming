/**
 * 2.7.2 제너레이터 활용하기
 * 
 * 제너레이터를 활용해서 할 수 있는 일을 알아보자.
 * 제너레이터, 반복자, 반복 가능한 객체를 이용하면 함수형 프로그래밍의 대표적인 함수를 쉽게 구현할 수 있다.
 * 다음은 함수형 프로그래밍의 대표적인 함수인 map, filter, take 함수를 구현한 코드다.
 */

// 제너레이터로 구현한 map, filter, take 함수
(() => {
  console.log('제너레이터로 구현한 map, filter, take 함수');

  function* map(iter, mapper) { // iter - filter를 통해 걸러진 짝수 배열, mapper - 배열을 하나씩 받아 * 10 연산후 리턴
    for (const v of iter) {
      yield mapper(v);
    }
  }

  function* filter(iter, test) { // iter - values array를 받음, test - 짝수만 리턴
    for (const v of iter) {
      if (test(v)) {
        yield v;
      }
    }
  }

  function* take(n, iter) { // n - 리턴 할 횟수 (yield 횟수), iter - 리턴할 값들이 저장된 반복자
    for (const v of iter) {
      if (n <= 0) return;
      yield v;
      n--;
    }
  }

  const values = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10];
  const result = take(3, map(filter(values, n => n % 2 == 0), n => n * 10));
  console.log([...result]);
})();
/**
 * 제너레이터 함수 내부에서 반복가능한 객체를 이용하고 있다.
 * 세 함수는 제너레이터 덕분에 새로운 배열 객체를 생성하지 않는다.
 * 주목할 점은 세 함수가 연산이 필요한 순간에만 실행된다는 점이다.
 * 함수를 호출하면 제너레이터 객체만 생성되고 실제 연산은 수행되지 않는다.
 * 그리고 값이 필요한 순간에 제너레이터 객체를 통해 다음 값을 요청한다.
 * 이렇게 필요한 순간에만 연산하는 방식을 지연 평가(lazy evaluation)라고 부른다.
 */

// 제너레이터 함수로 자연수의 집합 표현
(() => {
  console.log('제너레이터 함수로 자연수의 집합 표현');

  function* map(iter, mapper) { // iter - filter를 통해 걸러진 짝수 배열, mapper - 배열을 하나씩 받아 * 10 연산후 리턴
    for (const v of iter) {
      yield mapper(v);
    }
  }

  function* filter(iter, test) { // iter - values array를 받음, test - 짝수만 리턴
    for (const v of iter) {
      if (test(v)) {
        yield v;
      }
    }
  }

  function* take(n, iter) { // n - 리턴 할 횟수 (yield 횟수), iter - 리턴할 값들이 저장된 반복자
    for (const v of iter) {
      if (n <= 0) return;
      yield v;
      n--;
    }
  }

  function* naturalNumbers() {
    let v = 1;
    while (true) {
      yield v++;
    }
  }

  const values = naturalNumbers();
  const result = take(3, map(filter(values, n => n % 2 === 0), n => n * 10));
  console.log([...result]);
})();
/**
 * 자연수의 집합을 제너레이터 함수로 표현했다.
 * 제너레이터 함수를 사용하지 않았다면 이 함수를 실행하는 프로그램은 먹통이 될 것이다.
 * 전개 연산자를 실행하면 자연수 1부터 6까지만 연산에 사용된다.
 */

 /**
  * 제너레이터 함수끼리 호출하기
  * 
  * 제너레이터 함수에서 다른 제너레이터 함수를 호출할 때는 yield* 키워드를 이용한다.
  */
// 제너레이터 함수가 다른 제너레이터 함수 호출하기
(() => {
  console.log('제너레이터 함수가 다른 제너레이터 함수 호출하기');
  function* g1() {
    yield 2;
    yield 3;
  }
  function* g2() {
    yield 1;
    yield* g1();
    yield 4;
  }
  console.log(...g2()); // 1 2 3 4
})();
/**
 * 제너레이터 함수에서 다른 제너레이터 함수를 호출하고 있다.
 * 사실 yield* 키워드 오른쪽에는 반복 가능한 객체가 올 수 있도록 설계되었다.
 */

// 다음은 위 코드의 g2 함수와 같은 역할을 수행하는 제너레이터 함수다.
// 반복 가능한 객체를 처리하는 yield* 키워드
(() => {
  console.log('반복 가능한 객체를 처리하는 yield* 키워드');
  function* g1() {
    yield 2;
    yield 3;
  }
  function* g2_second() {
    yield 1;
    for (const value of g1()) {
      yield value;
    }
    yield 4;
  }
  function* g2_third() {
    yield 1;
    yield* [2, 3];
    yield 4;
  }
  console.log(...g2_second());
  console.log(...g2_third());
})();
/**
 * yield* 키워드 오른쪽에는 제너레이터 객체뿐만 아니라 반복 가능한 모든 객체가 올 수 있다.
 */

/**
 * 제너레이터 함수로 데이터 전달하기
 * 
 * 제너레이터 함수는 외부로부터 데이터를 받아서 소비할 수 있다.
 * next 메서드를 호출하는 쪽에서 제너레이터 함수로 데이터를 전달할 수 있다.
 * 다음과 같이 next 메서드의 인수로 데이터를 전달할 수 있다.
 */

// next 메서드를 이용해서 제너레이터 함수로 데이터 전달하기
(() => {
  console.log('next 메서드를 이용해서 제너레이터 함수로 데이터 전달하기');
  function* f1() {
    const data1 = yield;
    console.log(data1); // 10
    const data2 = yield;
    console.log(data2); // 20
  }
  const gen = f1();
  gen.next();
  gen.next(10);
  gen.next(20);
})();
/**
 * 첫 번째 next 메서드의 호출은 제너레이터 함수의 실행이 시작되도록 하는 역할만 수행한다.
 * next 메서드의 인수로 데이터를 전달할 수 있다.
 * next 메서드를 통해서 전달된 인수는 yield 키워드의 결괏값으로 받을 수 있다.
 */

/**
 * 협업 멀티태스킹
 * 
 * 제너레이터는 다른 함수와 협업 멀티태스킹을 할 수 있다.
 * 멀티태스킹은 여러개의 태스크를 실행할 때 하나의 태스크가 종료되기 전에 멈추고 다른 태스크가 실행되는 것을 말한다.
 * 제너레이터는 실행을 멈추고 재개할 수 있기 때문에 멀티태스킹이 가능하다.
 * 협업이라는 단어가 붙는 이유는 제너레이터가 실행을 멈추는 시점이 자발적(non-preemptive)으로 선택하기 때문이다.
 * 반대로 실행을 멈추는 시점을 자발적으로 선택하지 못하면 선점형(preemptive) 멀티태스킹이 라고 부른다.
 */

// 다음 코드의 두 함수는 제너레이터 덕분에 협업 멀티태스킹 방식으로 동작한다.
// 제너레이터 함수를 이용한 협업 멀티태스킹
(() => {
  console.log('제너레이터 함수를 이용한 협업 멀티태스킹');
  function* minsu() {
    const myMsgList = [
      '안녕 나는 민수야',
      '만나서 반가워',
      '내일 영화 볼래?',
      '시간 안 되니?',
      '내일모레는 어때?',
    ];
    for (const msg of myMsgList) {
      console.log('minsu()', msg);
      console.log('수지:', yield msg); // gen.next(msg)를 통해 전달받은 메세지
    }
  }
  function suji() {
    const myMsgList = [
      '',
      '안녕 나는 수지야',
      '그래 반가워',
      '...',
    ];
    const gen = minsu();
    for (const msg of myMsgList) {
      console.log('suji()', msg);
      console.log('민수:', gen.next(msg).value); // yield msg 를 통해 전달받은 메세지
    }
    console.log('대화가 끝났습니다.');
  }
  suji();
})();
/**
 * 제너레이터 함수는 yield 키워드를 통해서 자발적으로 자신의 실행을 멈춘다.
 * 일반 함수에서는 제너레이터 객체의 next 메서드를 호출해서 제너레이터 함수가 다시 실행되도록 한다.
 * 이는 일반 함수가 자신의 실행을 멈춘다고 볼 수도 있다.
 */

/**
 * 제너레이터 함수의 예외 처리
 * 
 * 제너레이터 함수에서 발생한 예외를 처리하는 방법을 알아보자.
 * 제너레이터 함수에서 발생한 예외는 next 메서드를 호출하는 외부 함수에 영향을 준다.
 */

// 다음 코드는 제너레이터 함수에서 예외가 발생한 경우를 설명한다.
// 제너레이터 함수에서 예외가 발생한 경우
(() => {
  console.log('제너레이터 함수에서 예외가 발생한 경우');
  function* genFunc() {
    throw new Error('some error');
  }
  function func() {
    const gen = genFunc();
    try {
      gen.next();
    } catch (error) {
      console.log('in catch:', error);
    }
  }
  func();
})();
/**
 * 제너레이터 함수에서 예외가 발생한다.
 * 제너레이터 객체가 만들어지는 시점에는 아직 예외가 발생하지 않는다.
 * next 메서드가 호출되면 제너레이터 함수의 예외가 일반 함수에 영향을 준다.
 * 따라서 일반 함수의 실행은 catch문으로 이동한다.
 */