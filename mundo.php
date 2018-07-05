<?php
include "system.php";
$BTS->TemplateLoad(array('content' => "page.mundo.html"));
$content = $BTS->TemplateExport("content");
 

$BTS->TemplateDefine(array(
 'website.page' => "Mundo",
 'website.content' => $content
));

echo $BTS->TemplateExport("page");