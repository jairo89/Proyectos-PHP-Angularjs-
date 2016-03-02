'use strict';
angularRoutingApp.controller('UserController', function($scope,$http,$log,$cookies,$window,$cookieStore,$location) {
	 $scope.message='entro aka';
   $scope.rsJSON = [ ];
      // Ocultamos los divs de Alertas
      $scope.alertaLoginCorrecto = true;
      $scope.alertaLoginError    = true;


   $scope.entrar= function(){
    
    consultarUsuario($http,$scope);
 
   }
   

  function limpiarForm($scope){
    $scope.alertaLoginError    = true;   
    $scope.alertaLoginCorrecto = true;   
    $scope.lo.txtUsuario    = '';
    $scope.lo.txtNombre = '';
     $scope.lo.txtRut = '';
      $scope.lo.txtPass = '';

  }
 
  function consultarUsuario($http,$scope){
   $http.post('data/insertar.php',{ Usuario : $scope.lo.txtUsuario , Nombre : $scope.lo.txtNombre,Rut:$scope.lo.txtRut, Nivel:$scope.lo.txtnivel , pass: $scope.lo.txtPass })
         
        .success(function(data) {
           // si no existe el usuario nos muestre un alerta de error
           console.log(data);
           

           if (typeof(data.usuario) == "undefined"){
             $scope.alertaLoginError = false;   
             $scope.alertaLoginCorrecto = true;   
            $scope.lo.txtUsuario    = '';
             $scope.lo.txtNombre = '';
            $scope.lo.txtRut = '';
            $scope.lo.txtPass = ''; 
           }else{
             // si existe ya la hicimos y que nos ponga un mensaje de bienvenida
             $scope.rsJSON = data.usuario;
             $scope.alertaLoginCorrecto = false;            
             $scope.alertaLoginError = true;   
           }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }   
});