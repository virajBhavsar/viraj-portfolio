const ham = document.querySelector(".ham");
const hamSpans = document.querySelectorAll(".ham span");
const nav = document.querySelector(".nav");
const closeEnd = document.querySelectorAll(".nav h1");
const contactBtn = document.querySelector(".contact-btn");
const navLinks = document.querySelectorAll(".nav h1");

let open = false;

for (let i = 0; i <navLinks.length; i++) {
  navLinks[i].style.transition = `all 0.8s ease ${i / 6}s`;
}


function close() {
  nav.style.transform = "translateX(100%)";
  hamSpans[1].style.transform = "translate(0)";
  hamSpans[0].classList.remove("down");
  hamSpans[2].classList.remove("up");
  
  open = false;
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("appear");
  }
}
function openNav(){
  hamSpans[1].style.transform = "translateX(1000px)";
  nav.style.transform = "translateX(0)";
  hamSpans[0].classList.add("down");
  hamSpans[2].classList.add("up");
  open = true;
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.add("appear");
  }}

ham.addEventListener("click", (toggle) => {

  if(open){
    close();
  }else{
    openNav();
  }

 
});


closeEnd[0].addEventListener("click", () => {
  location.href = "#logo";
  close();
});

closeEnd[1].addEventListener("click", () => {
  location.href = "#middle";
  close();
});

closeEnd[2].addEventListener("click", () => {
  location.href = "#social";
  close();
});

contactBtn.addEventListener("click",()=>{
    location.href = "#middle";
    close();
})
closeEnd[3].addEventListener("click", () => {
  location.href = "#contact";
  close();
});


const bubbles1 = document.querySelectorAll(".b1 .bubble");
const bubbles2 = document.querySelectorAll(".b2 .bubble");

for (i = 0; i < bubbles1.length; i++) {
  bubbles1[i].style.top = `${Math.floor(Math.random() * 90) + 10}%`; //1 to 10
  bubbles1[i].style.left = `${Math.floor(Math.random() * 70) + 10}%`; //1 to 10
  bubbles1[i].style.animation =
    `bub 1s ease infinite alternate, gotop ${Math.floor(Math.random() * 15) + 8}s linear infinite`;
    
    bubbles2[i].style.top = bubbles1[i].style.top;
    bubbles2[i].style.left = bubbles1[i].style.left;
    bubbles2[i].style.animation = bubbles1[i].style.animation;

}


// just to get the outline of preloader
//const logo = document.querySelectorAll('#svgfile path');

//for(let i =0;i<logo.length; i++){
//    console.log(`Latter ${i} is ${logo[i].getTotalLength()}`);
//}
