/**
 * Created by rodolfo on 21/03/2017.
 */

var idUrl = document.getElementById('idUrl').innerHTML;

var playListYouTube = angular.module("playList", []);
playListYouTube.controller("controllerPlayList", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'assets/youtube/consumervideoschannel.php?id=' + idUrl
    }).then(function successCallback(response) {
        $scope.itemslist = response.data.items;
        console.log(response.data);
    }, function errorCallback(response) {
        console.log(response.data);
    });
});

angular.bootstrap(document.getElementById('pl'), ['playList']);