<?php
include "system.php";
$BTS->TemplateLoad(array('content' => "mundo.html"));
$content = $BTS->TemplateExport("content");
 

$BTS->TemplateDefine(array(
 'website.subtitle' => "Home",
 'website.content' => $content
));

echo $BTS->TemplateExport("page");