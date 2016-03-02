'use strict';
angularRoutingApp.controller('mainController', function($scope,$http,$log,$cookies,$window,$cookieStore,$location) {
	
   $scope.rsJSON = [ ];
      // Ocultamos los divs de Alertas
      $scope.alertaLoginCorrecto = true;
      $scope.alertaLoginError    = true;


   $scope.entrar= function(){
    
    consultarUsuario($http,$scope);
//UsrSeccion();
 $window.alert($cookieStore.get('usuario')); 
   }
   
function UsrSeccion(){
$scope.usrconec.nombre="jairo";
$scope.usrconec.puesto="1";
$scope.usrconec.estaconec= true;
log.info($scope.usrconec);
$cookieStore.put('conec',true);
$cookieStore.put('usuario','jairo');

};


  


  $scope.MostrarCookie=function(){
    return($cookieStore.get('usuario'));  

  }

 function AgregarCookie(){
   // $cookieStore.put('NombreUsuario', data.Usuario,'Nivel', data.Nivel);
    $location.path('/contacto');
    $cookieStore.put('conec',true);
    $cookieStore.put('puesto','1');

  }


  $scope.MostrarCookie=function(){
    $window.alert($cookieStore.get('NombreUsuario'));  

  }

  $scope.EliminarCookie=function(){
    $cookieStore.remove('conec');
    $cookieStore.remove('usuario');
    $cookieStore.remove('puesto');
     $location.path('/');
  }
   
      // obtenemos el evento click del boton limpiar ng-click="limpiar()"
      $scope.limpiar = function() {
        limpiarForm($scope);
      };
 
  function limpiarForm($scope){
    $scope.alertaLoginError    = true;   
    $scope.alertaLoginCorrecto = true;   
    $scope.txtUsuario    = '';
    $scope.txtContrasena = '';   
  }
 
  function consultarUsuario($http,$scope){
    
    $http.post('data/insert.php',{ usuario : $scope.lo.txtUsuario , contrasena : $scope.lo.txtContrasena })
       
        .success(function(data) {
           // si no existe el usuario nos muestre un alerta de error
           console.log(data);
           

           if (typeof(data.Usuario) == "undefined"){
             $scope.alertaLoginError = false;   
             $scope.alertaLoginCorrecto = true;   
             $scope.txtUsuario    = '';
             $scope.txtContrasena = '';  

           }else{
             // si existe ya la hicimos y que nos ponga un mensaje de bienvenida
             $scope.rsJSON = data.Usuario;
             AgregarCookie(data); 
             console.log(data.nivel);
             $scope.alertaLoginCorrecto = false;            
             $scope.alertaLoginError = true;   
           }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    }   
});