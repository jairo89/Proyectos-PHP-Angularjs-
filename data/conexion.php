<?PHP

function getConnection() {
	

	$dbname="prueba";
	$dbh = new PDO('mysql:host=localhost;dbname=dprueba', 'root', '');	
	$dbh -> exec("set names utf8");
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}


?>
