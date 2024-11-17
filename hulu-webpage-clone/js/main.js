"using strict";

const modal=document.querySelector(".modal");

const loginBtn=document.querySelector(".login-btn");

const closeBtn=document.querySelector(".close");

loginBtn.addEventListener("click",()=>{
  modal.style.display="block";
});

closeBtn.addEventListener("click",()=>{
  modal.style.display="none";
});