<?php
	$pageTitle = "EW | Conta";
	include "openingPage.php";
?>
<!-------------------- onteudo -->
<link rel="stylesheet" type="text/css" href="css/conta.css">
<section id="conteudo">
<!-- Formulario de logon -->
	<section id="conta.displayUser">
		
	</section>
	<section id="conta.formlogin">
		<form>
			<p>
				<label>Usuario</label><br>
				<input id="conta.form.user" type="text">
			</p>
			<p>
				<label>Senha</label><br>
				<input id="conta.form.pass" type="text">
			</p>
			<p>
				<!--
				<button onclick="conta.logar();" >Emtrar</button>
				-->			
				<input type="button" value="Entrar" onclick="conta.logar();" >			
			</p>
		</form>
	</section>
<!-- Dados da conta -->
	<section id="">
		<div>
			Personagem/status	
		</div>
		<div>
			Usuario	
		</div>
	</section>
</section>
<script src="js/conta.js" charset="utf-8"></script>
<!-------------------- onteudo -->
<?php

include "endingPage.php";
	