document.addEventListener("DOMContentLoaded", ()=>{
    
    const txt1 = document.querySelector("#txt1");
    const secBt1 = document.querySelectorAll(".secBt1");
    const secBt2 = document.querySelectorAll(".secBt2");

    for(let bt of secBt1) {
        bt.addEventListener("click", (e)=>{
            e.preventDefault();

            let addItem = bt.innerHTML.replace("추가", "");
            txt1.value = txt1.value + addItem;
            console.log(bt.innerHTML);
        });
    }

    for(let bt of secBt2) {
        bt.addEventListener("click", (e)=>{
            e.preventDefault();

            let addItem = bt.innerHTML.replace("삭제", "");
            // let tmArr = txt1.value.split("");/
            let tmArr = Array.from(txt1.value) ;
            console.log(tmArr); 
            
            tmArr = tmArr.filter(item => item != addItem);
            tmArr = tmArr.join("");
            txt1.value = tmArr;
            console.log(tmArr); 
        });
    }
    for (let bt of secBt3) {
        bt.addEventListener("click", (e)=>{
            e.preventDefault();

            let items = bt.innerHTML.split("→");
            console.log("items = ", items);

            txt1.value = txt1.value.replace(item[0], item[1]);
            let tmArr = Array.from(txt1.value);
            tmArr = tmArr.map(item => item == item[0] ? item[1] : item);
            txt1.value = tmArr.join("");
        });
    }
});