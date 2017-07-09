<?php
$destino="wd.adiestramientocanino@gmail.com";
$usuario = $_POST["usuario"]
$contenido = "usuario: " . $usuario;
mail($destino,"chat",$contenido)
header("Location:app.js");
?>