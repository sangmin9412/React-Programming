console.log('1. --------------------------------------');

(() => {
    const obj = {
        age: 21,
        name: 'mike'
    };
    const { age, name } = obj;
    // const { name, age } = obj; // 위 와 결과값이 같음.
    const { a, b } = obj;
    console.log(age, name);
    console.log(a, b);
})();

console.log('2. --------------------------------------');

(() => {
    const obj = {
        age: undefined,
        name: 'mike'
    };
    const { age: theAge, name } = obj;
    console.log(theAge);
    // console.log(age); // age의 값을 theAge 변수에 할당한다. - 참조에러
})();

console.log('3. --------------------------------------');

(() => {
    const obj = {
        age: undefined,
        name: null,
        grade: 'A'
    };
    const { age = 0, name = 'noName', grade = 'F' } = obj;
    console.log(age);
    console.log(name);
    console.log(grade);
})();

console.log('4. --------------------------------------');

(() => {
    const obj = {
        age: undefined,
        name: 'mike'
    };
    const { age: theAge = 21, name} = obj;
    console.log(theAge);
})();

console.log('5. --------------------------------------');

(() => {
    function getDefaultAge() {
        console.log('hello');
        return 0;
    }
    const obj = {
        age: 21,
        grade: 'A'
    };
    const { age = getDefaultAge(), grade } = obj; // hello 출력되지 않음 - age가 undefined 아니므로.
    console.log(age); // 21
})();

console.log('6. --------------------------------------');

(() => {
    const obj = {
        age: 21,
        name: 'mike',
        grade: 'A'
    };
    const { age, ...rest } = obj;
    console.log(age);
    console.log(rest);
})();

console.log('7. --------------------------------------');

(() => {
    const people = [
        {
            age: 21,
            name: 'mike'
        },
        {
            age: 51,
            name: 'sara'
        }
    ];
    for (const { age, name } of people) {
        // console.log(age, name);
        console.log(age);
    }
})();

console.log('8. --------------------------------------');

(() => {
    const obj = {
        name: 'mike',
        mother: {
            name: 'sara'
        }
    };
    const {
        name,
        mother: { name: motherName }, // 세 개의 단어가 등장하지만, 비구조화의 결과로 motherName이라는 이름의 변수만 생성된다.
    } = obj;
    console.log(name);
    console.log(motherName);
    // console.log(mother); // 참조에러.
})();

console.log('9. --------------------------------------');

(() => {
    const [{ prop: x } = { prop: 123 }] = []; // 배열의 첫번째 원소가 존재하지않아서 기본값이 할당됨.
    console.log(x);
    // const [{ prop: x } = { prop: 123 }] = [{}]; // 배열의 첫번째 원소가 있지만 속성명이 존재하지않아 undefined로 할당됨.
    // console.log(x);
})();

console.log('10. --------------------------------------');

(() => {
    const index = 1;
    const { [`key${index}`]: valueOfTheIndex } = { key1: 123 }; // === key1: valueOfTheIndex = { key1: 123 }
    console.log(valueOfTheIndex);
})();

console.log('11. --------------------------------------');

(() => {
    const obj = {};
    const arr = [];
    ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
    console.log(obj);
    console.log(arr);
})();