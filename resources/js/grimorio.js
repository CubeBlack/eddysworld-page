grimorio = {};
grimorio.loaded = function(){
	grimorio.comandInp = document.getElementById("grimorio-input");
	grimorio.content = document.getElementById("grimorio-historico");
	grimorio.com("");
}
grimorio.inputEnter = function (event){
	var keynum;
	if(window.event) { //IE
		keynum = event.keyCode
	} else if(event.which) { // Netscape/Firefox/Opera AQUI ESTAVA O PEQUENINO ERRO ao invés de "e." é "event."
		keynum = event.which
	}
	if( keynum == 13 ) {
		this.com();
    }
	//console.log(keynum);
}
grimorio.com = function(){
	msg = this.comandInp.value;
	this.setContent(msg,"sended");
	msg = "grimorio.ouvir(" + term.toStr(msg) + ")";
	
	term.com(msg,grimorio.receved);
	this.comandInp.value = "";
}
//chamado no script "terminal"
grimorio.receved = function(msg){
	grimorio.setContent(msg,"receved");
}
//tipo:log/sended/receved
grimorio.setContent = function(nStr,tipo = "log"){
	dados = {
		"msg":nStr
	}
	
	this.content.innerHTML += page.replace(grimorio.tContent[tipo],dados);
	//this.content.scrollTop = this.content.scrollHeight;
	this.content.scrollTop = this.content.scrollHeight;
}
grimorio.tContent = {};
grimorio.tContent["receved"] = "<div id='grimorio-receved'>{msg}</div>";
grimorio.tContent["sended"] = "<div id='grimorio-sended'>{msg}</div>";
grimorio.tContent["log"] = "<div id='grimorio-log'>{msg}</div>";
console.log("grimorio.js");