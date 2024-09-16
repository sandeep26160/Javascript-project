const tinderUser=new Object()// singlalton object hai
const tinderUser1={}//non singlation object 
tinderUser1.id="123abc"
tinderUser1.name="Sammy"
tinderUser1.isLoggedIn=false

//console.log(tinderUser1);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sandeep",
            lastname:"yadav"
        }
    }
}
console.log(regularUser.email);


//merge two  object 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3);

// sperade  object  for the data base value  come from 
const obj3={...obj1,...obj2}
console.log(obj3);