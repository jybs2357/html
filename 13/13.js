let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
let isSuffle = false;
let cnt = 0;

document.addEventListener("DOMContentLoaded", () => {
    const cols = document.querySelectorAll(".col");
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    bt.addEventListener("click", (e) => {
        e.preventDefalut();
        if (!isShuffle) {
            isShuffle = true;
        
        //배열 섞기
        arr.sort(() => Math.random() - 0.5);
        console.log(arr)
        bt.innerHTML = "게임중 ..."
        }
    });
});