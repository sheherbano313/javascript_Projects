const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

const copyText = (e) =>{
    e.preventDefault();
    navigator.clipboard.writeText(coupon.value)
    .then(() => {
        btn.textContent = "Copied!!"
        // alert('Text copied to clipboard successfully!');
        setTimeout(() => {
            btn.textContent = "copy";   
         }, 3000);
    })    
};

btn.addEventListener("click", copyText)