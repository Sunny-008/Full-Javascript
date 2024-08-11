// alert("hii sunny dhanwant");
// ------------------------------

// let ans =prompt("text a number");
// console.log(ans);
// ------------------------------

// variable

// let x = 50;
// let y = 10;
// console.log(x+y);
// ------------------------------


// String

// let x = "Sunny Dhanwant";
// console.log(x);
// console.log(typeof x);
// ------------------------------


// Space ke leya

// let name = "sunny";
// let suname  = "dhanwant";
// console.log("Hey,my name is "+name+" "+suname+".");
// console.log(`hey, my name is ${name} ${suname}.`);
// ------------------------------



// x = 20;
// y = 10;
// console.log(x+y);
// ------------------------------


// boolean expreaction true=1,false=0

// x = 20;
// y = true;
// z = false
// console.log(x+y+z);
// ------------------------------


// statemant ko kise or me store karna

// let name = "sunny";
// let suname  = "dhanwant";
// console.log("Hey,my name is "+name+" "+suname+".");
// const myStatement =`hey, my name is ${name} ${suname}.`;
// console.log(`Here's my Statement: ${myStatement}`);
// ------------------------------

// let s ="my name is sunny"
// let heading = document. getElementById("myheading");
// console.log(heading);
// eska alava hm ye use kr sakte hai
// heading.innerText="sunny";
// heading.innerText=(s);
// heading.style.backgroundColor="grey";
// heading.style.color="white";
// ------------------------------

// IF-else condication

// let icecream=10;


// let icecream= Number(prompt("text a number"));

// if(icecream===10){
//     console.log("Ice-cream is blue Lagoon");
// }
// else if(icecream===30){
//     console.log("Ice-cream is cone");
// }
// else{
//     console.log("Ice-cream is Random");

// }

// ------------------------------
//  switch condication

// let icecream= Number(prompt("text a number"));

// switch (icecream) {
//     case 10:
//      console.log("Ice-cream is blue Lagoon");  
//         break;

//         case 30:
//      console.log("Ice-cream is cone"); 
//         break;

//     default:
//     console.log("Ice-cream is Ranodm");
//         break;
// }
// ------------------------------

// Loops
// 1.for loop

// for(let i=0;i<10;i=i+1){
//     console.log("A");
//     console.log(Math.random());

//     console.log("hii");
//     console.log("hello");
//     console.log("my");
//     console.log("dear");

// }

// for(let i=0;i<10;i=i++){
// console.log("hii")
// }

// for(let i=0;i<10;i=++i){
// console.log("hii")
// }

// 2.While loop

// let i=0;
// while (i<10) {
//     console.log("hello");

//     ++i;
// }

// do while loop

// let i=0;

// do {
//     console.log("hello");
//   ++i;
// } while (i<10);

// ------------------------------

// Arrays

// let arr=[10,12,23,45,44];
// console.log(arr);
// console.log(arr[0]);

// let arr=[10,12,23,45,44];
// let arr2=["sunny","dhanwant"];
// let arr3=[10,"sunny",23,45,[1,2,3]];
// console.log(arr2);

// let arr=[];
// arr[0]=12;
// arr[2]=11;
// arr[3]=15;
// arr[4]=19;
// console.log(arr);

// let arr = new Array(4);
// arr[1]=12;
// console.log(arr);

// ek arry banate hai jo 100 bar loop chale

// let arr=[1,2,3,6];
// for (let i = 1; i < 10; ++i) {
    // console.log (i);
    // console.log ("SUNNY");

    // arr[i]="sunny";
    
    // arr.push=(4,5);
    
// }
  // console.log(arr);

// ------------------------------

// Object

// const myobj={
//     name:"sunny",
//     surname:"Dhanwant",
//     income:20000000,
//     male:true
// }
// const myobj2={
//     0:"sunny",
//     1:"Dhanwant",
//     2:20000000,
//     3:true
// }
// console.log(myobj);
// console.log(myobj2);

// ------------------------------

// Funcion

// function printThevalue(a,b,c) {
//     let result =(a*10+b*10+c*10)/10;

//     console.log(result);
// }
// printThevalue(23,23,23);
// printThevalue(45,45,45);
// printThevalue(45,455,45);
// printThevalue(45,4,45);

// function printThevalue(a=0,b=0,c=0) {
//     let result =(a*10+b*10+c*10)/10;

//     console.log(result);
// }
// printThevalue(23,23);

// let myfun=function(a=0,b=0,c=0) {
//     let result =(a*10+b*10+c*10)/10;
//     console.log(result);
     
// }
// myfun(10,45,45);

// const myfun=function(a=0,b=0,c=0) {
//     let result =(a*10+b*10+c*10)/10;
//     return result;
//     return String(result);
     
// }
//  console.log(myfun(10,45,45));
// let ans=myfun(10,45,45);
//     console.log(ans);

// Ek function banate hai

// function intro(name="sample",channel="youtube") {
//     console.log(`Hi my name is ${name}.Please subscribe to my channel ASAP, what are you watting for?
//          My channel name is ${channel}.`);
//          console.log(`my income is ${myfun(10,10,10)}`);
// }
// intro("SUNNY DHANWANT","SAFAR");

// Function ke annder total array btane hai 
// const arr=[1,2,3,5,6];
// function totalofarray(arr=[]) {
//     let total=0;
//     for (let i = 0; i < arr.length; i++) {
//         total=total+arr[i];
        
//     }
//     return total;
// }
// console.log(totalofarray(arr));

// ------------------------------

// Scoping

// let a=20;
// {
//     var b=30;
//     console.log(b);
// }
// console.log(a);
// console.log(b);
