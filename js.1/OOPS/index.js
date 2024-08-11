// OOP's concept
// There are six feature
// 1) object, 2)Class, 3)Encapsulation, 4)Abstraction, 5)Inheritance, 6)Polymorphism

// 1) object (object refrence datatype hai, object ko runtime me change kya jaa sakta hai)

// const b ={
//     name:"sunny",
//     printsurname:()=>{
//         console.log("dhanwant");
//     }
// };

// console.log(b);

// b.nam = "value is added";

// console.log(b);

// Primative data type (enha chnge nhi kya ja sakta hai, ye fixe hi rhate hai)

// number,string,boolean,null,undefined

// const a="hello world"

// console.log(a);


// there are two types of object
// 1)object Literal, 2)object constructor

// 1)object Literal

// const person= {
//     first_name: "sunny",
//     Last_name: "Dhanwant"
// }

// Factory function (ye template hai )

// function wwesuperstar(a,b,quote) {
//     return{
//         weight:a,
//         height:b,
//         quote()  {
//             console.log(quote)
//         },
//     };
// }
// const romanreign=wwesuperstar(265,185,"Head of the table");
// const sethrollins=wwesuperstar(154,145,"Burn it down");

// console.log(romanreign);
// console.log(sethrollins);


// 2)object constructor

// function Star(weight,height){
//     this.weight=weight;
//     this.height=height;
// }

//  const roman = new Star(125,5.6);

//  console.log(roman.constructor);

//  ------------

//  const a= new Object({a:21,b:34});

//  console.log(a);

//  ------------ye function ke leya

// const fun= new Function (["a","b"]," return a+b");
    
// console.log(fun);
// fun.nam="sunny";
// console.log(fun);

// console.log(fun.constructor);

// ------------- ye function or array ke leya hai

// function Enemy(size,speed){
//     this.size=size;
//     this.speed=speed;
// }

// const enemies=[];

// for (let i = 0; i < 100; ++i) {
//     enemies.push(new Enemy(4,50));
// }

// console.log(enemies);

// ------do array ko joint karne ke leya 

// const arr=[1,232,254];

// const newarr= new Array(...arr,154,12);
// ---dosra tarika
// const newarr= [...arr,154,12];


// console.log(newarr);


// ------do object  ko joint karne ke leya 

function Hero(size,speed){
        this.size=size;
        this.speed=speed;
    }

    const ironman=new Hero(10,20);

    const ironman2={...ironman};

    console.log(ironman);
    console.log(ironman2);

    ironman2.size=24;

    
    console.log(ironman);
    console.log(ironman2);

