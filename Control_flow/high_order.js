//High order Arrray  loop
// for of
const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}
const greeting="Hello World"
for( const greet of greeting){
    console.log(`Each char is ${greet}`)
}

// MAp

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);
// De-strucre of map in object of array
for(const [key,value] of map){
    console.log(key,':-',value);
}

// for in  loop 
const programming=["js","rb","py","java","cpp"]

for(const key in programming){
   // console.log(programming[key]);
}

// for each loop

const coding=["js","rb","py","java","cpp"]

coding.forEach(function(item){
     console.log(item)
})
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})