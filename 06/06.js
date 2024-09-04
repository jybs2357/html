document.addEventListener("DOMContentLoaded", ()=>{
    //이미지 가져오기
    const imgs = document.querySelectorAll(".dice > img");

    const bts = document.querySelectorAll("button");

    const msg = document.querySelectorAll("#msg");

    for (let bt of bts) {
        bt.addEventListener("click",()=>{
            // 컴퓨터 랜덤수
            let comN = Math.floor(Math.random() * 6) + 1;
            
            imgs[0].setAttribute("src", `../img/${comN}.png`);

            console.log(bt.textContent.charAt(0));
            let userN = parseInt(bt.textContent.charAt(0));
            imgs[1].setAttribute("src", `../img/${userN}.png`);

            if (comN === userN) {
                msg.textContent = "AlphaGo resigns";
            }
            else {
                msg.textContent = "실패란? 다시 하라는거야.";
            }
        });
    }

});