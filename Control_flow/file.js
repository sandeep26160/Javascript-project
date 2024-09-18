 // for each value  example in 

const coding=["js","rb","py","java","cpp"]

const values=coding.forEach((item)=>{
    //console.log(item);
    return item
})
console.log(values);


// filter  in js 
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>num  < 4)
//const newNums=myNums.filter((num)=>{
 //     return num>4 }) if we does not ue return then  it eill return empty  [] in scop of object 
console.log(newNums);