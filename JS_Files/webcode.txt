function navigateOnChange(){
	
	var t = document.getElementById("droplistnavigate").value;
	//alert(t);

	if (t=="index"){

		window.location.href="index.html";

	}else if (t=="video"){

		window.location.href="video.html";

	}else if (t=="videogame"){

		window.location.href="videogame.html";

	}else if (t=="contact"){

		window.location.href="contact.html";

	}else {

	}

}


function verifyElementWithId(id){

	var element = document.getElementById(id);

	if (element.value.trim()==""){

		element.classList.add("invalidfield");
		return false;

	}else{
		
		element.classList.remove("invalidfield");
		return true;
	}
}

function verifyCheckBoxWithId(id){

	var checkBox = document.getElementById(id);

	if (checkBox.checked == false){

		checkBox.classList.add("invalidfield");
		return false;

	} else {

		checkBox.classList.remove("invalidfield");
		return true;
	}
}

/*Funcion para comprobar la informacion del formulario.*/
function checkForm(){

	if    ((verifyElementWithId("name"))
		&& (verifyElementWithId("name1"))
		&& (verifyElementWithId("name2"))

		&& (verifyElementWithId("way"))
		&& (verifyElementWithId("textaddress"))
		&& (verifyElementWithId("textaddressnumber"))
		&& (verifyElementWithId("textpostalcode"))
		&& (verifyElementWithId("city"))

		&& (verifyElementWithId("emailbox"))
		&& (verifyElementWithId("passwordbox"))
		&& (verifyElementWithId("passwordrepeatbox"))

		&& (verifyCheckBoxWithId("acceptconditions"))
		&& (document.getElementById("passwordbox").value == document.getElementById("passwordrepeatbox").value)) {

		alert("Su registro se ha enviado con éxito.");
		return true;

	} else {

		return false;
	}

}


/*Funcion para resetear el formulario*/
function resetForm(){

	document.getElementById("name").value = "";
	document.getElementById("name1").value = "";
	document.getElementById("name2").value = "";

	document.getElementById("way").value = "";
	document.getElementById("textaddress").value = "";
	document.getElementById("textaddressnumber").value = "";
	document.getElementById("textaddressblock").value = "";
	document.getElementById("textaddressscale").value = "";
	document.getElementById("textaddressfloor").value = "";
	document.getElementById("textaddressdoor").value = "";
	document.getElementById("textpostalcode").value = "";
	document.getElementById("city").value = "";

	document.getElementById("emailbox").value = "";
	document.getElementById("passwordbox").value = "";
	document.getElementById("passwordrepeatbox").value = "";

	alert("El formulario se ha borrado con éxito.");
}


// function checkForm(){

// 	//alert("checkForm funciona");

// 	if ((document.getElementById("name").value=="") || (document.getElementById("name").value=="Inserte nombre")) {
// 		alert("Por favor, indique su nombre.");
// 		/*alert(document.getElementById("name").value);*/
// 		exit();
// 	}

// 	if ((document.getElementById("name1").value=="") || (document.getElementById("name1").value=="Inserte Apellido1")) {
// 		alert("Por favor, indique su primer apellido.");
// 		/*alert(document.getElementById("name1").value);*/
// 		exit();
// 	}

// 	if ((document.getElementById("name2").value=="") || (document.getElementById("name2").value=="Inserte Apellido2")) {
// 		alert("Por favor, indique su segundo apellido.");
// 		/*alert(document.getElementById("name2").value);*/
// 		exit();
// 	}

// 	// if (birthdate=="") {
// 	// 	alert("Por favor, por favor seleccione fecha de nacimiento.");
// 	// 	exit();
// 	// }

// 	// if (document.getElementById("gender").value=="") {
// 	// 	alert("Por favor, por favor seleccione género.");
// 	// 	exit();
// 	// }


// 	// if !(IsValidWay(document.getElementById("way").value)){
// 	// 	alert("Por favor, seleccione tipo de vía.");
// 	// 	exit();
// 	// }

// 	if (document.getElementById("textaddress").value==""){
// 		alert("Por favor, indique su dirección.");
// 		exit();
// 	}

// 	if (document.getElementById("textaddressnumber").value==""){
// 		alert("Por favor, indique su número de dirección.");
// 		exit();
// 	}

// 	if (document.getElementById("textaddressblock").value==""){
// 		/*alert("Por favor, indique su dirección.");*/
// 		/*exit();*/
// 	}

// 	if (document.getElementById("textaddressscale").value==""){
// 		/*alert("Por favor, indique su dirección.");
// 		exit();*/
// 	}

// 	if (document.getElementById("textaddressfloor").value==""){
// 		/*alert("Por favor, indique su dirección.");
// 		exit();*/
// 	}

// 	if (document.getElementById("textaddressdoor").value==""){
// 		/*alert("Por favor, indique su dirección.");
// 		exit();*/
// 	}

// 	if (document.getElementById("postalcode")==""){
// 		alert("Por favor, indique su código postal.");
// 		exit();
// 	}

// 	if (city==""){
// 		alert("Por favor, indique su ciudad.");
// 		exit();
// 	}


// 	if (email==""){
// 		alert("Por favor, introduzca un email válido.");
// 		exit();
// 	}

// 	// if (password=="") || !(IsValidPassword(document.getElementById("password").value)) {
// 	// 	alert("Por favor, introduzca un password válido.");
// 	// 	exit();
// 	// }

// 	if (document.getElementById(acceptconditions).value) {
// 		alert("Por favor, debe aceptar las condiciones de uso.");
// 		exit();
// 	}

// 	/*Mensaje de validacion de registro.*/
// 	alert("Su registro se ha enviado con éxito.");

// }


// /*Funcion para comprobar el tipo de via.*/
// function IsValidWay(t){

// 	var b;

// 	if (document.getElementById("way").value="") || (document.getElementById("way")=="-- Seleccione tipo de via --"){
// 		b=false;
// 	}else{
// 		b=true;
// 	}

// 	return b;
// }


// /*Funcion para comprobar el email.*/
// function IsValidEmail(t){
// 	return false;
// }

// /*Funcion para comprobar la contraseña.*/
// function IsValidPassword(t){
// 	return false;
// }


// /*Funcion para guardar valores en local.*/
// function saveValue(e){
// 	alert(e.id);
// 	alert(e.value);
// 	localStorage.setItem(e.id, e.val);
// }