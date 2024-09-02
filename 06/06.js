document.addEventListener("DOMContentLoaded", ()=>{
    const bt1 = document.querySelector("button");
    const bt2 = document.querySelector("button");
    const bt3 = document.querySelector("button");
    const bt4 = document.querySelector("button");
    const bt5 = document.querySelector("button");
    const bt6 = document.querySelector("button");
  
    const img = document.querySelector("#msg1 > img");
    const img = document.querySelector("#msg2 > img");

    bt.addEventListener("click", ()=>{
        let n = Math.floor(Math.random() * 6) + 1;

        img.setAttribute("src", `../img/${n}.png`);
        img.setAttribute("alt", `${n}.png`);
    });
});