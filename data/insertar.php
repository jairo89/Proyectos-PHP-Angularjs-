<?php
include "conexion.php";



//$result=mysql_query("call registrar('$request->usuario', '$request->pass', 'C/ Buenaventura 54')",$conexion);

//$sql ="call registrar('$usuario', '$contrasena', 'C/ Buenaventura 54')"; 
  /*****************************/

// TOMAMOS NUESTRO JSON RECIBIDO DESDE LA PETICION DE ANGULAR JS Y LO LEEMOS
$JSON       = file_get_contents("php://input");
$request    = json_decode($JSON);
$usuario   = $request->Usuario; 
$Nombre =    $request->Nombre;
$Rut =       $request->Rut;
$Nivel =     $request->Nivel;
$pass =      $request->pass;

consultarLogin($usuario,$Nombre,$Rut,$Nivel,$pass);

function consultarLogin($usuario,$Nombre,$Rut,$Nivel,$pass){
    
//."".$Rut."".$Nivel.""$pass;
    $sql ="INSERT usuarios VALUES ('','$usuario', '$Nombre', '$Rut', '$Nivel','$pass') "; 
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $usuario = $stmt->fetchObject();
        $db = null;
        echo  json_encode($usuario);
    //console.log($usuario);
    } catch(PDOException $e) {
       echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}
  

//echo "".$result;
//include "cerrar_conexion.php";
?>

