
<?php
if(isset($_POST['submit'])) {

$to = "mdhec@hotmail.com";
$subject = "News Letter Subscription";
$Name_field = $_POST['name'];
$email_field = $_POST['email'];
 
$body = "From: $name_field\n E-Mail: $email_field";
 
echo "Data has been submitted to $to!";
mail($to, $subject, $body);

} else {

echo "Something Went Worng!";

}
?>

<p>Thank you for subscribing.</p>