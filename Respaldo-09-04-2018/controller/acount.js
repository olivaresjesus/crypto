appCrypto.controller('acount',function($scope,configuracionGlobal,$http,$log,$location,$routeParams,$rootScope){


	$rootScope.rutaEs = "#"+$location.path().replace($location.path()
												.substring($location.path().length,
															$location.path().length-3),
												"")+"/es";

	$rootScope.rutaEn = "#"+$location.path().replace($location.path()
												.substring($location.path().length,
															$location.path().length-3),
												"")+"/en";

	$rootScope.rutaIt = "#"+$location.path().replace($location.path()
												.substring($location.path().length,
															$location.path().length-3),
												"")+"/it";

	$scope.config = configuracionGlobal;
	if ($routeParams.lang === 'es') {
		$scope.lang = configuracionGlobal.lang.es.acount;
		$rootScope.menu = configuracionGlobal.lang.es.menu;
		$rootScope.routeLanguaje = 'es';
	}else if ($routeParams.lang === 'en') {		
		$scope.lang = configuracionGlobal.lang.en.acount;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = 'en';
	}else if ($routeParams.lang === 'it') {		
		$scope.lang = configuracionGlobal.lang.it.acount;
		$rootScope.menu = configuracionGlobal.lang.it.menu;
		$rootScope.routeLanguaje = 'it';
	}else if ($routeParams.lang === undefined ) {		
		$scope.lang = configuracionGlobal.lang.en.acount;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = 'en';
	}else{
		$scope.lang = configuracionGlobal.lang.en.acount;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = $routeParams.lang;
	}

	$scope.config = configuracionGlobal;
	//$scope.user = { "correo":"", "pass":""};

	$scope.login = function(){		
		$http({ //importante verificar que este instalado este sevicio
			url: configuracionGlobal.api_url + "/api/auth.php",
			method: "POST",
			data: $scope.user,
			headers: {'Content-Type': 'aplication/x-www-form-urlencoded'}//esto mejora la compatibilidad de la aplicacion
		}).then(
			function(respuesta){
				$scope.user = respuesta.data;
				//$log.info(respuesta);
				$http({ //importante verificar que este instalado este sevicio
						url: configuracionGlobal.api_url + "/api/controller.php",
						method: "POST",
						data: { "idUser": $scope.user.id,
								"accion": "saldos" },
						headers: {'Content-Type': 'aplication/x-www-form-urlencoded'}//esto mejora la compatibilidad de la aplicacion
					}).then(
						function(respuesta){
							$scope.montos = respuesta.data;
							//$("#mdvalidation").modal("show");
						});
			});
	}

	/*function login(){	
		$http({ //importante verificar que este instalado este sevicio
			url: configuracionGlobal.api_url + "/api/auth.php",
			method: "POST",
			data: $scope.user,
			headers: {'Content-Type': 'aplication/x-www-form-urlencoded'}//esto mejora la compatibilidad de la aplicacion
		}).then(
			function(respuesta){
				$scope.user = respuesta.data;
				$log.info($scope.user);

				if ($scope.user.session === false) {
					alert("Usted No esta Registrado");
				}
			});		
	}*/
	$scope.login();
/*
	$http.get(configuracionGlobal.api_url + '/api/auth.php'+$scope.user.correo&'pass='$scope.user.correo)
	.then(
			function(respuesta){
				$scope.auth = respuesta.data;
			});*/
});