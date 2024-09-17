var z=300
if(true){
    let a=10
    const b=20
     var z=30
}
//console.log(a)
console.log(z)

//nested loop
function one(){
    const username1="sandeep"
    function two(){
        const website="youtube"
        console.log(username1);
    }

   // console.log(website);   show error 
    two()
}
//one()

if(true){
    const username1="sandeeep kumar yadav"
    if(username1==="sandeep"){
        const website="youtube"
        console.log(username1+website);
    }
   // console.log(website);
}
//console.log(username1);

//++++++++++++++++Interesting+++++++++++++++++++++++

function addOne(num){
    return num+1

}
addOne(5)

const addTwo=function(num){
    return num+2
}
addTwo(9)

