//JSON


//CALLBACKS


//HOISTING

//CLOSURES


//PROMISES.

// EVENT LOOP.

// TRUTHY VALUES

//================================================

//ES6

//classes
//lambda functions
//destructors.
// map reduce filter find


function request(data, cb){

    if(data) {
        cb(data);
    }else {
        console.log('no data');
    }
}
/*

function requestHandler(data) {

    console.log('in handler', data);
    data = {success: true};
    return data;
}
*/

request(0, function (data) {
    console.log('in handler', data);
    data = {success: true};
    return data;
});





function GET(url, cb) {

}



GET('/autheticate', function () {

});

GET('/person', function () {

});


GET('/airplanes', function () {

})






























