<?php
	// --------------- ening -----------
	require_once"resources/BasicTemplateSystem.php";
	$BTS = New BasicTemplateSystem();
	if(isset($_REQUEST["T"])) $template = $_REQUEST["T"];
	else $template = "simple";
	$BTS->template_path = "resources/templates/$template/";
	$BTS->TemplateLoad(array('page' => "page.html"));
	// --------------- menu ---------------
	$menu = array();
	$menu[] = array("Inicio","index.php");
	$menu[] = array("Mundo","mundo.php");
	$menu[] = array("Mapa","mapa.php");
	$menu[] = array("Dilogo","dialogo.php");
	$menu[] = array("Itens","itens.php");
	$menu[] = array("Forum","forum.php");
	$menu[] = array("Usuarios","usuarios.php");
	$menu[] = array("Perfil","perfil.php");
	$itens = "";
	foreach($menu as $item){
		$BTS->TemplateLoad(array('nav.item' => "page.nav.item.html"));
		
		$BTS->TemplateDefine(array(
			'page.nav.item.url' => $item[1],
			'page.nav.item.title' => $item[0]
		));
		//$itens .= "<li><a href='$item[1]'>$item[0]</a></li>";
		
		$itens .= $BTS->TemplateExport("nav.item");
	}

	// ----------------- definindo ---------------
	$BTS->TemplateDefine(array(
		'website.title' => "Eddys World",
		'website.nav.item' => $itens,
		'website.nav-adm.item' => "<li>Ferramentas administrativas</li>",
	));

	