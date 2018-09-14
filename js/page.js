term = new Terminal();
//--------  declarar terminal
term.server = "http://localhost/eddysworld-server/eddysworld_server.term.php";
term.on();

var page = [];
page.loaded = function() {
	//term.com("user",function(msg){console.log(msg)});
	page.eleMenu = document.getElementById("page.menu");
}
//--------- menu ----------
page.menuCheked = false;
page.menu = function () {
	page.menuCheked = !page.menuCheked;
	if (page.menuCheked) {
		page.eleMenu.style.display = "block";
	}
	else {
		 page.eleMenu.style.display = "none";
	}
	return page.menuCheked;
}
//----------trocar valores de um template --------
page.replace = function(base,dados){
	var dadosK=Object.keys(dados);
	for (var i = 0; i < dadosK.length; i++) {
		base = base.replace(new RegExp("{" + dadosK[i] + "}", 'g'),dados[dadosK[i]]);
	}
	return base;
}
//----------------------
page.open = function (url) {
	window.location.href = url;
}
//------------
console.log("/js/page.js");