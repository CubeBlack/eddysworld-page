<?php
include "system.php";
$BTS->TemplateLoad(array('content' => "page.grimorio.html"));
$content = $BTS->TemplateExport("content");
 

$BTS->TemplateDefine(array(
 'website.page' => "Grimorio",
 'website.content' => $content
));

echo $BTS->TemplateExport("page");