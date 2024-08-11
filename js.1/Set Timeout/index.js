// const printname=(name, income,Gender)=>{

//     console.log(`welcome to ${name}, Your income is $${income}, Gender is ${Gender}`)
// };


// setTimeout(printname,2000,"sunny",3000,"male");

// Dusera tarika hai ye -----------------------------------

// setTimeout((name, income,Gender) => {
//     console.log(`welcome to ${name}, Your income is $${income}, Gender is ${Gender}`)
    
// }, 2000,"sunny",3000,"male");

// -------------------------------------------------

// clear timeout-----

// const btn= document.querySelector("button");

// const printname=(name, income,Gender)=>{

//     console.log(`welcome to ${name}, Your income is $${income}, Gender is ${Gender}`)
// };


// const custom =setTimeout(printname,2000,"sunny",3000,"male");

// btn.addEventListener("click",()=>{
//     clearTimeout(custom);
// });

// -------------------------------------------------

// setInterval ( esma jitna time dayge wo repeat hota rhai ga)

const btn= document.querySelector("button");

const printname=(name,Gender)=>{
    const income=Math.floor(Math.random()*10000);

    console.log(`welcome to ${name}, Your income is $${income}, Gender is ${Gender}`)
};


const custom =setInterval(printname,2000,"sunny","male");

btn.addEventListener("click",()=>{
    clearInterval(custom);
});
