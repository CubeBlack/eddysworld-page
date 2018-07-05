page.menuCheck = true;
page.menu = function(){
	if(page.menuCheck)
		document.getElementById("page-menu").style.display = "block";
	else
		document.getElementById("page-menu").style.display = "none";
	
	page.menuCheck = !page.menuCheck;
	//console.log(page.menuCheck);
}
console.log("template/page.js");