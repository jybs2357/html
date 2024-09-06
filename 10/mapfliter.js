// let arr = [1, 2, 3, 4, 5];

// console.log("arr : ", arr);
// console.log("arr의 개수 : ", arr.length);

// //배열 요소 접근
// console.log("맨 처음 접근요소 : ", arr[0]);
// console.log("두번째 요소에 접근 : ", arr[1]);

// //배열의 순회 : 배열의 전체 요소에 접근
// for (let i = 0 ; i < arr.length ; i++) {
//     console.log(`${i+1}번째 : ${arr[i]}`);
// }

// for (let item in arr) {
//     console.log(`${item} : ${item % 2 == 0? "짝" : "홀"}`);
// }

// for (let item of arr) {
//     console.log(`${item} : ${item % 2 == 0? "짝" : "홀"}`);
// }
// //구조 분해란?


// arr.push(6);
// console.log("arr push : ", arr);
// arr.pop();
// console.log("arr pop : ", arr);

// arr.unshift(6);
// console.log("arr unshift : ", arr);
// arr.shift();
// console.log("arr shift : ", arr);

// let arr2 = arr.splice(2, 1);
// console.log("arr splice :", arr);
// console.log("arr splice :", arr2);

// arr.splice(2, 1, a);
// console.log("arr splice : ", arr);
// arr.splice(2, 0, 3);
// console.log("arr splice : ", arr);


//callback 함수의 매개변수가 1개이면 () 생략가능
//callback 함수의 body에 return만 있으면 {}와 return 생략가능
arr = [1, 2, 3, 4, 5, 6];

// arr2 = arr.map(item => item * 2);
// console.log("arr map 결과 arr2 : ", arr2);\

arr2 = arr.map((item) => {item % 2 == 0 ? "짝" : "홀"});
console.log("arr map 결과 arr2 : ", arr2);

arr2 = arr.filter(item => item % 2 == 0);
console.log("arr map 결과 arr2 : ", arr2);

arr = [4, 5, 2, 1, 3];
console.log(`${arr} => ${arr.sort()}`)