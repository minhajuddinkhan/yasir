// EVENT LOOP.




function m1(data, cb) {
    setTimeout(function () {
        if(data === 'm1'){
            cb();
        }

    },0) }


m1('m1', function(){
    console.log('cb');
});

console.log('outside');
