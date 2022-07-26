<?php
// extracting users info wit these keywords 
$fname = $_POST['name'];
$lname = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@mywebsite.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $fname.\n".
                "User Name: $lname.\n".
                "User email: $visitors_email.\n".
                "Subject: $name.\n".
                "User Message: $name.\n";

$to = 'adegunwaanu@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";
 
mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");
?>