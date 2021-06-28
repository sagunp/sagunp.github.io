body.controller('welcome', function($scope, $timeout){
    $scope.header = "Hello There!";
    $timeout(function(){
        $scope.footer = "Welcome!";
    }, 2000);
});