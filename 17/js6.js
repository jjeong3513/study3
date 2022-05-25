const num = 123;
const num1 = new Number(123);

console.log(typeof num) // number
console.log(typeof num1) // 123이라는 값을 가진 숫자 object

console.log(Number.MAX_VALUE) // max_value : 숫자로 표현할 수 있는 최대값
console.log(Number.MIN_VALUE)
console.log(Number.NaN); // 숫자가 아닌 값을 뱉어낸다

if(Number.isNaN(num1)){ // num1이 숫자인지 아닌지 확인한다 / isnan은 어떤 값이 숫자인지 아닌지를 판별한다.
    console.log('실행')
}

const num2 = 12345.1256;
console.log(num2.toFixed(1)) // toFixed는 소수점을 찍어주는 것
console.log(num2.toString()) // 숫자가 문자로 치환됨
console.log(num2.toPrecision(3)) // 원하는 자리까지 표현(전체 자리가 못나오게 되면 나머지 부분은 지수로 표시가 됨)
