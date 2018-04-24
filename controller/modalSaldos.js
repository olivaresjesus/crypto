appCrypto.controller('modalSaldoActual',function($scope,configuracionGlobal,$http,$routeParams, bancoInversion,$log){

	setTimeout(function(){
		bancoInversion.saldoActual(bancoInversion.user)
			.then( function(respuesta){
				$scope.saldos = respuesta.data;
				console.log("Resultado: ",$scope.saldos.length);
			  });
	},1500);
});