let obj = {
    apple: "🍎",
    carrot: "🥕",
    banana: "🍌"
};


//object 순회

for (let k in obj) {
    console.log(`${k} => ${obj[k]}`);
}

// for (let k in Object.keys(obj)) {
//     console.log(`${k} => ${obj[k]}`);
// }

// for (let k in Object.values(obj)) {
//     console.log(`${k} => ${obj[k]}`);
// }

// for (let [k, item] of Object.entries(obj)) {
//     console.log(`${k} => ${item}`);
// }

obj["수박"] = "🍉";
console.log(obj);

obj["수박"] = "🍈";

delete obj["수박"];

obj2 = {orange: "🍊"};
obj = {...obj2, ...obj};
console.log(obj);

