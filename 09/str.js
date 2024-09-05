//문자열 연습

let s = "hello JS!!";

console.log("문자열 : ", s);
console.log("문자열 길이 : ", s.length);
console.log("문자열 문자변환 : ", s.toUpperCase(s));
console.log("첫번째글자 : ", s.charAt(0));
console.log("첫번째글자 : ", s[0]);
console.log("마지막글자 : ", s[s.length - 1]);
console.log("마지막글자 : ", s.charAt(s.length - 1));
console.log("마지막글자 : ", s.slice(-1));
console.log("**문자열 분리 : ", s.split(""));
for(let c of s) {

}

for(let i in s) {
    console.log(i, "=>", s[i]);
}
console.log("h문자열 확인: ", s.includes("JS"));
console.log("h문자열 확인: ", s.indexOf("JS"));

console.log("문자열 자르기: ", s.substring(5,0));
console.log("문자열 자르기: ", s.slice(5, 0));

// s = "1";
// console.log("숫자확인 : ", isNaN(s));