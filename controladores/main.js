// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp',['ngRoute','ngCookies','ngResource']);
 
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController'
		})
		.when('/Empresa', {
			templateUrl : 'pages/Empresa.html',
			controller 	: 'EmpController'
		})
		.when('/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'UserController'
		})
		.when('/Atencion', {
			templateUrl : 'pages/Atencion.html',
			controller 	: 'AtenController'
		})
		
		.otherwise({
			redirectTo: '/'
		});
});

angularRoutingApp.run(function($rootScope,$location,$cookieStore) {
	$rootScope.$on('$routeChangeStart' ,function(event,next,current){
			if($cookieStore.get('conec')==false||$cookieStore.get('conec')==null){
					if(next.templateUrl== 'pages/Empresa.html'|| next.templateUrl== 'pages/contacto.html'|| next.templateUrl== 'pages/Atencion.html'){
						$location.path('/');
					}
			}
			else{
				var puesto =$cookieStore.get('puesto');
					if(next.templateUrl== 'pages/home.html'|| puesto!=1){
					$location.path('/Empresa');
					}
				}
			})
});




