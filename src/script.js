const myJob = document.querySelector(".demo");
const text = myJob.innerHTML;
myJob.innerHTML = "";

let count = 0;

function typeIT() {
  if (count < text.length + 100) {
    myJob.innerHTML = text.substring(0, count);
    count++;
  } else count = 0;
  setTimeout(typeIT, 75);
}
typeIT();

let todaysDates = new Date();
let x = todaysDates.toDateString();
let dateContainer = document.getElementById("date-container");
dateContainer.textContent = x;

let darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", () => {
  if (darkMode.classList.contains("black")) {
    darkMode.setAttribute("fill", "white");
    darkMode.classList.remove("black");
   
    document
      .querySelector("body")
      .classList.remove("bg-[#222]", "text-gray-200");
  } else {
    darkMode.setAttribute("fill", "black");
     
    darkMode.classList.add("black");
    document.querySelector("body").classList.add("bg-[#222]", "text-gray-200");
  }
});

const fonts = document.querySelector(".incFont");
const range = document.querySelector("#range-val");
const pTags = document.getElementsByTagName([..."p"]);
console.log(pTags)


range.addEventListener("input", () => {
  let x = fonts.style.fontSize = `${range.value}rem` 
  console.log(x);
  // for(let eachPTag of pTags) {
  //   eachPTag.style.fontSize = x
  // }
 
 });



const openNav = document.querySelector('.open-nav')
const openSetting = document.querySelector('.open-setting')
const closeSetting = document.querySelector('.close-setting')

closeSetting.addEventListener('click', ()=>{
  
  openSetting.classList.toggle('h-[338px]')
})
openNav.addEventListener('click', ()=>{
  
  openSetting.classList.toggle('h-[338px]')
})
