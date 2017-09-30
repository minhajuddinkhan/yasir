

let {key} = require('./arrays');

function m1(data, cb) {

    if(data === 'm1'){
        cb(data);
    }
}
function m2(data, cb) {

    if(data === 'm2'){
        cb();
    }
}



m1('m2', function (data) {
    data = 'm2';
    m2(data, function (data) {
        console.log(data);
    })
});
