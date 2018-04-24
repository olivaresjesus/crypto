<?php 

require "conexion.php";

class dataModel{

	function registrar_criptomoneda($crip){
		$sql = "INSERT INTO criptomonedas(criptomoneda) VALUES('$crip');";
		$objConexion = new conexion();
		$result = $objConexion->agregar($sql);
		//die($sql);
		return $result;
	}
}



