let btn=document.querySelector(".submit");
let imageC=document.querySelector(".image-container");
let img=document.querySelector("#img");
let text=document.getElementById("input");


text.addEventListener("keyup",()=>{
    if(!text.value)
        imageC.classList.add("hidden");
})

btn.addEventListener("click",()=>{
    if(!text.value){
        alert("Please enter some text to generate QR!")
        return;
    }
    btn.innerText="Generating QR Code..."
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
    img.addEventListener("load",()=>{
        btn.innerText="Generate QR Code"
        imageC.classList.remove("hidden");
    })
})