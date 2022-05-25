
class User{
constructor(name,age){ 
    this.name = name;
    this.age = age;
    
   }
  hi(){
    console.log('이름은'+this.name+'나이는'+this.age)
  }
}

const user1 = new User('zeze',10);
const user2 = new User('lala',12);
console.log(user1)
console.log(user2)
user2.hi() //constructor 밖(class 안)에 있으면 부모의 프로토타입에서 공유가 됨



//extends (키워드를 확장/ 클래스르 갖고 다른 클래스를 하나 더 만든다)

class AddUser extends User {
    constructor(name,age,location){
        super(name,age);  // User class를 상속한다. 안받아주면 위에 있는 부분이 상속되지 않는다. 
        this.location = location;

    } 
    hi(){
        super.hi(); 
        console.log(`안녕하세요 현재 유저의 위치는 ${this.location}`)
     }

}

const user4 = new AddUser('merry',25,'LA')
console.log(user4)
user4.hi()




//dog 클래스 color,weight,gender
// dog 확장시켜서 cat  color,weight,gender + name

class Dog{
    constructor(color,weight,gender){
        this.color = color;
        this.weight = weight;
        this.gender = gender;
    }
    hi(){
        console.log('색상은'+this.color+'무게는'+this.weight+'성별은'+this.gender)
    }

} 

const dog1 = new Dog('red',20,'male');
console.log(dog1)


class Cat extends Dog {
    constructor(color,weight,gender,name){
        super(color,weight,gender);  // User class를 상속한다. 안받아주면 위에 있는 부분이 상속되지 않는다. 
        this.name = name;
    }

}

const cat1 = new Cat('red',20,'male','hoho');
console.log(cat1)