const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DB call,crpytogrphy,network
    setTimeout(function(){
        console.log('Async task is complete :');
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynce task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 task resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"sandeepyadav232340@gmail.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user);
})

const prommiseFoure= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"sandeep",password:"123000"})
        }else{
                reject('Error: somithing is  wrong ')
            
        }
    },1000)
})
prommiseFoure.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
   console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is resole or reject ")
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javascript",password:"12300"})
        }else{
            reject('Error js went wrong ')
        }
    },1000)
})


async function consumepromiseFive(){
    try{
    const response= await promiseFive
    console.log(response);
} catch (error){
    console.log(error);
}
}
consumepromiseFive()


async function getAllUsers(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //const data = response.json()
    const data =  await response.json()
    console.log(data);
} catch(error){
    console.log("E:",error);
}
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))