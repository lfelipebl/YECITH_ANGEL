<?php

    $nombre = $_POST["nombre"];
    $tel = $_POST["telefono"];
    $email = $_POST["email"];
    $email = $_POST["text_area"];

    $to = "luisfelipe.baquero@defiendeme.com.co"
    $asunto = "WEB::Nuevo mensaje de $nombre";
    $mensaje = "
    
    Nombre del remitente: ".$nombre."
    Teléfono de contacto: ".$tel."
    Correo: ".$email."

    Mensaje: ".$mensaje."
    ";

    mail($to, $asunto, utf8_decode($mensaje));

    header ("location: contactanos.html");
?>