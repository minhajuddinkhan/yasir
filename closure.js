
let a = 5,f='minhaj',h = 88;

function fn() {

    function fn2() {
        a = 5, h= 5;
        return a + h;
    }

    return fn2();
 }


console.log(fn()); //10
console.log(a); //5
console.log(h); // 5

