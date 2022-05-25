const user = {
   get nameout(){ //get 을 붙여주면 데이터를 가져온다는 것. get으로 만들 때는 리턴 값이 있어야 함/ set은 매개변수가 무조this.num 한개 있어야 함
    return this._name ; // 언더바는 위에 있는 get name과 구분하기 위해 키 이름으로 붙인 것임.
   }, // 쉼표 붙여줘야 함
    set nameinput(value){  // set을 사용하면 입력받은 값에 조건을 만들어줄 수 있다.
        if(value.length < 5){
        console.log('글자수를 확인해주세요');
        return // 리턴 값은 언디파인드로 자동으로 들어감
    }
    this._name = value
  }

}

user.nameinput = 'merryjane'; // 글자 수가 5개 이상이라서 벨류 값이 나온거고 글자 수가 5개 이하면 리턴되어 글자수를 확인해달라고 나옴
console.log(user.nameout);