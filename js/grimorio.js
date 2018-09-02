grimorio = [];
grimorio.eleView = document.getElementById("view");
grimorio.eleInput = document.getElementById("comandInp");
grimorio.inputEnter = function (event){
	var keynum;
	if(window.event) { //IE
		keynum = event.keyCode
	} else if(event.which) { // Netscape/Firefox/Opera 
		keynum = event.which
	}
	if( keynum == 13 ) {
		grimorio.enviar(grimorio.eleInput.value);
		grimorio.eleInput.value = "";
    }
	//console.log(keynum);
}
//--------------------------
grimorio.rEnviar = function (msg) {
	grimorio.setMsg(msg);
}
grimorio.enviar = function (msg,mudo=false) {
	term.com(page.replace(grimorio.tEnviar,{"msg":msg}),grimorio.rEnviar);
	if (!mudo) {
		grimorio.setMsg(msg);
	}
}
grimorio.tEnviar = "grimorio.ouvir({msg})";
//-------------------------------
grimorio.setMsg = function (msg,tipo="system") {
	template=grimorio.tMsg["system"];
	grimorio.eleView.innerHTML += page.replace(template,{"msg":msg});
	grimorio.eleView.scrollTop = grimorio.eleView.scrollHeight;
}
grimorio.tMsg = {};
grimorio.tMsg["system"] = "<div class='system'>{msg}</><div></div>";



grimorio.enviar("",true);
console.log("/js/grimorio.js");