/**
 * Created by rodolfo on 10/03/2017.
 */

var listaCapaNoveNoticia = angular.module("CapaNoveNoticia", []);
listaCapaNoveNoticia.controller("controllerCapaNoveNoticia", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'webservicenoticias.php'
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.itemsNove = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('AppNove'), ['CapaNoveNoticia']);

var listaCapaSeteNoticia = angular.module("CapaSeteNoticia", []);
listaCapaSeteNoticia.controller("controllerCapaSeteNoticia", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'webservicenoticias.php'
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.itemsSete = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('AppSete'), ['CapaSeteNoticia']);

var listaCapaQuatroNoticia = angular.module("CapaQuatroNoticia", []);
listaCapaQuatroNoticia.controller("controllerCapaQuatroNoticia", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'webservicenoticias.php'
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.itemsQuatro = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('AppQuatro'), ['CapaQuatroNoticia']);


var listaCapaDoisNoticia = angular.module("CapaDoisNoticia", []);
listaCapaDoisNoticia.controller("controllerCapaDoisNoticia", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'webservicenoticias.php'
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.itemsDois = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('AppDois'), ['CapaDoisNoticia']);

var listaCapaUmNoticia = angular.module("CapaUmNoticia", []);
listaCapaUmNoticia.controller("controllerCapaUmNoticia", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'webservicenoticias.php'
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.itemsUm = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('AppUm'), ['CapaUmNoticia']);

var listaNoticia = angular.module("Noticia", []);
listaNoticia.controller("controllerNoticia", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'webservicenoticias.php'
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.items = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});


var listaNoticiaMais = angular.module("NoticiaMais", []);
listaNoticiaMais.controller("controllerNoticiaMais", function ($scope, $http) {
    $http({
        method: 'GET',
        //url: 'webservicenoticias.php'
        url: 'list.json'
    }).then(function successCallback(response) {
        $scope.itemsUp = response.data;
    }, function errorCallback(response) {
        console.log(response.data);
    });
});
angular.bootstrap(document.getElementById('App2'), ['NoticiaMais']);

