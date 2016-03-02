
<?php
include "conexion.php";



//$result=mysql_query("call registrar('$request->Operador', '$request->NumRes', 'C/ Buenaventura 54')",$conexion);

//$sql ="call registrar('$Operador', '$contrasena', 'C/ Buenaventura 54')"; 
  /*****************************/

// TOMAMOS NUESTRO JSON RECIBIDO DESDE LA PETICION DE ANGULAR JS Y LO LEEMOS
$JSON       = file_get_contents("php://input");
$request    = json_decode($JSON);
$Operador   = $request->Operador; 
$Empresa =    $request->Empresa;
$Fecha =       $request->Fecha;
$Motivo =     $request->Motivo;
$Proceso=      $request->Proceso;
$NumRes =      $request->NumRes;

consultarLogin($Operador,$Empresa,$Fecha,$Motivo,$Proceso,$NumRes);

function consultarLogin($Operador,$Empresa,$Fecha,$Motivo,$Proceso,$NumRes){

    $sql ="INSERT atencion VALUES ('', '$Operador', '$Empresa', '$Fecha', '$Motivo', '$Proceso','$NumRes') "; 
    try {
        $db = getConnection();
        $stmt = $db->query($sql);  
        $Operador = $stmt->fetchObject();
        $db = null;
        echo  json_encode($Operador);
    //console.log($Operador);
    } catch(PDOException $e) {
        //echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}
  

//echo "".$result;
//include "cerrar_conexion.php";
?>

