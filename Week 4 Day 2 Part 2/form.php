<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="form.php">
        <label for="username">Username:</label><br>
        <input type="text" name="name">
        <label for="password">Password:</label><br>
        <input type="password" name="password"><br>
        <input type="submit" name="submit" value="Login">
    </form>

    <?php
    // if(isset($_POST['submit'])){
    //     $name = $_POST['name'];
    //     $password = $_POST['password'];
    //     if($name == 'WAQAS ALI' && $password == '1234'){
    //         echo "Login Success";
    //     }
    //     else{
    //         echo "Login Failed";
    //     }
    // }
    // else{
    //     echo "please login";
    // }
    
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $password = $_POST['password'];
        if(empty($name)  || empty($password)){
            echo "username or password is empty"; 
        }
        else{
            echo "Hello $name";
        }
    }    
    ?>

</body>
</html>