'use strict';
angularRoutingApp.controller('EmpController', function($scope,$http,$log,$cookies,$window,$cookieStore,$location) {
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
    $scope.lo.txtNomEmp    = '';
    $scope.lo.txtRutEmp = '';
    $scope.lo.txtNumEmp = '';

  }
 
  function consultarUsuario($http,$scope){
    console.log('ujghg');
 $http.post('data/insertEmp.php',{ NomEmp : $scope.lo.txtNomEmp , RutEmp : $scope.lo.txtRutEmp,DirEmp:$scope.lo.txtDirEmp,NumEmp:$scope.lo.txtNumEmp })
   
   
        .success(function(data) {
           // si no existe el usuario nos muestre un alerta de error
           console.log(data);
           

           if (typeof(data.usuario) == "undefined"){
             $scope.alertaLoginError = false;   
             $scope.alertaLoginCorrecto = true;   
            $scope.lo.txtNomEmp    = '';
             $scope.lo.txtRutEmp = '';
             $scope.lo.txtNumEmp = ''; 
           }else{
             // si existe ya la hicimos y que nos ponga un mensaje de bienvenida
             $scope.rsJSON = data.NomEmp;
             $scope.alertaLoginCorrecto = false;            
             $scope.alertaLoginError = true;   
           }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }   
});