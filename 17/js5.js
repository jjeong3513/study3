//전역객체 (global object) -> 자바스크립트에 내장되어 있는 객체. 전역객체의 범위가 전체라는 뜻
// this라는 연산자가 function 안에 있으면 전역객체를 가리킨다.


// 전역객체
console.log(globalThis)


//wrapper 객체 -> 원시 타입을 싸고 있는 객체
 const num = 2022; //  원시 
 const str = '05월25일' //원시

 console.log(num) //원시
 console.log(num.toString()); // 객체 (num에 toString을 사용했기 때문에 2022를 문자로 인식함)
