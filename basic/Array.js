const Arry=[1,2,3,5]
console.log(Arry[3])

Arry.push(10)
console.log(Arry)

Arry.shift(25)
console.log(Arry.includes(9));
console.log(Arry);

const newArr=Arry.join()
console.log( typeof(newArr))

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// 2nd  class of Array 

const heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

heros.push(dc_heros)

console.log(heros);
heros.concat(dc_heros)// merge two  arrey  of list 
console.log(heros);


let score=100;
let score1=200;
let score3=300;

console.log(Array.of(score,score1,score3));
