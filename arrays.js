
// DE STRUCTURING.

let object = {
    key: {value: 1},
    key2:{ value:2},
    key3: {value: {
        asd :'1'
    }}
};




let array = [1,2,3,4,5,6,7];

/*Yasir bhai*/
let sum = 0;
for(let i = 0 ; i < array.length; i++){
    sum += array[i];
}


let mySum = array.reduce((acc, sum) => acc + sum);
console.log(mySum);
