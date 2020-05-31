// 객체 비구조화
// import './ObjectStudy';

// 강화된 함수의 기능
// import './FunctionStudy'; // 매개변수에 추가된 기능
// import './FunctionStudy2'; // 함수를 정의하는 새로운 방법 : 화살표 함수
// import './PromiseStudy1'; // 향상된 비동기 프로그래밍 1: 프로미스
// import './PromiseStudy2'; // 프로미스 이용하기 2: catch, 프로미스 이용하기 3: finally
// import './PromiseStudy3'; // 프로미스 활용하기
import './PromiseStudy4'; // 프로미스 사용 시 주의할 점








// (() => {
    
// })();

// function obj() {
//     this.value = 1;
//     this.increase = () => {
//         this.value++;
//     }
// }

// const obj1 = new obj();
// console.log(obj1.value);
// obj1.increase();
// console.log(obj1.value);

// const increase = obj1.increase;
// window.value = 1;
// console.log(window.value);
// increase();
// console.log("obj - ", obj1.value);
// console.log("window - ", window.value);
// increase();
// console.log("obj - ", obj1.value);
// console.log("window - ", window.value);
// increase();
// console.log("obj - ", obj1.value);
// console.log("window - ", window.value);
// increase();
// console.log("obj - ", obj1.value);
// console.log("window - ", window.value);

// let num = 1;
// document.querySelector("#Button1").addEventListener("click", function(){
// document.addEventListener("click", () => {
//     console.log(num += 1);
// });