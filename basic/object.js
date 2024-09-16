// singleton

// object Literals

const sandeep={
   name:"sandeep",
   age:18,
   location:"Ghazipur",
   email:"sandeep@gmail.com",
   lastLoginDays:["Monaday","saturday"]
}
//access of object
console.log(sandeep.name)
console.log(sandeep["age"]) // most of time use karta hai 
sandeep.email="Suraj@gmail.com"// change for email  or update 
console.log(sandeep.email)


sandeep.greeting=function()
{
    console.log("Hello sandeep");
}
console.log(sandeep.greeting);