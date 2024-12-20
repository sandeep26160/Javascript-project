class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course wass added by${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")

chai.addCourse()
const masalachai = new User("malsachai")

masalachai.logMe()
console.log(chai === masalachai);