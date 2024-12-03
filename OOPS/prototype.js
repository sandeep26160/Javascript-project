// let myName = "sandeep    "

// console.log(myName.trim().length);

// let myHeros=["thor","spiderman"]

// let heroPower={
//     thor:"hammer",
//     spiderman:"sling",
    
//     getSpiderPower:function(){
//         console.log(`Spider power is ${this.spiderman}`);
//     }
// }

// Object.prototype.sandeep=function(){
//     console.log(`sandeep is prresent in all object`);
// }
// heroPower.sandeep()


//INHERITANCE 
const user={

    name:"chai",
    email:"sandeepyadav23240@gmail.com"
}

const Teacher ={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport ={
    makeAssigment:'JS assigment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

//modern syntex 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="sandeep       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sandeep".trueLength()