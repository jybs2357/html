//OPEN API 데이터 가져오기
const getData = (selDt, ul, gubun) => {
    console.log(gubun);
    const testAPI = "82ca741a2844c5c180a208137bb92bd7";
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;

    url = `${url}key=${testAPI}&targetDt=${selDt}`;

    if(gubun != "A") {
        url = `${url}&repNationCd=${gubun}`;
    }

    console.log(url);

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
            console.log(dailyBoxOfficeList);

            let tm = dailyBoxOfficeList.map(item => 
                `<li class="mvli">
                    <span class="rank">${item.rank}</span>
                    <span class="movieNm">${item.movieNm}</span>
                    <span class="openDt">${item.openDt}</span>
                    <span class="audiInten">
                    ${item.audiInten > 0 ? 
                                    '<span class="spRed">▲</span>' : item.audiInten < 0 ?  
                                    '<span class="spBlue">▼</span>'  : '-'}
                    ${item.audiInten != 0 ? Math.abs(item.audiInten) : ""}
                    </span>
                <li>`)

            tm = tm.join(``)
            ul.innerHTML = tm;
        })
        .catch(err => console.error(err));
}

//어제 날짜 구하기 함수
const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    let day = yesterday.getDate();

    month = month < 10 ? "0" + month : month;
    day = day <10 ? "0" + day : day;

    return `${year}-${month}-${day}`;
}

// radio값 구분
const getGubun = () => {
    //radio 요소 가져오기
    const r1 = document.querySelector("#r1");
    const r2 = document.querySelector("#r2");
    const r3 = document.querySelector("#r3");

    if (r1.checked) {
        return r1.value;
    }
    else if (r2.checked) {
        return r2.value;
    }
    else {
        return r3.value;
    }
}



//DOM 생성 후
document.addEventListener("DOMContentLoaded", () => {
    //요소 가져오기
    const dt = document.querySelector("#dt");
    const ul = document.querySelector(".sec > ul");
    const radios = document.querySelectorALL("input[type="radio"]");
    
    //어제 날짜 구하기
    let yesterday = getYesterday();
    console.log("yesterday : ", yesterday);

    //date 요소 최대값 결정
    dt.max = yesterday;
    
    //dt의 디폴트 값
    dt.value = yesterday;

    //데이터 가져오기
    dt.addEventListener("change", () => {
        getData(dt.value.replaceAll('-',''), ul, sel1.value);

    });

    sel1.addEventListener("change", () => {
        getData(dt.value.replaceAll('-',''), ul, sel1.value);
    }) ;


    for (let radio of radios) {
        radio.addEventListener("click", () => {
            if (radio.checked) {
                getData(dt.value.replaceAll("-",""), ul, radio.value);
            }

        });
    }

});