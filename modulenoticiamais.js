/**
 * Created by rodolfo on 10/03/2017.
 */
var listaNoticiaMais = angular.module("NoticiaMais", []);
listaNoticiaMais.controller("controlerNoticiaMais", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.itemsUP = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('App2'), ['NoticiaMais']);