//어제 날짜 구하기 함수
const getYesterday = () => {
    const yesterday = new Date();

    const year = yesterday.getFullYear();
    let month = yesterday.getMonth();
    let day = yesterday.getDate();

    month = month < 10 ? "0" + month : month;
    day = day <10 ? "0" + day : day;

    return `${year}-${month}-${day}`;

}

//DOM 생성 후
document.addEventListener("DOMContentLoaded", ()=>{
    //요소 가져오기
    const dt = document.querySelector("#dt");

    //어제 날짜 구하기
    let yesterday = getYesterday();
    console.log("yesterday : ", yesterday);

    //date 요소 최대값 결정
    dt.max = yesterday;
    

});