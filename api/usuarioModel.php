<?php

require "conexion.php";


class usuarioModel{

	function registrar_usuario($nom, $city, $nac, $email, $tel, $fec_reg, $activo, $pass, $tel2, $type){

		$sqlValidacion = "SELECT * FROM user WHERE user.correo='$email'";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sqlValidacion);

		if ($result->num_rows === 0) {
			$sql = "INSERT INTO user(nombre,city,nacionalidad,correo,telefono,fecha_reg,activo,password,telefono2,id_tipo_usuario,id_tipo_cuenta) VALUES('$nom', '$city', $nac, '$email', '$tel', '$fec_reg', $activo, '$pass', '$tel2',2,$type);";
			//die($sql);
			$objConexion = new conexion();
			$result = $objConexion->agregar($sql);
			return $result;
		}else{
			die('{"existe": true}');
		}
	}

	function registrar_monto($crip, $usu, $inver, $ban, $date, $reg_date){
		$sql = "INSERT INTO monto_actual(id_criptomoneda,id_usuario,inversion,banco,fecha,fecha_reg,activo) VALUES($crip, $usu, $inver, $ban, '$date', '$reg_date', TRUE);";
		$objConexion = new conexion();
		$result = $objConexion->agregar($sql);
		return $result;
	}

	function typeAcount(){
		$sql = "SELECT * FROM tipo_cuenta;";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}

	function paises(){
		$sql = "SELECT * FROM pais;";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}

	function auth($mail,$pass){
		$sql = "SELECT * FROM user WHERE correo = '$mail' AND password = '$pass'; ";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
		
	}

	function users(){		
		$sql = "SELECT user.id,nombre,city,correo,pais,telefono,telefono2,fecha_reg,id_tipo_usuario,tipo_cuenta FROM user,pais,tipo_cuenta WHERE pais.id=user.nacionalidad AND tipo_cuenta.id = user.id_tipo_cuenta;";
		//die($sql);
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}

	function criptomonedas(){		
		$sql = "SELECT * FROM criptomonedas;";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}

	function registrar_(){		
		$sql = "SELECT * FROM criptomonedas;";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}

	function inactivarAnteriores($cripto,$usu){	
    	$sql = "UPDATE monto_actual SET activo=FALSE WHERE id_usuario  = $usu AND  id_criptomoneda   = $cripto ;";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}

	function saldosUser($user){		
		$sql = "SELECT user.id,criptomonedas.id AS id_criptomoneda,criptomoneda,inversion,banco,fecha FROM monto_actual,criptomonedas,user  WHERE user.id=$user AND user.id=monto_actual.id_usuario AND monto_actual.activo = TRUE AND criptomonedas.id = monto_actual.id_criptomoneda;";
		//die($sql);
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}

	function saldoActual($user){		
		$sql = "SELECT monto_actual.banco, monto_actual.inversion, criptomonedas.criptomoneda
				FROM monto_actual, criptomonedas
				WHERE id_usuario 		= $user AND
                		id_criptomoneda = criptomonedas.id AND
						activo 			= true;";
		//die($sql);
		$objConexion = new conexion();
		$result = $objConexion->consultar($sql);
		return $result;
	}


}

