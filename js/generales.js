/*
Funciones JavaScript de uso general
*/

function mostrarMensaje(mensaje, tiempo) {
  // Mostrar mensaje y ocultar luego de cierto tiempo (predeterminado 5 segundos)
  if (document.getElementById) {
    var contenedorMensaje = document.getElementById('error_msg');
    if (contenedorMensaje) {
      contenedorMensaje.style.display = '';
      contenedorMensaje.innerHTML = mensaje;
      var tiempoMensaje = (tiempo) ? tiempo : 5000;
      window.setTimeout("document.getElementById('error_msg').style.display = 'none'",tiempoMensaje);
    }
  }

}

function checkInteger(e) {
  var char0 = "0".charCodeAt(0);
  var char9 = "9".charCodeAt(0);
  var whichKey;

  if (document.all) { whichKey = window.event.keyCode; } else { whichKey = e.which; }
//alert(whichKey);
  if ((whichKey >= char0 && whichKey <= char9) || whichKey == 13 || whichKey == 8 || whichKey == 9 || whichKey == 0 ) {
    return true;
  }
  if (document.all) {
    window.event.returnValue = "";
  }
  else {
    e.preventDefault();
  }
  return false;
}

function checkPercent(e) {
  var char0 = "0".charCodeAt(0);
  var char9 = "9".charCodeAt(0);
  var whichKey;

  if (document.all) { whichKey = window.event.keyCode; } else { whichKey = e.which; }

  if ( (whichKey >= char0 && whichKey <= char9) || whichKey == 13 || whichKey == 8 || whichKey == 9 || whichKey== 46 ) {
    return true;
  }
  if (document.all) {
    window.event.returnValue = "";
  } else {
    e.preventDefault();
  }
  return false;
}

//funcion para permitir solo letras
function checkCharacter(e){
  var whichKey;

  if (document.all) { whichKey = window.event.keyCode; } else { whichKey = e.which; }

  if ( whichKey <= 13 || whichKey==32 || (whichKey >= 65 && whichKey <= 90) || (whichKey >= 97 && whichKey <= 122) || whichKey==46 || whichKey==58 || whichKey==45 || whichKey==209 || whichKey==241 ){
    return true;
  }

  if (document.all) {
    window.event.returnValue = "";
  } else {
    e.preventDefault();
  }
  return false;

}


// Funciones para formato de numeros pequeños:
function formatearNumPeque(num) {
  num = num.toString().replace(/\$|\,/g,'');
  if(isNaN(num))
    num = "0";
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*10000+0.50000000001);
  cents = num%10000;
  num = Math.floor(num/10000).toString();
  if(cents<10)
    cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+'.' + num.substring(num.length-(4*i+3));

  return (((sign)?'':'-') + num + ',' + cents);
}

// Funciones para formato de numeros y monedas:
function formatearMoneda(num) {
 
  num = num.toString().replace(/\$|\,/g,'');
  if(isNaN(num))
    num = "0";
  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num*100+0.50000000001);
  cents = num%100;
  num = Math.floor(num/100).toString();
  if(cents<10)
    cents = "0" + cents;
  for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+'.' + num.substring(num.length-(4*i+3));
  return (((sign)?'':'-') + num + ',' + cents);
}

function checkFloat(e, punto) {
  var char0 = "0".charCodeAt(0);
  var char9 = "9".charCodeAt(0);
  var whichKey;
  var elemOrigen;
  var codPunto;
  var codMenos = 45;

  if (punto=="punto") { codPunto = 46; } else {  codPunto = 44; }

  if (document.all) {
    //whichKey = window.event.keyCode;
    whichKey = e.keyCode ? e.keyCode : e.charCode;
    elemOrigen = window.event.srcElement;
  } else {
    whichKey = e.which;
    elemOrigen = e.target;
  }
  unicode = e.keyCode? e.keyCode : e.charCode;

  if (unicode == 9){
    return true;
  }

  if ((whichKey >= char0 && whichKey <= char9) || whichKey == 0 || whichKey == 13 || whichKey == 8 || whichKey == 9 || (elemOrigen.value.indexOf(String.fromCharCode(codPunto))<0 && whichKey==codPunto) || (elemOrigen.value=="" && whichKey==codMenos)) {
    return true;
  }

  if (document.all) {
    window.event.returnValue = "";
  } else {
    e.preventDefault();
  }
  return false;
}

function editarValorMoneda(cad) {
  return replaceCharacters(cad,".","");
}

function replaceCharacters(conversionString,inChar,outChar) {
  var convertedString = conversionString.split(inChar);
  convertedString = convertedString.join(outChar);
  return convertedString;
}

//obtiene la opción seleccionada de un checkbox o radiobutton
function obtenerOpcionHabilitada(campo) {
  var encontrada = false;

  for (var x = 0; x < campo.length; x++) {
    if (campo[x].checked == true) {
      encontrada = campo[x];
      break;
    }
  }

  return encontrada;
}

function createElements(elemento){
  var tabla = document.getElementById(elemento);
  var cont = 1;
  for(i=1;i<(tabla.rows.length);i++){
    var listas = document.getElementById(elemento+'Question_'+(i));
    if(listas){
      cont = i + 1;
    }
  }
  var tbody = tabla.getElementsByTagName("TBODY")[0];
  var row = document.createElement("TR");
  var cel = document.createElement("TD");
  cel.align="center";
  var question;
  question=document.createElement('input');
  question.type="text";
  question.name=elemento+"Question_"+cont;
  question.id=elemento+"Question_"+cont;
  question.setAttribute('size','25');
  cel.appendChild(question);
  row.appendChild(cel);
  var cell = document.createElement("TD");
  cell.align="center";
  var answer;
  answer=document.createElement('input');
  answer.type="password";
  answer.name=elemento+"Answer_"+cont;
  answer.id=elemento+"Answer_"+cont;
  answer.setAttribute('size','25');
  cell.appendChild(answer);
  row.appendChild(cell);
  tbody.appendChild(row);
  var elemento = document.getElementById("etiqueta_"+elemento);
  if(cont >= 2){
    var elemento_new = document.getElementById("add_new");
    elemento_new.style.display="none";
  }
  elemento.style.display="";
}

function deleteElements(elemento){
  var tabla = document.getElementById(elemento);
  var tbody = tabla.getElementsByTagName("TBODY")[0];
  //var hfield = document.getElementById('h_'+elemento);
  var elemento = document.getElementById("etiqueta_"+elemento);
  tbody.deleteRow(tbody.rows.length - 1);
  //tabla.deleteRow(tabla.rows.length - 1);
  //hfield.value = hfield.value - 1;
  if(tbody.rows.length < 2){
    elemento.style.display="none";
  }else{
    elemento.style.display="";
  }
  if(tbody.rows.length > 1 && tbody.rows.length < 4){
    var elemento_new = document.getElementById("add_new");
    elemento_new.style.display="";
  }
  //if(tabla.rows.length < 3){
    //elemento.style.display="none";
  //}else{
    //elemento.style.display="";
  //}
}

function delete_cookie ( cookie_name ){
  var cookie_date = new Date ( );  // current date & time
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function crearCategoria(elemento){
  var tabla = document.getElementById(elemento);
  var cont = 1;
  for(i=1;i<(tabla.rows.length);i++){
    var listas = document.getElementById('categoria_'+(i));
    if(listas){
      cont = i + 1;
    }
  }
  var tbody = tabla.getElementsByTagName("TBODY")[0];
  var row = document.createElement("TR");
  var cel_1 = document.createElement("TD");
  cel_1.align="center";
  var categoria;
  categoria = document.createElement('select');
  var categorias = new Array();
  categorias[0]  = "-Seleccione-";
  categorias[1]  = "COMPROMISO CON VALORES ORGANIZACIONALES";
  categorias[2]  = "AUTODESARROLLO";
  categorias[3]  = "CALIDAD DE SERVICIO";
  categorias[4]  = "COMUNICACION";
  categorias[5]  = "TOMA DE DECISIONES Y SOLUCION DE PROBLEMAS";
  categorias[6]  = "PLANIFICACION";
  categorias[7]  = "DELEGACION";
  categorias[8]  = "CREATIVIDAD E INICIATIVA";
  categorias[9]  = "GESTION DE PROCESOS";
  categorias[10] = "CAPACIDAD DE ANALISIS Y SINTESIS";
  categorias[11] = "TRABAJO EN EQUIPO";
  categorias[12] = "RESPONSABILIDAD SOBRE RECURSOS";
  categorias[13] = "ADECUACIÓN A LAS NORMAS DE LA ORGANIZACIÓN";
  categorias[14] = "RELACIONES INTERPERSONALES";
  categorias[15] = "PRECISIÓN Y RAPIDEZ";

  for (i=0;i<=15;i++){
    var objOption = document.createElement("option");
    objOption.text = categorias[i];
    objOption.value = i;
    categoria.options[i] = (objOption);
  }
  categoria.name = "categoria_"+cont;
  categoria.id = "categoria_"+cont;
  cel_1.appendChild(categoria);
  row.appendChild(cel_1);

  var cel_2 = document.createElement("TD");
  cel_2.align="center";
  var descripcion;
  descripcion=document.createElement('textarea');
  descripcion.rows="3";
  descripcion.cols="75";
  descripcion.name="descripcion_"+cont;
  descripcion.id="descripcion_"+cont;
  descripcion.setAttribute('size','75');
  cel_2.appendChild(descripcion);
  row.appendChild(cel_2);

  var cel_3 = document.createElement("TD");
  cel_3.align="center";
  var peso;
  peso=document.createElement('input');
  peso.type="text";
  peso.name="peso_"+cont;
  peso.id="peso_"+cont;
  peso.setAttribute('size','2');
  peso.setAttribute('onchange',"validar_peso("+cont+")");
  cel_3.appendChild(peso);
  row.appendChild(cel_3);

  tbody.appendChild(row);
  var elemento = document.getElementById("etiqueta_"+elemento);
  if(cont >= 2){
    var elemento_new = document.getElementById("add_new");
    //elemento_new.style.display="none";
  }
  elemento.style.display="";
}

function deleteCategoria(elemento){
  var tabla = document.getElementById(elemento);
  var tbody = tabla.getElementsByTagName("TBODY")[0];
  var cargados = document.crearcompetencia.hcargados.value;
  var elemento = document.getElementById("etiqueta_"+elemento);
  if ( (tbody.rows.length) > cargados ){
    tbody.deleteRow(tbody.rows.length - 1);
    if(tbody.rows.length < 2){
      elemento.style.display="none";
    }else{
      elemento.style.display="";
    }
    if(tbody.rows.length > 1 && tbody.rows.length < 4){
      var elemento_new = document.getElementById("add_new");
      elemento_new.style.display="";
    }
  }
}

function redondeoDecimal(number,X) {
// rounds number to X decimal places, defaults to 2
X = (!X ? 2 : X);
return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}

function createElementsFliar(elemento){
  var tabla = document.getElementById(elemento);
  var cont = 1;
  for(i=1;i<(tabla.rows.length);i++){
    var listas = document.getElementById(elemento+'ApeFliar_'+(i));
    if(listas){
      cont = i + 1;
    }
  }
  var tbody = tabla.getElementsByTagName("TBODY")[0];
  var row = document.createElement("TR");
  var cel = document.createElement("TD");
  cel.align="left";

  var apefliar;
  apefliar=document.createElement('input');
  apefliar.type="text";
  apefliar.name=elemento+"ApeFliar_"+cont;
  apefliar.id=elemento+"ApeFliar_"+cont;
  apefliar.setAttribute('size','15');
  apefliar.setAttribute('maxLength','30');
  if (navigator.appName == "Microsoft Internet Explorer"){
    apefliar.onchange = function(){ conMayusculas("challengeApeFliar_"+cont); }
  }else
  {
    apefliar.setAttribute("onchange", "conMayusculas('challengeApeFliar_"+cont+"')");
  }
  cel.appendChild(apefliar);
  row.appendChild(cel);
  var cell = document.createElement("TD");
  cell.align="left";


  var nombfliar;
  nombfliar=document.createElement('input');
  nombfliar.type="text";
  nombfliar.name=elemento+"NombFliar_"+cont;
  nombfliar.id=elemento+"NombFliar_"+cont;
  nombfliar.setAttribute('size','15');
  nombfliar.setAttribute('maxLength','30');
  if (navigator.appName == "Microsoft Internet Explorer"){
    nombfliar.onchange = function(){ conMayusculas("challengeNombFliar_"+cont); }
  }else
  {
    nombfliar.setAttribute("onchange", "conMayusculas('challengeNombFliar_"+cont+"')");
  }
  cell.appendChild(nombfliar);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";

  var nacfliar;
  nacfliar = document.createElement('select');
  var nacfliares = new Array();
  nacfliares[0]  = "-Seleccione-";
  nacfliares[1]  = "V";
  nacfliares[2]  = "E";

  for (i=0;i<=2;i++){
    var objOption = document.createElement("option");
    objOption.text = nacfliares[i];
    objOption.value = i;
    nacfliar.options[i] = (objOption);
  }
  nacfliar.name =elemento+"NacFliar_"+cont;
  nacfliar.id =elemento+"NacFliar_"+cont;
  nacfliar.setAttribute('value','0');
  cell.appendChild(nacfliar);
  row.appendChild(cell);
  cell.align="left";

  var cedulafliar;
  cedulafliar=document.createElement('input');
  cedulafliar.type="text";
  cedulafliar.name=elemento+"CedulaFliar_"+cont;
  cedulafliar.id=elemento+"CedulaFliar_"+cont;
  cedulafliar.setAttribute('size','10');
  cedulafliar.setAttribute('maxLength',8);
  if (navigator.appName == "Microsoft Internet Explorer"){
    cedulafliar.onkeypress = function(){ checkInteger(event); }
  }
  else
  {
    cedulafliar.setAttribute("onkeypress", "checkInteger(event);");
  }
  cell.appendChild(cedulafliar);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";

  var parentesco;
  parentesco = document.createElement('select');
  var parentescos = new Array();
  parentescos[0]  = "-Seleccione-";
  parentescos[1]  = "Padre";
  parentescos[2]  = "Madre";
  parentescos[3]  = "Hijo";
  parentescos[4]  = "Tio";
  parentescos[5]  = "Hermano";
  parentescos[6]  = "Abuelo";
  parentescos[7]  = "Titular";
  parentescos[8]  = "Nieto";
  parentescos[9]  = "Bisabuelo";
  parentescos[10]  = "Bisnieto";
  parentescos[11] = "Sobrino";
  parentescos[12] = "Conyugue";
  parentescos[13] = "Suegro";
  parentescos[14] = "Cuñado";
  parentescos[15] = "Primo";
  parentescos[16] = "Padrino";
  parentescos[17] = "Madrina";
  parentescos[18] = "Otro";

  for (i=0;i<=13;i++){
    var objOption = document.createElement("option");
    objOption.text = parentescos[i];
    objOption.value = i;
    parentesco.options[i] = (objOption);
  }
  parentesco.name = elemento+"Parentesco_"+cont;
  parentesco.id = elemento+"Parentesco_"+cont;
  parentesco.setAttribute('size','1');
  parentesco.setAttribute('value','0');
  cell.appendChild(parentesco);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";

  var ocupacion;
  ocupacion=document.createElement('input');
  ocupacion.type="text";
  ocupacion.name=elemento+"Ocupacion_"+cont;
  ocupacion.id=elemento+"Ocupacion_"+cont;
  ocupacion.setAttribute('size','25');
  ocupacion.setAttribute('maxLength','30');
  if (navigator.appName == "Microsoft Internet Explorer"){
    ocupacion.onchange = function(){ conMayusculas("challengeOcupacion_"+cont); }
  }else
  {
    ocupacion.setAttribute("onchange", "conMayusculas('challengeOcupacion_"+cont+"')");
  }
  cell.appendChild(ocupacion);
  row.appendChild(cell);
  tbody.appendChild(row);
  cell.align="left";

  var elemento = document.getElementById("etiqueta_"+elemento);
  elemento.style.display="";
}

function conMayusculas(e) {
e.value = e.value.toUpperCase()
}


function crearProveedor(elemento){
  var tabla = document.getElementById(elemento);
  var cellText; var boldText;

  if (tabla.rows.length < 4) {

    var flag = 0;
    if (navigator.appName.indexOf("Explorer") != -1) { flag = 1; }

    var tbody = tabla.getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");

    //celda 1
    var cell_1 = document.createElement("TD");
    cell_1.align = "left";
    cell_1.className = 'fondoetiqueta';
    cellText = document.createTextNode("C.I./RIF:");
    boldText = document.createElement('b');
    boldText.appendChild(cellText);
    cell_1.appendChild(boldText);

    //celda 2
    var cell_2 = document.createElement("TD");
    var tprif = document.createElement('select');
    tprif.name = "id_tprifprov";
    tprif.id = "id_tprifprov";
    var valor = new Array();
    valor[0]  = "-Seleccione-";
    valor[1]  = "V";
    valor[2]  = "E";
    valor[3]  = "J";
    valor[4]  = "G";

    for (i=0;i<=valor.length-1;i++){
      var objOption = document.createElement("option");
      objOption.text = valor[i];
      objOption.value = i;
      tprif.options[i] = (objOption);
    }

    cell_2.appendChild(tprif);

    cellText = document.createTextNode("-");
    cell_2.appendChild(cellText);

    var irif = document.createElement('input');
    irif.type = "text";
    irif.name = "irifprov";
    irif.id = "irifprov";
    irif.setAttribute('size','10');

    if ( flag ) {
      irif.onkeypress = function(){ checkInteger(event); }
    }else{
      irif.setAttribute("onKeyPress","checkInteger(event);");
    }

    cellText = document.createTextNode(" *");

    //fondo rojo
    var fondoText = document.createElement("font");
    fondoText.setAttribute('size','3');
    fondoText.setAttribute('color','red');
    fondoText.appendChild(cellText);

    cell_2.appendChild(irif);
    cell_2.appendChild(fondoText);

    //celda 3
    var cell_3 = document.createElement("TD");
    cell_3.align = "left";
    cell_3.className = 'fondoetiqueta';
    cellText = document.createTextNode("Nombre:");
    boldText = document.createElement('b');
    boldText.appendChild(cellText);
    cell_3.appendChild(boldText);

    //celda 4
    var cell_4 = document.createElement("TD");
    var sproveedor = document.createElement('input');
    sproveedor.type = "text";
    sproveedor.name = "sproveedor";
    sproveedor.id = "sproveedor";
    cell_4.appendChild(sproveedor);

    cellText = document.createTextNode(" *");

    //fondo rojo
    fondoText = document.createElement("font");
    fondoText.setAttribute('size','3');
    fondoText.setAttribute('color','red');
    fondoText.appendChild(cellText);

    cell_4.appendChild(fondoText);

    //celda 5
    var cell_5 = document.createElement("TD");
    cell_5.align = "left";
    cell_5.className = 'fondoetiqueta';
    cellText = document.createTextNode("Tipo de Empresa:");
    boldText = document.createElement('b');
    boldText.appendChild(cellText);
    cell_5.appendChild(boldText);

    //celda 6
    var cell_6 = document.createElement("TD");
    var tpempresa = document.createElement('select');
    tpempresa.name = "id_tpempresaprov";
    tpempresa.id = "id_tpempresaprov";
    var valor = new Array();
    valor[0]  = "-Seleccione-";
    valor[1]  = "Pública";
    valor[2]  = "Privada";

    for (i=0;i<=valor.length-1;i++){
      var objOption = document.createElement("option");
      objOption.text = valor[i];
      objOption.value = i;
      tpempresa.options[i] = (objOption);
    }

    cell_6.appendChild(tpempresa);

    //celda 7
    var cell_7 = document.createElement("TD");
    cell_7.align = "left";
    cell_7.className = 'fondoetiqueta';
    cellText = document.createTextNode("Monto:");
    boldText = document.createElement('b');
    boldText.appendChild(cellText);
    cell_7.appendChild(boldText);

    //celda 8
    var cell_8 = document.createElement("TD");
    var monto = document.createElement('input');
    monto.type = "text";
    monto.name = "nmonto";
    monto.id = "nmonto";
    monto.setAttribute('size','10');
    monto.setAttribute('maxLength','18');

    if ( flag ) {
      monto.onblur = function(){ this.value = formatearMoneda(this.value.replace(",",".")); }
      monto.onkeypress = function(){ return checkFloat(event,"coma"); }
      monto.onfocus = function(){ this.value=editarValorMoneda(this.value); }
    }else{
      monto.setAttribute('onblur',"this.value = formatearMoneda(this.value.replace(\",\",\".\"))");
      monto.setAttribute('onkeypress',"checkFloat(event,\"coma\")");
      monto.setAttribute('onfocus',"this.value=editarValorMoneda(this.value)");
    }

    cell_8.appendChild(monto);

    cellText = document.createTextNode(" *");

    //fondo rojo
    fondoText = document.createElement("font");
    fondoText.setAttribute('size','3');
    fondoText.setAttribute('color','red');
    fondoText.appendChild(cellText);

    cell_8.appendChild(fondoText);

    //celda 9
    var cell_9 = document.createElement("TD");
    cell_9.align = "left";
    var linkBorrar = document.createElement('a');
    cellText = document.createTextNode("Borrar");
    linkBorrar.setAttribute('href','#delete');
    linkBorrar.onclick = function(){ borrarProveedor(this); }
    linkBorrar.appendChild(cellText);
    cell_9.appendChild(linkBorrar);

    row.appendChild(cell_1);
    row.appendChild(cell_2);
    row.appendChild(cell_3);
    row.appendChild(cell_4);
    row.appendChild(cell_5);
    row.appendChild(cell_6);
    row.appendChild(cell_7);
    row.appendChild(cell_8);
    row.appendChild(cell_9);

    tbody.appendChild(row);

  }

}

function borrarProveedor(row){
  var tabla = document.getElementById('tbl_proveedor');

  if(tabla.rows.length > 2){
    var i=row.parentNode.parentNode.rowIndex;
    tabla.deleteRow(i);
  }

}

function checkNumer(e) {
  var char0 = "0".charCodeAt(0);
  var char9 = "9".charCodeAt(0);
  var whichKey;
  var elemOrigen;
//   var codPunto;
  var codMenos = 45;

//   if (punto=="punto") { codPunto = 46; } else {  codPunto = 44; }

  if (document.all) {
    //whichKey = window.event.keyCode;
    whichKey = e.keyCode ? e.keyCode : e.charCode;
    elemOrigen = window.event.srcElement;
  } else {
    whichKey = e.which;
    elemOrigen = e.target;
  }
  unicode = e.keyCode? e.keyCode : e.charCode;
  if (unicode == 9){
    return true;
  }

//   if ((whichKey >= char0 && whichKey <= char9) || whichKey == 13 || whichKey == 8 || whichKey == 9 || (elemOrigen.value.indexOf(String.fromCharCode(codPunto))<0 && whichKey==codPunto) || (elemOrigen.value=="" && whichKey==codMenos)) {
  if ((whichKey >= char0 && whichKey <= char9) || whichKey == 13 || whichKey == 8 || whichKey == 9 ||  (elemOrigen.value=="" && whichKey==codMenos)) {

    return true;
  }

  if (document.all) {
    window.event.returnValue = "";
  } else {
    e.preventDefault();
  }
  return false;
}

//funcion para quitar los espacios en blanco de la derecha e izquierda de una cadena
function removeLeadingAndTrailingChar (inputString, removeChar)
{
  var returnString = inputString;
  if (removeChar.length)
  {
    while(''+returnString.charAt(0)==removeChar)
    {
      returnString=returnString.substring(1,returnString.length);
    }
    while(''+returnString.charAt(returnString.length-1)==removeChar)
    {
      returnString=returnString.substring(0,returnString.length-1);
    }
  }
  return returnString;
}

//funcion que simula a la funcion de trim
function trimSpaces(inputString) {
  return removeLeadingAndTrailingChar(inputString,' ');
}

function agregarDestinoViatico(elemento,src){
  var tabla = document.getElementById(elemento);
  var cellText; var boldText;

    var flag = 0;
    if (navigator.appName.indexOf("Explorer") != -1) { flag = 1; }

    var tbody = tabla.getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");

    //celda 1
    var cell_1 = document.createElement("TD");
    cell_1.align = "left";
    cell_1.className = 'fondoetiqueta';
    cellText = document.createTextNode("Ciudad Destino");
    boldText = document.createElement('b');
    boldText.appendChild(cellText);
    cell_1.appendChild(boldText);

    //celda 2
    var cell_2 = document.createElement("TD");
    var tpciudad = document.createElement('select');
    tpciudad.name = "id_tpciudad";
    tpciudad.id = "id_tpciudad";

    //copio los valores de un combo que ya exista y se los agrego a uno nuevo
    var old_combo =  document.getElementById('id_tpciudad');

    for (i=0;i<=old_combo.length-1;i++){

      var objOption = document.createElement("option");
      objOption.text = old_combo.options[i].text; objOption.value = old_combo.options[i].value;
      tpciudad.options[i] = (objOption);
    }

    cell_2.appendChild(tpciudad);

    //celda 3
    var cell_3 = document.createElement("TD");
    cell_3.align = "left";
    cell_3.className = 'fondoetiqueta';
    cellText = document.createTextNode("Fecha desde:");
    boldText = document.createElement('b');
    boldText.appendChild(cellText);
    cell_3.appendChild(boldText);

    //celda 4 (con diferentes id para los calendarios)
    var nrotr = document.getElementById('tbl_destino').rows.length;

    var cell_4 = document.createElement("TD");
    var ddesde = document.createElement('input');
    ddesde.type = "text";
    ddesde.name = "ddesde_dest";
    ddesde.id = "ddesde_dest_"+nrotr;
    ddesde.setAttribute('size','10');
    ddesde.setAttribute('readonly','1');
    cell_4.appendChild(ddesde);

    //agregar calendario
    var img = document.createElement("img");
    img.src =  src;
    img.id = "t_ddesde_dest_"+nrotr;
    img.setAttribute('alt', 'Calendario');
    img.setAttribute('title', 'Desplegar Calendario');
    img.setAttribute('height', '18');
    img.setAttribute('width', '25');
    img.setAttribute('style', 'cursor: pointer; border: 0px solid #0F305A;');

    cell_4.appendChild(img);

    //agregar javascript
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';

    cellText = document.createTextNode("Calendar.setup({ inputField : \"ddesde_dest_"+nrotr+"\", ifFormat : \"%d/%m/%Y\", button : \"t_ddesde_dest_"+nrotr+"\", align : \"Tl\", singleClick : true });");
    newScript.appendChild(cellText);

    cell_4.appendChild(newScript);

    //celda 5
    var cell_5 = document.createElement("TD");
    cell_5.align = "left";
    cell_5.className = 'fondoetiqueta';
    cellText = document.createTextNode("Fecha hasta:");
    boldText = document.createElement('b');
    boldText.appendChild(cellText);
    cell_5.appendChild(boldText);

    //celda 6 (con diferentes id para los calendarios)
    var cell_6 = document.createElement("TD");
    var dhasta = document.createElement('input');
    dhasta.type = "text";
    dhasta.name = "dhasta_dest";
    dhasta.id = "dhasta_dest_"+nrotr;
    dhasta.setAttribute('size','10');
    dhasta.setAttribute('readonly','1');
    cell_6.appendChild(dhasta);

    //agregar calendario
    var img = document.createElement("img");
    img.src =  src;
    img.id = "t_dhasta_dest_"+nrotr;
    img.setAttribute('alt', 'Calendario');
    img.setAttribute('title', 'Desplegar Calendario');
    img.setAttribute('height', '18');
    img.setAttribute('width', '25');
    img.setAttribute('style', 'cursor: pointer; border: 0px solid #0F305A;');

    cell_6.appendChild(img);

    //agregar javascript
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';

    cellText = document.createTextNode("Calendar.setup({ inputField : \"dhasta_dest_"+nrotr+"\", ifFormat : \"%d/%m/%Y\", button : \"t_dhasta_dest_"+nrotr+"\", align : \"Tl\", singleClick : true });");
    newScript.appendChild(cellText);

    cell_6.appendChild(newScript);

    //celda 5
    var cell_9 = document.createElement("TD");
    cell_9.align = "left";
    var linkBorrar = document.createElement('a');
    cellText = document.createTextNode("Borrar");
    linkBorrar.setAttribute('href','#delete');
    linkBorrar.onclick = function(){ borrarDestinoViatico(this); }
    linkBorrar.appendChild(cellText);
    cell_9.appendChild(linkBorrar);

    row.appendChild(cell_1);
    row.appendChild(cell_2);
    row.appendChild(cell_3);
    row.appendChild(cell_4);
    row.appendChild(cell_5);
    row.appendChild(cell_6);
    row.appendChild(cell_9);

    tbody.appendChild(row);

}

function borrarDestinoViatico(row){
  var tabla = document.getElementById('tbl_destino');

  if(tabla.rows.length > 2){
    var i=row.parentNode.parentNode.rowIndex;
    tabla.deleteRow(i);
  }

}

function createElementsCorredor(elemento){
  var tabla = document.getElementById(elemento);
  var cont = 1;
  for(i=1;i<(tabla.rows.length);i++){
    var listas = document.getElementById(elemento+'ApeNombCorredor_'+(i));
    if(listas){
      cont = i + 1;
    }
  }
  var tbody = tabla.getElementsByTagName("TBODY")[0];
  var row = document.createElement("TR");
  var cel = document.createElement("TD");
  cel.align="left";

  var apenomfliar;
  apenomfliar=document.createElement('input');
  apenomfliar.type="text";
  apenomfliar.name=elemento+"ApeNombCorredor_"+cont;
  apenomfliar.id=elemento+"ApeNombCorredor_"+cont;
  apenomfliar.setAttribute('size','18');
  apenomfliar.setAttribute('maxLength','30');
  if (navigator.appName == "Microsoft Internet Explorer"){
    apenomfliar.onchange = function(){ conMayusculas("challengeApeNombCorredor_"+cont); }
  }else
  {
    apenomfliar.setAttribute("onchange", "conMayusculas('challengeApeNombCorredor_"+cont+"')");
  }
  cel.appendChild(apenomfliar);
  row.appendChild(cel);
  var cell = document.createElement("TD");
  cell.align="left";


  var nacfliar;
  nacfliar = document.createElement('select');
  var nacfliares = new Array();
  nacfliares[0]  = "-Seleccione-";
  nacfliares[1]  = "V";
  nacfliares[2]  = "E";

  for (i=0;i<=2;i++){
    var objOption = document.createElement("option");
    objOption.text = nacfliares[i];
    objOption.value = i;
    nacfliar.options[i] = (objOption);
  }
  nacfliar.name =elemento+"NacCorredor_"+cont;
  nacfliar.id =elemento+"NacCorredor_"+cont;
  nacfliar.setAttribute('value','0');
  cell.appendChild(nacfliar);
  row.appendChild(cell);
  cell.align="left";

  var cedulafliar;
  cedulafliar=document.createElement('input');
  cedulafliar.type="text";
  cedulafliar.name=elemento+"CedulaCorredor_"+cont;
  cedulafliar.id=elemento+"CedulaCorredor_"+cont;
  cedulafliar.setAttribute('size','10');
  cedulafliar.setAttribute('maxLength',8);
  if (navigator.appName == "Microsoft Internet Explorer"){
    cedulafliar.onkeypress = function(){ checkInteger(event); }
    cedulafliar.onchange = function(){ validaCedulaCorredor_1("challengeCedulaCorredor_"+cont); }
  }
  else
  {
    cedulafliar.setAttribute("onkeypress", "checkInteger(event);");
    cedulafliar.setAttribute("onchange", "validaCedulaCorredor_1('challengeCedulaCorredor_"+cont+"')");
  }
  cell.appendChild(cedulafliar);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";


  var flash;
  flash=document.createElement('input');
  flash.type="hidden";
  flash.name=elemento+"flash_"+cont;
  flash.id=elemento+"flash_"+cont;
  flash.setAttribute('size','1');
  flash.setAttribute('maxLength',1);
  flash.setAttribute('value',1);
  cell.appendChild(flash);
  row.appendChild(cell);


  var tipoper;
  tipoper = document.createElement('select');
  var tipopers = new Array();
  tipopers[0]  = "-Seleccione-";
  tipopers[1]  = "Corredor";
  tipopers[2]  = "Contacto";
  tipopers[3]  = "Aseguradora";

  for (i=0;i<=3;i++){
    var objOption = document.createElement("option");
    objOption.text = tipopers[i];
    objOption.value = i;
    tipoper.options[i] = (objOption);
  }
  tipoper.name =elemento+"TipoPersona_"+cont;
  tipoper.id =elemento+"TipoPersona_"+cont;
  tipoper.setAttribute('value','0');
  cell.appendChild(tipoper);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";


  var idcorredor;
  idcorredor=document.createElement('input');
  idcorredor.type="text";
  idcorredor.name=elemento+"IdCorredor_"+cont;
  idcorredor.id=elemento+"IdCorredor_"+cont;
  idcorredor.setAttribute('size','10');
  idcorredor.setAttribute('maxLength','15');
  if (navigator.appName == "Microsoft Internet Explorer"){
    idcorredor.onkeypress = function(){ checkInteger(event); }
  }
  else
  {
    idcorredor.setAttribute("onkeypress", "checkInteger(event);");
  }
  cell.appendChild(idcorredor);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";

  var correo;
  correo=document.createElement('input');
  correo.type="text";
  correo.name=elemento+"CorreoCorredor_"+cont;
  correo.id=elemento+"CorreoCorredor_"+cont;
  correo.setAttribute('size','20');
  correo.setAttribute('maxLength','35');
  cell.appendChild(correo);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";

  var codarea;
  codarea = document.createElement('select');
  var codareas = new Array();
  codareas[0]  = "-Seleccione-";
  codareas[1]  = "0212";
  codareas[2]  = "0412";
  codareas[3]  = "0414";
  codareas[4]  = "0424";
  codareas[5]  = "0416";
  codareas[6]  = "0426";

  for (i=0;i<=6;i++){
    var objOption = document.createElement("option");
    objOption.text = codareas[i];
    objOption.value = i;
    codarea.options[i] = (objOption);
  }
  codarea.name = elemento+"CodArea_"+cont;
  codarea.id = elemento+"CodArea_"+cont;
  codarea.setAttribute('size','1');
  codarea.setAttribute('value','0');
  cell.appendChild(codarea);
  row.appendChild(cell);
  cell.align="left";


  var telefono;
  telefono=document.createElement('input');
  telefono.type="text";
  telefono.name=elemento+"Telefono_"+cont;
  telefono.id=elemento+"Telefono_"+cont;
  telefono.setAttribute('size','8');
  telefono.setAttribute('maxLength','7');
  if (navigator.appName == "Microsoft Internet Explorer"){
    telefono.onkeypress = function(){ checkInteger(event); }
  }
  else
  {
    telefono.setAttribute("onkeypress", "checkInteger(event);");
  }
  cell.appendChild(telefono);
  row.appendChild(cell);
  var cell = document.createElement("TD");
  cell.align="left";

  var codareaCel;
  codareaCel = document.createElement('select');
  var codareaCels = new Array();
  codareaCels[0]  = "-Seleccione-";
  codareaCels[1]  = "0212";
  codareaCels[2]  = "0412";
  codareaCels[3]  = "0414";
  codareaCels[4]  = "0424";
  codareaCels[5]  = "0416";
  codareaCels[6]  = "0426";

  for (i=0;i<=6;i++){
    var objOption = document.createElement("option");
    objOption.text = codareaCels[i];
    objOption.value = i;
    codareaCel.options[i] = (objOption);
  }
  codareaCel.name = elemento+"CodAreaCel_"+cont;
  codareaCel.id = elemento+"CodAreaCel_"+cont;
  codareaCel.setAttribute('size','1');
  codareaCel.setAttribute('value','0');
  cell.appendChild(codareaCel);
  row.appendChild(cell);
  cell.align="left";


  var telefonoCel;
  telefonoCel=document.createElement('input');
  telefonoCel.type="text";
  telefonoCel.name=elemento+"TelefCelular_"+cont;
  telefonoCel.id=elemento+"TelefCelular_"+cont;
  telefonoCel.setAttribute('size','8');
  telefonoCel.setAttribute('maxLength','7');
  if (navigator.appName == "Microsoft Internet Explorer"){
    telefonoCel.onkeypress = function(){ checkInteger(event); }
  }
  else
  {
    telefonoCel.setAttribute("onkeypress", "checkInteger(event);");
  }
  cell.appendChild(telefonoCel);
  row.appendChild(cell);
  tbody.appendChild(row);
  cell.align="left";

  var elemento = document.getElementById("etiqueta_"+elemento);
  if(cont >= 1){
    var elemento_new = document.getElementById("add_new");
    elemento_new.style.display="none";
  }
  elemento.style.display="";
}

function deleteElementsCorredor(elemento){
  var tabla = document.getElementById(elemento);
  var tbody = tabla.getElementsByTagName("TBODY")[0];
  var elemento = document.getElementById("etiqueta_"+elemento);
  tbody.deleteRow(tbody.rows.length - 1);

  if(tbody.rows.length < 2){
    elemento.style.display="none";
  }else{
    elemento.style.display="";
  }
  var elemento_new = document.getElementById("add_new");
  elemento_new.style.display="";
}

function verificarTextArea(control, cantMaxima) {
  var escritos = eval(control.value.length);
  var dif = eval(escritos - cantMaxima);
  if (dif > 0) {
    var value = control.value.substr(0,cantMaxima);
    control.value = value;
  }
}

function mostrarDisponiblesTextArea(control, cantMaxima, textoDisponibles) {
  var escritos = eval(control.value.length);
  var disponibles = eval(cantMaxima - escritos);
  if (disponibles < 0) {
    var dif = eval(escritos - cantMaxima);
    var value = control.value.substr(0,cantMaxima);
    control.value = value;
    disponibles = 0;
  }
  textoDisponibles.innerHTML = '('+disponibles+') Caracteres Restantes';
}


// Formato dinamico a los numeros con separador de decimal y miles

function currencyFormat(fld, milSep, decSep, e) { 
  var sep = 0; 
  var key = ''; 
  var i = j = 0; 
  var len = len2 = 0; 
  var strCheck = '0123456789'; 
  var aux = aux2 = ''; 
  var whichCode = (window.Event) ? e.which : e.keyCode; 

  if (whichCode == 13) return true; // Enter 
  if (whichCode ==  8) return true; // Backspace 
      key = String.fromCharCode(whichCode); // Get key value from key code 
      if (strCheck.indexOf(key) == -1) return false; // Not a valid key 
          len = fld.value.length; 
      for(i = 0; i < len; i++) 
        if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break; 
        aux = ''; 
      for(; i < len; i++) 
        if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i); 
        aux += key; 
      len = aux.length; 
  if (len == 0) fld.value = ''; 
  if (len == 1) fld.value = '0'+ decSep + '0' + aux; 
  if (len == 2) fld.value = '0'+ decSep + aux; 
  if (len > 2) { 
    aux2 = ''; 
    for (j = 0, i = len - 3; i >= 0; i--) { 
      if (j == 3) { 
        aux2 += milSep; 
        j = 0; 
      } 
              aux2 += aux.charAt(i); 
              j++; 
    } 
          fld.value = ''; 
          len2 = aux2.length; 
          for (i = len2 - 1; i >= 0; i--) 
            fld.value += aux2.charAt(i); 
          fld.value += decSep + aux.substr(len - 2, len); 
  } 
      return false; 
} 

//////////   A ESTA FUNCION MEDIANTE CUALQUIER EVENTO SE LE MANDA EL PARAMETRO this.form ó document.NOMBREDELFORMULARIO//////////
function validaForm(e){
    
    var texts = e.getElementsByTagName('input');
    for (var i = 0; i < texts.length; i++) {
        if ((texts[i].type === 'text' || texts[i].type === 'password') && texts[i].value.trim() === "" && texts[i].required === true) {
            var title = texts[i].getAttribute('title');
            //alert(texts[i]);
            alert("Por favor complete el campo: " + title);
            texts[i].focus();
            texts[i].style.borderColor = "red";
            texts[i].style.borderStyle = "dashed";
            return false;
        }else if(texts[i].type === "text"){
            texts[i].style.borderColor = "green";
            texts[i].style.borderStyle = "outset";
        }
    }                
    var selects = e.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].value === "" && selects[i].required === true) {
            var title = selects[i].getAttribute('title');
            alert("Por favor selecione: " + title);
            selects[i].style.borderColor = "red";
            selects[i].style.borderStyle = "dashed";
            selects[i].focus();
            return false;
        }else{            
            selects[i].style.borderColor = "green";
            selects[i].style.borderStyle = "outset";
        }
    }                
}

function validaForm(e){
    
    var texts = e.getElementsByTagName('input');
    for (var i = 0; i < texts.length; i++) {
        if ((texts[i].type === 'text' || texts[i].type === 'password') && texts[i].value.trim() === "" && texts[i].required === true) {
            var title = texts[i].getAttribute('title');
            //alert(texts[i]);
            alert("Por favor complete el campo: " + title);
            texts[i].focus();
            texts[i].style.borderColor = "red";
            texts[i].style.borderStyle = "dashed";
            return false;
        }else if(texts[i].type === "text"){
            texts[i].style.borderColor = "green";
            texts[i].style.borderStyle = "outset";
        }
    }                
    var selects = e.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].value === "" && selects[i].required === true) {
            var title = selects[i].getAttribute('title');
            alert("Por favor selecione: " + title);
            selects[i].style.borderColor = "red";
            selects[i].style.borderStyle = "dashed";
            selects[i].focus();
            return false;
        }else{            
            selects[i].style.borderColor = "green";
            selects[i].style.borderStyle = "outset";
        }
    }                
}

var x = document.getElementsByTagName("body")[0].onload= function(){
     var form = document.getElementsByTagName('form');
            for (var i = 0; i < form.length; i++) {
                form[i].autocomplete = "off";
            }}
        
        function mayuscula(e){
            e.value = e.value.toUpperCase();
        }