page = [];
page.server = "https://localhost/EddysWorld/server/eddysworld_server.term.php";
term = new Terminal();

term.server = page.server;
term.on()

page.replace = function(base,dados){
	var dadosK=Object.keys(dados);
	for (var i = 0; i < dadosK.length; i++) {
		base = base.replace(new RegExp("{" + dadosK[i] + "}", 'g'),dados[dadosK[i]]);
	}
	return base;
}
console.log("page.js");