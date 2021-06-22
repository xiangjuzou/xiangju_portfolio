<?php
    foreach ($_POST as $key => $value)
    	$message .= "Field ".htmlspecialchars($key)." is ".htmlspecialchars($value)."<br>";

    $to      = 'xiangju.zou@gmail.com';
    $subject = 'Mail from Xiangju.nl';
    $headers = 'From: website@xiangju.nl'       . "\r\n" .
               'Reply-To: webmaster@xiangju.nl' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>