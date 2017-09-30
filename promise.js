

/*
hello(1, function () {

    hello2(2, function () {

        hello3(3, function () {

            hello4(4, function () {
                console.log('done')
            })
        })
    })

});

*/






function hello(data ) {

    return new Promise(function (resolve, reject) {
        resolve('123');
    })


}
function hello2(data ) {
    return new Promise(function (resolve, reject) {
        console.log(data);
        resolve(data);
    })
}
function hello3(data ,cb) {
    return new Promise(function (resolve, reject) {
        console.log(data);
        resolve(data);
    })
}
function hello4(data ,cb) {
    return new Promise(function (resolve, reject) {
        reject(data);
    })
}



hello('data')
    .then(function (data) {

        return hello2({t: 'v'})})



    .then(function (data) {


        data['t']= 'yasir';
        return hello3(data)}
    )
    .then(function (data) {
        return hello4()

    })
    .catch(function (err) {
        console.log(err);
    });
