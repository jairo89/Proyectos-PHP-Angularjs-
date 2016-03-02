
<?php
include "conexion.php";



//$result=mysql_query("call registrar('$request->usuario', '$request->pass', 'C/ Buenaventura 54')",$conexion);

//$sql ="call registrar('$usuario', '$contrasena', 'C/ Buenaventura 54')"; 
  /*****************************/

// TOMAMOS NUESTRO JSON RECIBIDO DESDE LA PETICION DE ANGULAR JS Y LO LEEMOS
$JSON       = file_get_contents("php://input");
$request    = json_decode($JSON);
$NomEmp   = $request->NomEmp; 
$RutEmp =    $request->RutEmp;
$NumEmp =     $request->NumEmp;

//NomEmp : $scope.lo.txtNomEmp , RutEmp : $scope.lo.txtRutEmp,DirEmp:lo.txtDirEmp,NumEmp:lo.txtNumEmp
consultarLogin($NomEmp, $RutEmp,  $NumEmp);
echo "".$NomEmp ;
function consultarLogin($NomEmp, $RutEmp,  $NumEmp){
    $sql ="INSERT empresa VALUES ('','$NomEmp', '$RutEmp', '$NumEmp') "; 
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $usuario = $stmt->fetchObject();
        $db = null;
        echo  json_encode($NomEmp);
    //console.log($usuario);
    } catch(PDOException $e) {
       // echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}
  

//echo "".$result;
//include "cerrar_conexion.php";
?>

