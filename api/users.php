<?php 



require "usuarioModel.php";



$objUsuario = new usuarioModel();

$resultQuery = $objUsuario->users();

	/// crea un arreglo general vacio

	$resultadoOrdenado = array();



// el arreglo se popula en este bucle

while($row = mysqli_fetch_array($resultQuery)){



  // crea un objeto donde se incluyen los datos del registro

   	$objetoPais = array();

   	$objetoPais["id"]          = $row['id'];

   	$objetoPais["nombre"]      = $row['nombre'];

   	$objetoPais["city"]      = $row['city'];

   	$objetoPais["correo"]      = $row['correo'];

   	$objetoPais["pais"]      = $row['pais'];

      $objetoPais["telefono"]      = $row['telefono'];

      $objetoPais["telefono2"]      = $row['telefono2'];

      $objetoPais["fecha_reg"]      = $row['fecha_reg'];

      $objetoPais["id_tipo_usuario"]      = $row['id_tipo_usuario'];

      $objetoPais["tipo_cuenta"]      = $row['tipo_cuenta'];



   	/// inserta el objeto con los datos de registro, dentro del arreglo general

   	array_push($resultadoOrdenado, $objetoPais);

}

echo json_encode( $resultadoOrdenado, JSON_UNESCAPED_UNICODE );









