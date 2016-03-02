'use strict';
angularRoutingApp.controller('AtenController', function($scope,$http,$log,$cookies,$window,$cookieStore,$location) {
	 $scope.message='entro aka';
   $scope.rsJSON = [ ];
      // Ocultamos los divs de Alertas
      $scope.alertaLoginCorrecto = true;
      $scope.alertaLoginError    = true;


   $scope.entrar= function(){
    
   consultarOperador($http,$scope);
    }
   

  function limpiarForm($scope){
    $scope.alertaLoginError    = true;   
    $scope.alertaLoginCorrecto = true;   
    $scope.lo.txtOpe ="";
 $scope.lo.txtEmp="";
$scope.lo.txtdate="";
$scope.lo.txtMotivo="";
$scope.lo.txtEstado="";
$scope.lo.txtNum ="";

  }

 

 
  function consultarOperador($http,$scope){
   

    $http.post('data/insertAten.php',{ Operador : $scope.lo.txtOpe , Empresa : $scope.lo.txtEmp,Fecha:$scope.lo.txtdate,Motivo:$scope.lo.txtMotivo,Proceso:$scope.lo.txtEstado,NumRes:$scope.lo.txtNum })
       
        .success(function(data) {
           // si no existe el Operador nos muestre un alerta de error
           console.log(data);
           

           if (typeof(data.Operador) == "undefined"){
             $scope.alertaLoginError = false;   
             $scope.alertaLoginCorrecto = true;   
             $scope.lo.txtOpe ="";
             $scope.lo.txtEmp="";
              $scope.lo.txtdate="";
              $scope.lo.txtMotivo="";
            $scope.lo.txtEstado="";
            $scope.lo.txtNum ="";
           }else{
             // si existe ya la hicimos y que nos ponga un mensaje de bienvenida
             $scope.rsJSON = data.Operador;
             $scope.alertaLoginCorrecto = false;            
             $scope.alertaLoginError = true;   
           }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }   
});