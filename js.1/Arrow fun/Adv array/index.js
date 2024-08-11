// Arrow Function

// const myfun= (a,b) =>{
//     console.log(a+b);
    
// }
// myfun(2,3);

// ---------------------------------------------------

// Array Method with Arrow function

// const arr=[1,2,5,4,87,45,15,45];

// const myfun = (value, index) => {
//     if (value === 5) {
//  console.log("5 Exist");
        
//     }
// };
// arr.find(myfun);

// ---------------------------------------------------
//Dusra Tarika hai (find method ka use hua hai)
// ---------------------------------------------------


// const arr=[1,2,5,4,87,45,15,45];

// arr.find(  (value, index) => {
//     if (value === 5) {
//  console.log("5 Exist");
        
//     }
// });

// Tesra Tarika hai

// const arr=[1,2,5,4,87,45,15,45];

// arr.find((value,index)=>{
//  if (value>2) {
//     console.log(index,value);
//  }
// });

// Fourth tarika

// const arr=[1,2,5,4,87,45,15,45];

// const RAM = arr.find((value,index)=>{
//  if (value>2) {
//     return value;
//  }
// console.log(index);
// console.log(value);
// });
// console.log(RAM);

// ---------------------------------------------------
// filter method
// ---------------------------------------------------

// const arr=[1,2,5,4,87,45,15,45];

// const RAM=arr.filter((value,index)=>{
//    if (value>4) {
//       return value;
//       // return index;
//    }

// });
// console.log(RAM);

// ---------------------------------------------------

// ForEach loop (Total krne ke lya )

const arr=[1,2,5,4,87,45,15,45];
let totalsum=0;
arr.forEach((value,index)=>{
 totalsum+=value;
});
console.log(totalsum);