appCrypto.controller('exit',function(configuracionGlobal,$http,$location){



	setTimeout(function(){
	$http.get( configuracionGlobal.api_url + "/api/exit.php")
		.then(
			function(respuesta){
				$location.path("/");
			}
		);
	},1500);

});