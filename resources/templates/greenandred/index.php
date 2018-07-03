<!DOCTYPE HTML>
 <html lang="pt-br">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
    <title>Daniel LIma</title>
    <link href="resources/css/defalt.css" rel="stylesheet"/>
    <script src="scripts/seu-script.js"></script>
</head>
<body>
   <header>
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contato</a></li>
          </ul>
      </nav>
      <img src="index\img\ico_dannke.png" alt="">
      <div>
        <h1>Daniel Lima</h1>
        <h2>Faz Tudo</h2>
        <span>#WebDesign</span>
        <span>#GameDeveloper</span>
        <span>#PorgramadorDesktop</span>
        <span>#Escritor</span>
        <span>#ChangerDesign</span>
        <span>#Artista3D</span>
        <span>#PorgramadorWeb</span>
        <span>#PorgramadorWeb</span>
        <span>#PorgramadorWeb</span>
      </div>
  </header>
  <section>
    <article>
        <img src="index\img\eu.svg" alt="">
        <header>
            <h2>KnigtSlayer</h2>
            <p>Publicado em <time datetime="2015-03-09T13:00:24+01:00">09 de Março de 2015</time> por <a href="#">Author</a> - <a href="#comments">15 comentários</a></p>
            <p><a href="#">PHP</a>, <a href="#">PHP</a>, <a href="#">PHP</a></p>
        </header>
    </article>
    <?php
      for ($i=0; $i < 15; $i++) {
        ?>
        <article onClick="">
            <img src="index\img\eu.svg" alt="">
            <header>
                <h2>KnigtSlayer</h2>
                <p>Publicado em <time datetime="2015-03-09T13:00:24+01:00">09 de Março de 2015</time> por <a href="#">Author</a> - <a href="#comments">15 comentários</a></p>
                <a href="#">PHP</a>, <a href="#">PHP</a>, <a href="#">PHP</a>
            </header>
        </article>
        <?php
      }
     ?>

  </section>
  <aside>
      <h2>Entre em contato</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <iframe width="200" height="280" frameborder="0" allowfullscreen="" src="https://embed.wattpad.com/story/77687270" ></iframe>
  </aside>
  <footer>
      <p><a href="adm">Adm</a> | Copyright 2015 Código Fonte©</p>
  </footer>
  <div id="fundo"></div>
</body>
</html>
