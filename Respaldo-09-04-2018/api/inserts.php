<?php 

require "dataModel.php";

$criptomonedas = ["Bitcoin","Etherium","Litecoin","Dogecoin","Bytecoin","Verge","Ripple","Stellar"];
$tal = new dataModel();

for ($i=0; $i < count($criptomonedas); $i++) { 
	$result = $tal->registrar_criptomoneda($criptomonedas[$i]);
	echo "<br><br>".$result . " = $criptomonedas[$i]";
}