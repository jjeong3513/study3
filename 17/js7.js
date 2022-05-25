console.log(Math.PI) // -> 수학객체 / 원주율을 구해주는 것

//toFixed(자리수) -> 넘버객체의 메서드

// 아래에 있는 건 수학객체의 메서드 (자주 쓰기 때문에 꼭 기억해두기!!)
console.log(Math.ceil(10.53)) // 올림 11
console.log(Math.floor(10.53)) // 내림 10
console.log(Math.round(10.53)) // 반올림 11

console.log(Math.min(1,5,10)) // 1 (가지고 있는 것들 중에 최소값)
console.log(Math.max(1,5,10)) // 10 (가지고 있는 것들 중에 최대값)

console.log(Math.random()) // 0 ~ 1 사이에서 랜덤으로 아무 수나 나온다
console.log(Math.random() * 10) // 0 ~ 10 사이에서 랜덤으로 아무 수나 나온다
console.log(Math.random() * 10 + 1) // 1 ~ 10 사이에서 랜덤으로 아무 수나 나온다
console.log(Math.round(Math.random() * 10 + 1)) // 1 ~ 10 사이의 숫자가 랜덤으로 나오는데 소수점 자리를 반올림


console.log(Math.round(Math.random() * 105))

//random 이용해서 5자리 인증번호출력
 let pass = ''; // 값을 안써주면 대입연산자로 합쳐주지를 못함. 빈 값이 들어가있어야 그 값에 계속 더할 수 있음.
 for(let i=1; i<6;i++){ //위에 ''로 인해서 문자열이 되었기 때문에 더해지면 암묵적으로 5글자가 됨(숫자였으면 저렇게 되지 않음)
    pass+=(Math.floor(Math.random()*10))  
 }
 console.log(pass)