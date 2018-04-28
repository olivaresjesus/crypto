<?php

//die(json_encode($_SERVER));

if ($_SERVER["HTTP_REFERER"] == "http://localhost/crypto/") {

	require "usuarioModel.php";

	header("Access-Control-Allow-Origin: *");

	header('Access-Control-Allow-Methods: GET, POST');

	header("Access-Control-Allow-Headers: X-Requested-With");

	header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');

	session_start();



	if(isset($_SESSION["nombre"]) && isset($_SESSION["id"])){

			//die('{"session": true,"id": "'.$_SESSION["id"].'","id_tipo_usuario": "'.$_SESSION["id_tipo_usuario"].'"}');

			die(json_encode($_SESSION));

	}	



	$request = json_decode(file_get_contents("php://input"));



	$objUsuario = new usuarioModel();

	//header("HTTP/1.1 401 Unauthorized");

	//die(json_encode($request));

	//die(json_encode($_POST));

	//die(json_encode($_GET));



	if (isset($request->correo) && isset($request->pass)) {



		$auth = $objUsuario->auth($request->correo, md5($request->pass));



		if ($auth->num_rows > 0) {	



			$result = $auth->fetch_assoc();



			$_SESSION["id"] = $result["id"];

			$_SESSION["nombre"] = $result["nombre"];

			$_SESSION["city"] = $result["city"];

			$_SESSION["id_tipo_usuario"] = $result["id_tipo_usuario"];

			$_SESSION["session"] = true;



			echo json_encode($_SESSION);

		}else{

			die('{"session": false, "first": true }');

		}

	}else{

			die('{"session": false, "first": false }');

		}

}else{
	die("NIGGA");
}