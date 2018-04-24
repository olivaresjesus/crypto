<?php

require "conexion.php";


class usuarioModel{

	function registrar_usuario($nom, $ape, $nac, $email, $tel, $fec_reg, $activo, $pass, $tel2){

		$sqlValidacion = "SELECT * FROM user WHERE user.correo='$email'";
		$objConexion = new conexion();
		$result = $objConexion->consultar($sqlValidacion);

		if ($result->num_rows === 0) {
			$sql = "INSERT INTO user(nombre,apellido,nacionalidad,correo,telefono,fecha_reg,activo,password,telefono2,id_tipo_usuario) VALUES('$nom', '$ape', $nac, '$email', '$tel', '$fec_reg', $activo, '$pass', '$tel2',2);";
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
		$sql = "SELECT user.id,nombre,apellido,correo,pais,telefono,fecha_reg,id_tipo_usuario FROM user,pais WHERE pais.id=user.nacionalidad;";
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


}

