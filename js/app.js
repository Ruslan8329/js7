let massive = [5, 6, 4, 7, 4, 55];
for (let i = 0; i < massive.length; i++) console.log(massive[i] * 2);

/////////////////////////////////////////////////////////////////////////////////////

let newMassive = [56, 4, 5, 6, 4, 5, 11];
let sum = newMassive.reduce(function (previousValue, item) {
  return item + previousValue;
}, 0);
console.log(`Сумма массива = ${sum}`);
/////////////////////////////////////////

let newMassive2 = [656, 754, 56, 44, 1];
let sum2 = 0;
for (let i = 0; i < newMassive2.length; i++) {
  sum2 += newMassive2[i];
}

console.log(sum2);

//////////////////////////////////////////////////////////////////////////////////////

let massive2 = [56, 76, 3, 5, 90, 4, 45];
let sum3 = 0;
for (i = 0; i < massive2.length; i++) sum3 += massive2[i];
let midle = sum3 / massive.length;
console.log(sum3);

////////////////////////////////////////////////////////////////////////////////////////

let massive3 = [56, 756, 3, 7, 536, 78];
let sum4 = massive3[0];

for (let i = 1; i < massive3.length; i++) {
  console.log(massive3[i]);
  if (massive3[i] < sum4) {
    sum4 = massive3[i];
  }
}
console.log(sum4);

////////////////////////////////////////////////////////////////////////////////////////////

let massive4 = [456, 7, 46, 567, 47, 5];
let sum5 = massive4[0];

for (let i = 1; i < massive4.length; i++) {
  console.log(massive4[i]);
  if (massive4[i] > sum5) {
    sum5 = massive4[i];
  }
}
console.log(sum5);

///////////////////////////////////////////6//////////////////////////////////////////////////////

let massive5 = [56, 78566, 76, 40, 8, 27];
let sum6 = [];

for (let i = 0; i < massive5.length; i++) {
  if (massive5[i] % 2 === 0) {
    sum6.push(massive5[i]);
  }
}
console.log(sum6);

///////////////////////////////////////////////////////////////////////////////////////////////////

let massive6 = [56, 7, 4, 7, 4, 67, 10, 7];
let sum7 = 7;
let result = 0;

for (let i = 0; i < massive6.length; i++) {
  if (massive6[i] === sum7) {
    result++;
  }
}
console.log(result);
