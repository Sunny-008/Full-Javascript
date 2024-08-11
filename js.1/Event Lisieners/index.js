const h1=document.getElementById("heading");
const div=document.getElementById("Box1");
const btn=document.getElementById("mybtn");

btn.addEventListener("click",()=>{
    h1.style.backgroundColor="gray";
    h1.style.textAlign="center";
    h1.style.color="white";
});

div.addEventListener("mouseover",()=>{
 btn.style.transform="scale(1.1)";
 h1.style.backgroundColor="pink";
});

div.addEventListener("mouseout",()=>{
    btn.style.transform="";
    h1.style.backgroundColor="";
   });

   addEventListener("contextmenu",(e)=>{
     e.preventDefault();
     btn.style.filter="blur(10px)";
   });