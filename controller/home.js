appCrypto.controller('home',function($scope, configuracionGlobal,  $location,  $http, $location, $routeParams, $rootScope, $log, $mdDialog){

	console.log($routeParams.lang);

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
		$scope.lang = configuracionGlobal.lang.es.home;
		$rootScope.menu = configuracionGlobal.lang.es.menu;
		$rootScope.routeLanguaje = 'es';
	}else if ($routeParams.lang === 'en') {		
		$scope.lang = configuracionGlobal.lang.en.home;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = 'en';
	}else if ($routeParams.lang === 'it') {		
		$scope.lang = configuracionGlobal.lang.it.home;
		$rootScope.menu = configuracionGlobal.lang.it.menu;
		$rootScope.routeLanguaje = 'it';
	}else if ($routeParams.lang === undefined ) {		
		$scope.lang = configuracionGlobal.lang.en.home;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = 'en';
	}else{
		$scope.lang = configuracionGlobal.lang.en.home;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = $routeParams.lang;
	}

	$scope.user = {};
	$scope.paisSelected = "Select a Country";
	$scope.acountSelected = "Select a Acount's Type";

	$http.get( configuracionGlobal.api_url + "/api/pais.php")
		.then(function(respuesta){

			//console.log(respuesta);
			$scope.paises = respuesta.data;
		});

	$http.get( configuracionGlobal.api_url + "/api/typeAcount.php")
		.then(function(respuesta){

			//console.log(respuesta);
			$scope.typeAcount = respuesta.data;
		});

	$scope.esActivo = function(rutaRecibida){		
		//////////  Tomo la ruta actual, utilizo para eliminar los ultimos 3 caracteres de la ruta (ejemplo: /en), 
		//////////  a replace le envio como primer parametro el subtring, donde esta función agarra los ultimos 3 caracteres del string
		//////////  a subtring le envio el tamaño de la dirección actual completa y ese mismo tamaño menos 3 para que tome esos ultimos 3 valores
		//////////  luego sustituyo esos ultimos 3 valores por un string vacio.
		var rutaActual = $location.path().replace($location.path()
												.substring($location.path().length,
															$location.path().length-3),
												"");
		return rutaRecibida ===  rutaActual;//ruta en la que nos encontramos actualmente
	}

	$scope.registrar = function(){
		$("#mdestandar").modal("show");
	}



	$scope.pageLang = function(){

	}

	$scope.newUser = function(){
		//alert($scope.user.nacionalidad);
		$scope.user.accion = "registrar";
		$http({ //importante verificar que este instalado este sevicio
			url: configuracionGlobal.api_url + "/api/controller.php",
			method: "POST",
			data: $scope.user,
			headers: {'Content-Type': 'aplication/x-www-form-urlencoded'}//esto mejora la compatibilidad de la aplicacion
		}).then(
			function(respuesta){
				//console.log(respuesta.data);
				if (respuesta.data.existe == true) {
					$("#mdalert").text("El correo ya se encuentra registrado por favor intente con otro");
					$("#mdvalidation").modal("show");
				}else{					
					$("#mdalert").text("Usted ha sido Registrado con exito");
					$("#mdvalidation").modal("show");
				}
				$("#mdestandar").modal("hide");
				$scope.user = {};
			}
		)	
	}	

	$scope.selectNacionality = function(){
		$("#mdNacionality").modal("show");
	}

	$scope.addNacionality = function(){
		//alert(this.pais.id);
		$scope.user.nacionalidad = this.pais.id;
		$scope.paisSelected = this.pais.pais;
		$("#mdNacionality").modal("hide");
	}

	$scope.selectAcount = function(){
		$("#mdTypeAcount").modal("show");
	}

	$scope.addTypeAcount = function(){
		//alert(this.pais.id);
		$scope.user.typeAcount = this.type.id;
		$scope.acountSelected = this.type.tipo_cuenta;
		$("#mdTypeAcount").modal("hide");
	}

	$scope.hideAriaExpanded = function(){
		//alert("TT");
		$scope.hidden = "false";
		//$("#myNavbar").attr("aria-expanded","false");
	}

});