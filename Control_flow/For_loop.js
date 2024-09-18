//for Loop 
for (let i = 0; i <=10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best  number");
    }
    console.log(element);
}
//loop in side loop

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value:${i}`);
    for (let j = 0; j <=10; j++) {
       // console.log(`Innner loop value ${j} and inner loop ${i}`);
          console.log(i+'*'+j+'='+ i*j);
    }
    
}

let myArry=["flash","batman","superman"]
console.log(myArry.length);
for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    console.log(element);
    
}
// break and continue
for (let index1 = 1; index1 <=20; index1++) {
    if(index1==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is $(index1)`);
    
}