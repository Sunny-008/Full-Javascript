
// Session Storage

// const input=document.getElementById("myinput");
// const btn=document.getElementById("mybtn");
// const Deletebtn=document.getElementById("Delete");


// const btnclick=()=>{
//     sessionStorage.setItem("key1",input.value);
// };

// btn.addEventListener("click",btnclick);

// Deletebtn.addEventListener("click",()=>{
//     sessionStorage.removeItem("key1");
// });

// if (sessionStorage.getItem("key1")) {
//     alert(sessionStorage.getItem("key1"));
// }

// ------------------------------------------------------

// Local Storage

const input=document.getElementById("myinput");
const btn=document.getElementById("mybtn");
const Deletebtn=document.getElementById("Delete");


const btnclick=()=>{
    localStorage.setItem("key1",input.value);
};

btn.addEventListener("click",btnclick);

Deletebtn.addEventListener("click",()=>{
    localStorage.removeItem("key1");
});

if (localStorage.getItem("key1")) {
    alert(localStorage.getItem("key1"));
}