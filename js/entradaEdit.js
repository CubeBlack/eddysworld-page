entrada = [];
function autoResize(ele)
{
    //objTextArea = document.getElementById('txtTextArea');
    while(ele.scrollHeight > ele.offsetHeight){
        ele.rows += 1;
    }

	console.log(ele.scrollHeight);
}
entrada.rGet = function(msg){
	//console.log(msg);
	obj = JSON.parse(msg);
	console.log(obj);
	saidas = "";
	for(i = 0; i < obj.length; i++){
		saidas +=  page.replace(entrada.tsaida,{"saida":obj[i]["saida"]});
	}
	entrada.eleDisplay.innerHTML = page.replace(entrada.tdisplay,{"entrada":obj[0]["entrada"]});
	entrada.eleSaidas.innerHTML = saidas;
}
entrada.get = function(title){
	term.com("dialogo.getByTitle(strBegin\""+title+"\"strEnd,json)",entrada.rGet);
}
entrada.addSaida = function(){

}
entrada.salvar = function(){

}
entrada.eleDisplay = document.getElementById("display");
entrada.tdisplay = "<h2>{entrada}</h2><p>uso: {entrada.uso}</p><a href=\"wiki.php?title={entrada}/\">wiki</a>";
entrada.eleSaidas = document.getElementById("saidas");
entrada.tsaida = "<textarea onkeydown=\"autoResize(this)\">{saida}</textarea>";
console.log("entradaEdit.js");
