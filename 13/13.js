let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
let isSuffle = false;
let cnt = 0;

document.addEventListener("DOMContentLoaded", () => {
    const cols = document.querySelectorAll(".col");
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    bt.addEventListener("click", (e) => {
    });

    for (let col of cols) {
        col.addEventListener("click", () => {
            let idx = col.getAttribute("id").slice(-1) - 1;
            console.log(idx, arr[idx])

        });
    }
});