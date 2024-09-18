// use in shopping card  bill  make adding items

const myNum=[1,2,3]

const myTotal=myNum.reduce(function(acc,curl){
    console.log(`acc: ${acc} and curl: ${curl}`);
    return acc + curl
},0)
console.log(myTotal);

// Arrow function 

const myTotal1=myNum.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal1)

//example 

const shopingCart=[

    {
        itemName:"ja course",
        price:2999
    },
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"Mobile dev",
        price:5999
    },
    {
        itemName:"Data Science",
        price:29999
    }
]

const priceToPay=shopingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay);