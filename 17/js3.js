//숫자를 입력받아서 set + get 10  출력

const num = {
    get outputnum(){
        return `출력값은 ${this._num + 10}` ;
    },
    set inputnum(value){
        this._num = value;
    }
}

num.inputnum = 20;
console.log(num.outputnum)  // num.outputnum ; 이렇게 입력해줘도 됨

// get, set을 활용하여 입력과 출력을 해주면 입력 값을 거를 수 있음
