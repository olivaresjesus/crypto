appCrypto.controller('users',function($scope,configuracionGlobal,$http,$log){

	$scope.config = configuracionGlobal;

	$http.get( configuracionGlobal.api_url + "/api/users.php")
		.then(function(respuesta){
			//console.log(respuesta);
			$scope.users = respuesta.data;
		});

	$http.get( configuracionGlobal.api_url + "/api/cripto.php")
		.then(function(respuesta){
			//console.log(respuesta);
			$scope.criptomonedas = respuesta.data;
		});


	$scope.monto = function(idUser,cripto,fecha,inversion,banco){

		if (cripto !== undefined && fecha !== undefined && inversion !== undefined && banco !== undefined && !isNaN(inversion) && !isNaN(banco) ) {
			$http({ //importante verificar que este instalado este sevicio
				url: configuracionGlobal.api_url + "/api/controller.php",
				method: "POST",
				data: { "usuario": idUser,
						"cripto": cripto,
						"fecha": fecha,
						"inversion": inversion,
						"banco": banco,
						"accion": "nuevoMonto" },
				headers: {'Content-Type': 'aplication/x-www-form-urlencoded'}//esto mejora la compatibilidad de la aplicacion
			}).then(
				function(respuesta){
					$scope.validation = "Registro Satisfactorio";
					$("#mdvalidation").modal("show");
				}
			)
		}else{
			$("#mdNoValidation").modal("show");
		}
	} 

	var verificarNumero = function(cifra){
		var count;
		for (var i = 0; i < cifra.length; i++) {
			if (cifra.charAt(i) = ".") {
				count++
			}
		}

		if (count>1) {
			return false

		}else{
			return true;
		}
	}

});