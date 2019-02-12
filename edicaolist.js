/**
 * Created by rodolfo on 19/12/17.
 */

var listaEdicao = angular.module("edicaoPDF", []);
listaEdicao.controller("controllerEdicaoPDF", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'lista.json'
    }).then(function successCallback(response) {
        $scope.JDigital = response.data.JDigital;
        console.log(response.data);
    }, function errorCallback(response) {
        console.log(response.data);
    });
});