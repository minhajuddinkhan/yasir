angular.module("app").controller("myControler",function ($scope,myFactory )
{
    $scope.showDivider =function (number) {

        if((number % 5 === 0 && number % 3 === 0 ))
        {
            $scope.result="foo-bar";
        }
        else if(number % 5 === 0 )
        {
            $scope.result="bar";
        }
        else if (number % 3 === 0)
        {
            $scope.result="foo";
        }
        else
        {
            $scope.result=number;
        }



    }

    $scope.addNumbers = function (a,b) {

       $scope.addResult =  myFactory.add(a,b);



    }

    $scope.SubtractNumbers = function (a,b) {

        $scope.subResult =  myFactory.sub(a,b);



    }


})