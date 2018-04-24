<?php 

	class conexion{
		
		function conectar(){

			$server = "localhost";
			$username = "mysql";
			$password = "mysql";
			$db = "cryptocoin";

			// Create connection
			$conn = new mysqli($server, $username, $password, $db);	

			return $conn;
		}

		function consultar($sql){
			$conexion = self::conectar();
			if (mysqli_connect_errno()){
			    echo "error de conexion";
			   }else{
			   		//die($sql);
			        $resultado = $conexion->query($sql);
			        $conexion->close();
			  		return $resultado;
			    }  
		}
   
		function Agregar($sql){     
		  $resultado = "";
		  $conexion = self::conectar();
		  if (mysqli_connect_errno()){
		          $resultado = "error_conexion";
		   }else{
		         $resultado_set = $conexion->query($sql);
		            if (!$resultado_set) {
		                  $resultado = "no_inserto";
		            }else{
		                  $resultado = "inserto";
		            }		             
		        $conexion->close();
		    }            
		  return $resultado;
		}
		   
	    function Modificar($sql){
			$resultado = "";
			$conexion = self::conectar();
			if (mysqli_connect_errno()){
			      $resultado = "error_conexion";
			}else{
			     $resultado_set = $conexion->query($sql);
			      if (!$resultado_set) {
			              $resultado = "no_modifico";
			        }else{
			              $resultado = "modifico";
			        }     
			    $conexion->close();
			}
			return $resultado;
			}
		   
		   
		function Eliminar($sql){
			$resultado = "";
			$conexion = self::conectar();
			if (mysqli_connect_errno()){
			      $resultado = "error_conexion";
			}else{
			     $resultado_set = $conexion->query($sql);
			      if (!$resultado_set) {
			              $resultado = "no_elimino";
			        }else{
			              $resultado = "elimino";
			        }		             
			    $conexion->close();
			}            
			return $resultado;
			}
	}