appCrypto.controller('about',function($scope,configuracionGlobal,$routeParams,$rootScope,$location){

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
	console.log($routeParams.lang);
	$scope.config = configuracionGlobal;
	if ($routeParams.lang === 'es') {
		$scope.lang = configuracionGlobal.lang.es.about;
		$rootScope.menu = configuracionGlobal.lang.es.menu;
		$rootScope.routeLanguaje = 'es';
	}else if ($routeParams.lang === 'en') {		
		$scope.lang = configuracionGlobal.lang.en.about;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = 'en';
	}else if ($routeParams.lang === 'it') {		
		$scope.lang = configuracionGlobal.lang.it.about;
		$rootScope.menu = configuracionGlobal.lang.it.menu;
		$rootScope.routeLanguaje = 'it';
	}else if ($routeParams.lang === undefined ) {		
		$scope.lang = configuracionGlobal.lang.en.about;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = 'en';
	}else{
		$scope.lang = configuracionGlobal.lang.en.about;
		$rootScope.menu = configuracionGlobal.lang.en.menu;
		$rootScope.routeLanguaje = $routeParams.lang;
	}

});