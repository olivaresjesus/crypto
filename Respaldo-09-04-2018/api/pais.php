<?php

require "usuarioModel.php";
$objUsuario = new usuarioModel();
$resultQuery = $objUsuario->paises();
	/// crea un arreglo general vacio
	$resultadoOrdenado = array();

// el arreglo se popula en este bucle
while($row = mysqli_fetch_array($resultQuery)){

  // crea un objeto donde se incluyen los datos del registro
   	$objetoPais = array();
   	$objetoPais["id"]          = $row['id'];
   	$objetoPais["pais"]      = $row['pais'];

   	/// inserta el objeto con los datos de registro, dentro del arreglo general
   	array_push($resultadoOrdenado, $objetoPais);
}
echo json_encode( $resultadoOrdenado, JSON_UNESCAPED_UNICODE );