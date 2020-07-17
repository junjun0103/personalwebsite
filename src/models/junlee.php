<?php 
    // header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Origin: https://junlee-b9944.web.app', true);
    header('Access-Control-Allow-Origin: https://junlee-b9944.firebaseapp.com', true);
    //post parameters
    $name = $_POST['fname'];
    $email = $_POST['email'];
    $subject = "from personal website";//$_POST['title'];
    $message = $_POST['content'];
    $to = "lucky.hyunjun@gmail.com";

    $front="First Name:".' ';
    $back="Email:".' ';
    $headers =$front.$name."\n".$back.$email;

		if (mail($to, $subject, $message, $headers)) {
			$rta = array('rta' => 0);
		}else{
      $rta = array('rta' => '1');
    }

    echo json_encode($rta);
?>