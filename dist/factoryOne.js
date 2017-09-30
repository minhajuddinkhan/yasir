angular.module("app").factory("myFactory",function ()
{
    let factory = {
        add: function (a, b) {
            return a+b;
        },
        sub: function (a, b) {
            return a- b;
        }
    }


    return factory;


});