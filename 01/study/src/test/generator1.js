/**
 * 2.7 실행을 멈출 수 있는 제너레이터
 * 
 * 제너레이터(generator)는 함수의 실행을 중간에 멈추고 재개할 수 있는 독특한 기능이다.
 * 실행을 멈출 때 값을 전달할 수 있기 때문에 반복문에서 제너레이터가 전달하는 값을 하나씩 꺼내서 사용할 수 있다.
 * 이는 배열이 반복문에서 사용되는 방식과 같다.
 * 다만, 제너레이터는 보통의 컬렉션(collection)과 달리 값을 미리 만들어 놓지 않는다.
 * 값을 미리 만들어 놓으면 불필요하게 메모리를 사용하는 단점이 있다.
 * 제너레이터를 사용하면 필요한 순간에 값을 계산해서 전달할 수 있기 때문에 메모리 측면에서 효율적이다.
 * 
 * 제너레이터는 값을 전달하는 용도 외에도 다른 함수와 협업 멀티태스킹(cooperative multitasking)을 할 수 있다.
 * 제너레이터가 실행을 멈추고 재개할 수 있기 때문에 멀티태스킹이 가능하다.
 * 협업이라는 단어가 붙는 이유는 제너레이터가 실행을 멈추는 시점을 자발적(non-preemptive)으로 선택하기 때문이다.
 * 
 * 제너레이터가 어떻게 실행을 멈추고 재개하는지 살펴보자.
 */

/**
 * 제너레이터 이해하기
 * 
 * 제너레이터는 별표와 함께 정의된 함수와 그 함수가 반환하는 제너레이터 객체로 구성된다.
 * 다음은 간단한 제너레이터 함수의 코드다.
 */

// 간단한 제너레이터 함수의 예
(() => {
  console.log('간단한 제너레이터 함수의 예)1');
    function* f1() {
        yield 10;
        yield 20;
        return 'finished';
    }
    const gen = f1();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
})();


(() => {
  console.log('간단한 제너레이터 함수의 예)2');
    function* f1() {
        console.log('f1-1');
        yield 10;
        console.log('f1-2');
        yield 20;
        console.log('f1-3');
        return 'finished';
    }
    const gen = f1();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());

})();

/**
 * 제너레이터 함수를 실행하면 제너레이터 객체만 반환되고 실제로 함수 내부 코드는 실행되지 않는다.
 * next 메서드를 호출하면 yield 키워드를 만날 때까지 실행되고 데이터 객체를 반환한다.
 * yield 키워드를 만나면 데이터 객체의 done 속성값은 거짓(false)가 되고, 만나지 못하면 참(true)가 된다.
 * yield 키워드 오른쪽의 값이 데이터 객체의 value 속성값으로 넘어온다.
 * 
 * 제너레이터 객체가 next 메서드를 갖고 있다는 사실은 제너레이터 객체가 반복자(iterator)라는 것을 암시한다.
 * 반복자의 정의와 반복자로 할 수 있는 일은 잠시 후 살펴보자.
 * 
 * 다음은 제너레이터 객체의 return 메서드를 호출한 결과를 보여 준다.
 */

// 제너레이터 객체의 return 메서드 호출하기
(() => {
  console.log('제너레이터 객체의 return 메서드 호출하기');
    function* f1() {
        console.log('f1-1');
        yield 10;
        console.log('f1-2');
        yield 20;
        console.log('f1-3');
        return 'finished';
    }
    const gen = f1();
    console.log(gen.next());
    console.log(gen.return('abc'));
    console.log(gen.next());
})();
/**
 * return 메서드를 호출하면 데이터 객체의 done 속성값은 참이 된다.
 * 이후에 next 메서드를 호출해도 done 속성값은 참이 된다.
 * 
 * 다음은 제너레이터 객체의 throw 메서드를 호출한 결과를 보여 준다.
 */ 

(() => {
  console.log('다음은 제너레이터 객체의 throw 메서드를 호출한 결과를 보여 준다');
    function* f1() {
        try {
            console.log('f1-1');
            yield 10;
            console.log('f1-2');
            yield 20;   
        } catch (e) {
            console.log('f1-catch', e);
        }
    }
    const gen = f1();
    console.log(gen.next());
    console.log(gen.throw('some error'));
})();
/**
 * try catch 문을 사용해서 예외 처리를 할 수 있도록 수정했다.
 * throw 메서드를 호출하면 예외가 발생한 것으로 처리되기 때문에 catch 문으로 들어간다.
 * 
 * 이때 데이터 객체의 done 속성값은 참이 된다.
 */

/**
 * 반복 가능하면서 반복자인 제너레이터 객체
 * 
 * 제너레이터 객체는 반복 가능하면서 반복자이다. 다음 조건을 만족하는 객체는 반복자이다.
 * - next 메서드를 갖고 있다.
 * - next 메서드는 value와 done 속성값을 가진 객체를 반환한다.
 * - done 속성값은 작업이 끝났을 때 참이 된다.
 * 
 * 다음 조건을 만족하면 반복 가능(iterable)한 객체다.
 * - Symbol.iterator 속성값으로 함수를 갖고 있다.
 * - 해당 함수를 호출하면 반복자를 반환한다.
 * 
 * 배열은 대표적인 반복 가능한 객체다.
 */

//  배열은 반복 가능한 객체다
(() => {
    console.log('배열은 반복 가능한 객체다');
    const arr = [10, 20, 30];
    const iter = arr[Symbol.iterator]();
    console.log(iter.next()); // {value:10, done: false}
})();
/**
 * 배열은 Symbol.iterator 속성값으로 함수를 갖고 있으므로 첫 번째 조건을 만족한다.
 * 함수가 반환한 iter 변수는 반복자이므로 두 번째 조건도 만족한다.
 */

// 제너레이터 객체는 반복 가능한 객체다
(() => {
  console.log('제너레이터 객체는 반복 가능한 객체다');
  function* f1() {
    yield 10;
    yield 20;
    yield 30;
  }
  const gen = f1();
  console.log(gen[Symbol.iterator]() === gen); // true
})();
/**
 * Symbol.iterator 속성값을 호출한 결과가 자기 자신(반복자)이다. 따라서 제너레이터 객체는 반복 가능한 객체다.
 * 반복 가능한 객체는 다음과 같이 for of 문과 전개 연산자에서 유용하게 쓰인다.
 */

// 반복 가능한 객체를 이용하는 코드
(() => {
  console.log('반복 가능한 객체를 이용하는 코드');
  function* f1() {
    yield 10;
    yield 20;
    yield 30;
  }
  for (const v of f1()) {
    console.log(v);
  }
  const arr = [...f1()];
  console.log(arr); // [10, 20, 30]
})();
/**
 * for of 문은 반복 가능한 객체로부터 반복자를 얻는다.
 * 그리고 반복자의 next 메서드를 호출하면서 done 속성값이 참이 될 때까지 반복한다.
 * 마찬가지로 전개 연산자도 done 속성값이 참이 될 때까지 값을 펼친다.
 */