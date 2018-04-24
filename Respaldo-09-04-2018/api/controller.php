<?php 

require "usuarioModel.php";
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Access-Control-Allow-Headers: Content-Type, x-xsrf-token');

$request = json_decode(file_get_contents("php://input"));
//die(json_encode($request));

switch ($request->accion) {
	case 'registrar':

		$objUsuario = new usuarioModel();
		$resultInsert = $objUsuario->registrar_usuario($request->nombre, $request->apellido,$request->nacionalidad,$request->correo,$request->telefono, date("Y-m-d"), true, md5($request->pass), $request->telefono2);

		$age = array("sql"=>$resultInsert);

		echo json_encode($age);

		/*
		$destino = "projectathenaup@gmail.com";
		//$desde	 = "de: ". "";
		$asunto  = $_POST['subject'];

		$mensaje = $_POST['message']."<br><br>"."<b>from:</b> ".$_POST['name']."<br> <b>e-mail:</b> ".$_POST['email'];

		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		if(mail($destino,$asunto,$mensaje, $cabeceras)){
	            echo "Correo Enviado";
	            echo("<br>correo: ".$destino."<br>asunto: ".$asunto."<br>mensaje: ".$mensaje);
	            header("Location: https://athenaup.com/");
	        }else{
	            echo 'No enviado';
	        }
		}else{
			echo "Problemas Al Enviar";
		}*/
		break;

	case 'paises':


		break;
/*
	case "nuevoMonto":

		$objUsuario = new usuarioModel();
		$resultInsert = $objUsuario->registrar_monto($request->cripto, $request->usuario, $request->monto, date("Y-m-d"), $request->fecha);
		break;
		*/

	case "nuevoMonto":

		//die("{'llego':'llego'}");

		$objUsuario = new usuarioModel();

		$resultUpdate = $objUsuario->inactivarAnteriores($request->cripto, $request->usuario);

		$resultInsert = $objUsuario->registrar_monto($request->cripto, $request->usuario, $request->inversion, $request->banco, $request->fecha, date("Y-m-d"));

		break;

	case "saldos":

		$objUsuario = new usuarioModel();

		$resultaSaldos = $objUsuario->saldosUser($request->idUser);
		$resultadoOrdenado = array();
		while($row = mysqli_fetch_array($resultaSaldos)){
	 	// crea un objeto donde se incluyen los datos del registro
	   	$objetoPais = array();
	   	$objetoPais["id"]         		  = $row['id'];
	   	$objetoPais["id_criptomoneda"]    = $row['id_criptomoneda'];
	   	$objetoPais["criptomoneda"]       = $row['criptomoneda'];
	   	$objetoPais["inversion"]     		  = $row['inversion'];
	   	$objetoPais["banco"]     		  = $row['banco'];
	   	$objetoPais["fecha"]    		  = $row['fecha'];
	   	/// inserta el objeto con los datos de registro, dentro del arreglo general
	   	array_push($resultadoOrdenado, $objetoPais);
		}
		echo json_encode( $resultadoOrdenado, JSON_UNESCAPED_UNICODE );

		//$saldos = $resultaSaldos->fetch_assoc();
		//echo json_encode($saldos);

		break;

	default:
		echo "{'result': 'parametro enviado como accion invalido.'}";
		break;
}