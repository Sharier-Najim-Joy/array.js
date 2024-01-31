const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.slice(2,4));
for(let i = 0; i <5; i+=3){
    // console.log(i);
}

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    // Access each element using array[i]
    // console.log(array[i]);
}
const array1 = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i === 5) {
  continue;
 }
 console.log(array1[i]);
}