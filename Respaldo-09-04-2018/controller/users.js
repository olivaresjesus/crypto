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

	$http.get( configuracionGlobal.api_url + "/api/auth.php")
		.then(function(respuesta){
			//console.log(respuesta);
			$scope.user = respuesta.data;
		});

		
  var d = new Date();
  var y = d.getFullYear();
  var m = d.getMonth()+1;
  var d = d.getDate();
  if(m.toString().length === 1){
  	m = "0" + m;
  }  
  if(d.toString().length === 1){
  	d = "0" + d;
  }


	$scope.monto = function(idUser,cripto,fecha = y+"-"+ m + "-" + d,inversion,banco){

		if (cripto !== undefined && fecha !== undefined ) {
			if (banco == undefined) {
				banco = 0;
			}else if (isNaN(banco)) {
				$("#mdNoValidation").modal("show");
				return false;
			}

			if (inversion == undefined) {
				inversion = 0;
			}else if (isNaN(inversion)) {
				$("#mdNoValidation").modal("show");
				return false;
			}

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
			});

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