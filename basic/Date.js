let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(typeof myDate);

console.log(myDate.toLocaleDateString());


let myCreateDate=new  Date(2023,2,23,5,3)
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate.toDateString());


// Time stamp  

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(Date.now()/1000);


// forr the new date

const myDate1=new Date()
console.log(myDate1);

console.log(myDate1.getMonth()+1);
console.log(myDate1.getDay());

//`${newDate.getDay()} and the Time`


myDate1.toLocaleString('default',{
    weekday:"long"
})