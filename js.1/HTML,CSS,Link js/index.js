// HTML ko acess karne ke leya

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);

// --------------------------------------------------------

// child acess karne ke leya

// console.log(document.body.firstElementChild);

// --------------------------------------------------------

// Id ko acess karne ke leya

// console.log(thisone);
// console.log(document.getElementById("thisone"));

// --------------------------------------------------------

// Class ko acess karne ke leya

// console.log(document.getElementsByClassName("ok"));

// ye array me hai eska dusra tearika
// const thisone=document.getElementsByClassName("ok");
// console.log(thisone);

// --------------------------------------------------------
// input and tag acess karne ke keya

// input
// const thisone=document.getElementsByName("email");
// console.log(thisone[0]);

// tags koi bhi tag ho
// const thisone=document.getElementsByTagName("span");
// thisone[0].style.backgroundColor="red";
// thisone[0].style.font="100 1.5rem 'Roboto'";
// thisone[0].textContent=" to the ";
// thisone[0].innerText=" to the princepal ";
// thisone[0].innerHTML=`<span class="myclass">NICE</span>`;
// console.log(thisone[0]);

// const btn=document.getElementById("mybtn");
// btn.style.backgroundColor="red";

// const btn=document.getElementsByTagName("button");
// btn[0].style.backgroundColor="blue";
// console.log(btn);

//MOST acess toole
// const btn=document.querySelector(".ok");
// btn.innerText="none";

// --------------------------------------------------------

// Attribute acess karne ke leya

// const mybtn=document.getElementById("mybtn");
// console.log(mybtn.getAttribute("id"));
// console.log(mybtn.getAttribute("class"));

// setattribute tag ki class /id asses karta hai
// console.log(myclick.setAttribute("class","code"));
// myclick.setAttribute("class","code");

// --------------------------------------------------------

// Element ko add karna uesd by JS

// const nam=document.createElement("h2");
// nam.innerText="NAME";
// document.body.append(nam);
// document.body.prepend(nam);

// --------------------------------------------------------


// Element me Node add karna uesd by JS

// const nam=document.createElement("h2");
// const myText=document.createTextNode("Sample Text")
// nam.prepend(myText);
// document.body.prepend(nam);

// --------------------------------------------------------

// Elemeny to Function me add kar deya (esko button me bhi add kar deya hai)

// function bringmeHeading() {
//     const nam=document.createElement("h2");
//     const myText=document.createTextNode("Sample Text")
//     nam.prepend(myText);
// document.body.prepend(nam);
// }

// dusra tarika

// const nam=document.getElementById("cbtn");
// nam.onclick=  bringmeHeading;

// function bringmeHeading() {
//     const nam=document.createElement("h2");
//     const myText=document.createTextNode("Sample Text")
//     nam.prepend(myText);
// document.body.prepend(nam);
// }

// Delete karne ke keya
// const bd=document.querySelectorAll("button");
// bd[2].onclick= deletebtn;
// bd[2].innerText="saddda"

// function deletebtn() {
//     const nam2=document.querySelector("h2");
//     nam2.remove();
//     console.log("click");
// }
// --------------------------------------------------------
