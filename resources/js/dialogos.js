dialogos = [];
dialogos.loaded = function(){
	dialogos.eleContent = document.getElementById("dialogos");
	//console.log(dialogos.eleContent);
	dialogos.search();
	//dialogos.cloud ();
}
dialogos.search = function(){
	receved = function(msg){
		content = "";
		//dialogos.eleContent.innerHTML = msg;
		if(msg[0] !="{"){
			dialogos.eleContent.innerHTML = msg;
			return;
		}
		dados = JSON.parse(msg);

		//console.log(dados);
		
		for(ind = 0; ind < (dados.row_total-2); ind++){
			infoArr = {
			"id":dados[ind]["id"],
			"entrada":dados[ind]["entrada"],
			"retorno":dados[ind]["saida"],
			"personagem":dados[ind]["personagem"]
			};
			content +=  page.replace(dialogos.tDialogo, infoArr);
		}
		//dialogos.eleContent.innerHTML = msg;
		
		dialogos.eleContent.innerHTML = content;
	}
	com = "grimorio.dialogos(,json);";
	term.com(com,receved);
	dialogos.eleContent.innerHTML = "Loading...";
}
dialogos.cloud = function(){
	receved = function(msg){
		if(msg[0] !="{"){
			dialogos.eleContent.innerHTML = msg;
			return;
		}
		content = "";
		dados = JSON.parse(msg);
		//console.log(dados[0]["id"]);
		
		for(ind = 0; ind < (dados.row_total-2); ind++){
			console.log(dados[ind]["id"]);
			infoArr = {
			"id":dados[ind]["id"],
			"dialogo":dados[ind]["entrada"],
			//"size":(dados.uso_total/dados.row_total*dados[ind]["uso"])
			"size":20
			};
			content +=  page.replace(dialogos.tCloudLink, infoArr);
		}
		//dialogos.eleContent.innerHTML = msg;
		
		dialogos.eleContent.innerHTML = content;
	}
	
	com = "grimorio.dialogos(,json);";
	term.com(com,receved);
	dialogos.eleContent.innerHTML = "Loading...";
}
dialogos.update = function(id){
	receved = function(msg){
		//console.log(msg);
		dialogos.search();
	}
	entrada = document.getElementById("dialogo"+id+"-entrada").value;
	
	retorno = {};
	retorno = document.getElementById("dialogo"+id+"-retorno").value;
	retorno = JSON.stringify(retorno);
	personagem = document.getElementById("dialogo"+id+"-personagem").value;

	infoArr = {
		"id":term.toStr(id),
		"entrada":term.toStr(entrada),
		"retorno":term.toStr(retorno),
		"personagem":term.toStr(personagem)
	};
	com = page.replace(dialogos.tDialogoUpdateCom,infoArr);
	console.log(com);
	//com = dialogos.tDialogoUpdateCom;
	term.com(com,receved);
	//console.log(com);
	
}
//dialogos.tDialogo = "<dialogo><dialogo-p1><input value='{id}' disabled><input value='{entrada}' id='dialogo{id}-entrada'></dialogo-p1><dialogo-p2><input value = '{retorno1}' id='dialogo{id}-retorno1'><br><input value = '{retorno2}' id='dialogo{id}-retorno2'><br><input value = '{retorno3}' id='dialogo{id}-retorno3'><br><input value = '{retorno4}' id='dialogo{id}-retorno4'><br><button type='button'>Adicionar</button></dialogo-p2><dialogo-p3><input value='{personagem}' id='dialogo{id}-personagem'><button type='button' onclick = 'dialogos.update({id})'>Salvar</button></dialogo-p3></dialogo>";
dialogos.tDialogo = "<dialogo><dialogo-p1><input value='{id}' disabled><input value='{entrada}' id='dialogo{id}-entrada'></dialogo-p1><dialogo-p2><textarea id='dialogo{id}-retorno'>{retorno}</textarea></dialogo-p2><dialogo-p3><input value='{personagem}' id='dialogo{id}-personagem'><input value='{personagem_nome}' disabled><button type='button' onclick = 'dialogos.update({id})'>Salvar</button></dialogo-p3></dialogo>";
dialogos.tCloudLink = "<a href='forum.php?tipo=dialogo&id={id}' style='font-size:{size}px'>{dialogo}</a>";
//dialogos.tDialogoUpdateCom = "grimorio.dialogoupdate(str\"{id}\",str\"{entrada}\",str\"{retorno}\",str\"{personagem}\")";
dialogos.tDialogoUpdateCom = "grimorio.dialogoReplace({id},{entrada},{retorno},{personagem});";
console.log("dialogos.js");