const LENGTH = 10;

let list1 = Array.from(Array(LENGTH));
let list2 = [...Array(LENGTH)];
let list3 = Array(LENGTH).fill();

let dic = Array.from(new Array(LENGTH), (v, i) => [...new Array(LENGTH)]);