//전역변수
const testAPI = "82ca741a2844c5c180a208137bb92bd7";

//상세정보 가져오기
const getDetail = (movieCd) => {
    const mvinfo = document.querySelector("#mvinfo");
    let url = document.querySelector("#mvinfo");
    url = `${url}&key=${testAPI}&movieCd=${movieCd}`;
    
    console.log(url);
    fetch(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

    mvinfo.innerHTML = movieCd;
}

//OPEN API 데이터 가져오기
const getData = (selDt, ul, gubun) => {
    console.log('gubun = ', gubun);
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;

    url = `${url}key=${testAPI}&targetDt=${selDt}`;

    if(gubun != "T") {
        url = `${url}&repNationCd=${gubun}`;
    }

    console.log(url);

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
            console.log(dailyBoxOfficeList);

            let tm = dailyBoxOfficeList.map(item => 
                `<a href="#" onClick="getDetail(${item.movieCd})">
                <li class='mvli'>
                  
                  <span class='rank'>${item.rank}</span>
                  <span class='movieNm'>${item.movieNm}</span>
                  <span class='openDt'>${item.openDt}</span>
                  <span class='audiInten'>
                  ${item.audiInten > 0 ? 
                      '<span class="spRed">▲</span>' : item.audiInten < 0 ?  
                                          '<span class="spBlue">▼</span>' : '-'}
                  ${item.audiInten != 0 ? Math.abs(item.audiInten) : ''}
                  </span>
                </li>
              </a>`)

            tm = tm.join("")
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
    const gubun = document.querySelector("input[name=myGubun]:checked");  
    console.log('gubun = ', gubun.value);
    return gubun.value;
}



//DOM 생성 후
document.addEventListener("DOMContentLoaded", () => {
    //요소 가져오기
    const dt = document.querySelector("#dt");
    const ul = document.querySelector(".sec > ul");
    const radios = document.querySelectorAll("input[name=myGubun]");
    
    //어제 날짜 구하기
    let yesterday = getYesterday();
    console.log("yesterday : ", yesterday);

    //date 요소 최대값 결정
    dt.max = yesterday;
    
    //dt의 디폴트 값
    dt.value = yesterday;

    //gubun 값
    console.log(getGubun());

    //기본 첫 페이지 보이기
    getData(dt.value.replaceAll('-', ''), ul, getGubun());

    //데이터 가져오기
    dt.addEventListener("change", () => {
        getData(dt.value.replaceAll('-', ''), ul, getGubun());
    });

    for (let radio of radios) {
        radio.addEventListener("click", () => {
            if (radio.checked) {
                getData(dt.value.replaceAll("-",""), ul, radio.value);
            }

        });
    }

});