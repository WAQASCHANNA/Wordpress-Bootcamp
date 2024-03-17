<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <form action="index.php" method="post">
        <label for="username">username:</label> 
        <input type="text" id="username" name="username" required>

        <label for="password">password:</label> 
        <input type="password" id="password" name="password" required>

        <label for="Email">Email:</label> 
        <input type="Email" id="Email" name="Email" required>

        <input type="submit" value="Submit">
    

     </form>

     <?php
        // if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['Email']))
        // {
        //     $username = $_POST['username'];
        //     $password = $_POST['password'];
        //     $Email = $_POST['Email'];

        //     echo "<h2>Your Input:</h2>";
        //     echo "Username: $username <br>";
        //     echo "Password: $password <br>";
        //     echo "Email: $Email <br>";



            // if($_SERVER["REQUEST_METHOD_POST"]="POST"){
            //     $username = $_POST['username'];
            //     $password = $_POST['password'];
            //     $Email = $_POST['Email'];

            //     echo "<h2>Your Input:</h2>";
            //     echo "Username: $username <br>";
            //     echo "Password: $password <br>";
            //     echo "Email: $Email <br>";

            // }

        // Secure method for securiing data from hackers "htmlspecialchars" is used to secure data
        // if($_SERVER["REQUEST_METHOD_POST"]="POST"){
        //     $username = htmlspecialchars($_POST['username']);
        //     $password = $_POST['password'];
        //     $Email = $_POST['Email'];

        //     echo "<h2>Your Input:</h2>";
        //     echo "Username: $username <br>";
        //     echo "Password: $password <br>";
        //     echo "Email: $Email <br>";

        // }
            // Password sucuring
        if($_SERVER["REQUEST_METHOD_POST"]="POST"){
            $username = htmlspecialchars($_POST['username']);
            $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
            $Email = $_POST['Email'];

            echo "<h2>Your Input:</h2>";
            echo "Username: $username <br>";
            echo "Password: $password <br>";
            echo "Email: $Email <br>";

        }

     ?>




</body>
</html>