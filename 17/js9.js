// 날짜 시간 Date 객체

const now = new Date(); // 생성자 객체를 이용해서 데이트객체를 생성

console.log(now.getFullYear()) // getFullYear() :현재 년도를 가져오는 메서드
console.log(now.getMonth()) // 월 가져오는 메서드 (0이 1월이니까 해당 월이 나오게 하려면 +1 해줘야 함)
console.log(now.getDate()) // 일 가져오는 메서드 
console.log(now.getTime()) // 시간을 가져오는 메서드 
console.log(now.getHours()) // 시
console.log(now.getMinutes()) // 분 
console.log(now.getSeconds()) // 초

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();


let timebox = `${h} : ${m} : ${s}`
console.log(timebox)

