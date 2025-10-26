<h1>Login</h1>

<form action="">
    <input type="email" name="email" placeholder="Email" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <input type="submit" value="Login" name="submit">
</form>

<?php
 if (isset($_POST['submit'])) {
     $email = $_POST['email'];
     $password = $_POST['password'];

 if ($email == "admin@gmail.com" && $password == "admin123"){ 
    $_SESSION['email'] = $email;
    header("Location: index.php");  
 }else{
     echo "Invalid email or password. Please try again.";}
 }
?>