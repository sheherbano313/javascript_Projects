const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",palindrome)

function palindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;
    let start = word.substring(0,Math.floor(len/2)).toLowerCase();
    let end = word.substring(len-Math.floor(len/2)).toLowerCase();
    // let flips = end.split("").reverse().join("");
    let flip = [...end].reverse().join("");  
    if (start == flip){
        result.innerHTML = `${word.toUpperCase()} is a plindrome `;
    }
    else{
        result.innerHTML = `${word.toUpperCase()} is  NOT a plindrome `;
    }
    // alert(flip);
}