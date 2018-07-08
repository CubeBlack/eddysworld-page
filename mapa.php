<?php
include "system.php";
$BTS->TemplateLoad(array('content' => "page.mapa.html"));
$content = $BTS->TemplateExport("content");
 

$BTS->TemplateDefine(array(
 'website.page' => "Mapa",
 'website.content' => $content
));

echo $BTS->TemplateExport("page");