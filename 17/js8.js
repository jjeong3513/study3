const text = 'Hello World!';
console.log(text.length); // 12(공백 포함)
console.log(text.charAt(0)); // H
console.log(text.charAt(6)); // w
console.log(text.indexOf('e')); // 1 (같은 문자열에 있으면 그 문자열의 해당 인덱스 번호를 출력하고 같은 문자열에 없으면 -1을 출력함)
console.log(text.lastIndexOf('1')); 
console.log(text.includes('H')); // 문자열에 해당 문자가 있으면 true, 없으면 flase
console.log(text.toUpperCase()); // 대문자로 바꿔줌
console.log(text.substring(0,2));// He(0부터 2 직전까지 잘림) 
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d! (뒤에서부터 2개 반환)
console.log(text.slice(0,5)); // Hello (0부터 5까지 반환)
console.log(text.substring(-2,6));
console.log(text.slice(-2,5));

const spacetxt1 = '    aaa       bbbb'
console.log(spacetxt1.trim()); // 앞에 있는 공백만 지울 수 있고 중간에 있는 공백은 못지움

const spacetxt2 = 'aaaa bbbb cccc dddd';
console.log(spacetxt2.split(' ')); // [ 'aaaa', 'bbbb', 'cccc', 'dddd' ]

const spacetxt3 = 'aaaa bbbb, cccc dddd';
console.log(spacetxt2.split(' '));

const spacetxt4 = 'aaaa-bbbb-cccc-dddd';
console.log(spacetxt2.split('-')); //[ 'aaaa bbbb cccc dddd' ]
console.log(spacetxt2.split('-',2));

const textSample = "가나다라마바사 ABCDEFG 123456 가나다라마바사";
console.log(textSample.slice(5,-10)) // 바사 ABCDEFG 1234
console.log(textSample.substring(5,-10)) // 가나다라마

console.log(textSample.slice(-2)) // 바사
console.log(textSample.substring(-2))// 0으로 처리해서 전부 출력

// slice(n) : n번째 인덱스부터 끝까지 추출
// slice(n,m) : n번째부터 m-1까지 추출
//음수면 뒤부터 계산

// substring 음수가 오면 0

