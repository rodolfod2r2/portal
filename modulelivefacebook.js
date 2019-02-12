/**
 * Created by rodolfo on 22/03/2017.
 */


var faceLive = angular.module("facebookLive", []);
faceLive.controller("controllerFacebookLive", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'assets/facebook/configconsumerlivefacebook.php'
    }).then(function successCallback(response) {
        $scope.itemsface = response.data.video_broadcasts.data;
        console.log(response.data.video_broadcasts);
    }, function errorCallback(response) {
        console.log(response.data);
    });
});


//angular.bootstrap(document.getElementById('facelive'),['facebookLive']);