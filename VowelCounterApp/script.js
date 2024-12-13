const word = document.querySelector(".input-text")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",vowelCount)
 
function vowelCount(){
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();
    // alert(wordVal)
    for (let i =0; i<wordVal.length; i++){
        let letter = wordVal[i];
        if(letter.match(/([a,e,i,o,u])/)){
            vowelCount++;
        }
    }
    result.innerHTML =`${word.value.toUpperCase()} has  ${vowelCount} vowels`
}