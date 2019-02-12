/**
 * Created by rodolfo on 10/03/2017.
 */

var playListYouTube = angular.module("playList", []);
playListYouTube.controller("controllerPlayList", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'assets/youtube/consumerindex.php'
    }).then(function successCallback(response) {
        $scope.itemslist = response.data.items;
    }, function errorCallback(response) {
        console.log(response.data.items);
    });
});

angular.forEach(document.querySelector('div'), function (node) {
    if (node.id == 'nfs') {
        //do something
        console.log(document.querySelector('#nfs').getAttribute('value'));
    }
    if (node.className == 'sscr-time-active') {
        //do something
        console.log(document.querySelector('.sscr-time-active').getAttribute('value'));
    }
});


playListYouTube.controller("controllerPlayListView", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'assets/youtube/consumerindexlist.php'
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLeoP1DngAra-vkTOBa7RGCBQOzuN-WPjC&maxResults=8&key=AIzaSyBs9EvA7gtwOO6KH3B0lt2xtpnCSFkcF1Y'
    }).then(function successCallback(response) {
        $scope.itemslistview = response.data.items;
        console.log(response.data.items);
    }, function errorCallback(response) {
        console.log(response.data.items);
    });
});

angular.bootstrap(document.getElementById('pl'), ['playList']);
angular.bootstrap(document.getElementById('p2'), ['playList']);


/*
var playListYouTubeView = angular.module("playListView", []);
playListYouTubeView.controller("controllerPlayListView", function($scope, $http) {
    $http({
        method: 'GET',
        url: 'assets/youtube/consumerindexlist.php'
    }).then(function successCallback(response) {
        $scope.itemslist = response.data.items;
        console.log(response.data);
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('p2'),['playListView']);
*/