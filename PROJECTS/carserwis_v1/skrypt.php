<?php
$to = 'kaliszmat1@gmail.com';
$name = $_POST['firstName'];
$email = $_POST['email'];
$subject = 'Nowy email od ' . $name . '(' . $email .')';
$message = $_POST['content'];
$headers = 'From: ' . $name . '(' . $email .')';
$headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers = 'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
echo 'Wszystko ok';
?>