// let color = Math.random();
// color = Math.random().toString(25).substring();
// color = Math.random().toString(25).substring(2,8);
// console.log(color)


const hex= document.querySelector(".hex")
const btn= document.querySelector(".generate")

const GeneratorColor =() =>{
  const randomColor = Math.random().toString(16).substring(2,8);
  document.body.style.backgroundColor = "#" +randomColor;
  hex.innerHTML = "#" +randomColor;
};
btn.addEventListener("click",GeneratorColor)