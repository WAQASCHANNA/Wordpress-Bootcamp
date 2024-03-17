<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

        <!-- Data visible in URL link -->
    <!-- <form action="form.php" method="get">
        <lable for="username">username:</lable>
        <input type="text" name="username" placeholder="WAQAS ALI"><br>
        <lable for="password">password:</lable>
        <input type="password" name="password"> <br>
        <input type="submit" value="Login"><br>
    </form>
    
    <!-- <?php
        // echo $_GET["username"] ."<br>";
        // echo $_GET["password"]."<br>";
        

    ?> --> -->

<!-- method in which data is invisible (used for sensetive data)  -->

<!-- <form action="form.php" method="post">
        <lable for="username">username:</lable>
        <input type="text" name="username" placeholder="WAQAS ALI"><br>
        <lable for="password">password:</lable>
        <input type="password" name="password"> <br>
        <input type="submit" value="Login"><br>
    </form>
    
    <!-- <?php
        // echo $_POST["username"] ."<br>";
        // echo $_POST["password"]."<br>"; -->
    // ?> -->
        

    <!-- <!-- isset function is used to chek wether the variable is set or not 
    Returns true if vatiable is set and not null, false otherwise. -->

    <!-- empty function is used to check wether the varaible is empty or not 
return true if  a  variavle is not declared, false , null,  -->

<?php
// $username = null;
// echo isset($username);

// $username = "WAQAS ALI";
// echo isset($username);

// this will return if statement becaus the variable is set with a value

// $username = false;

// if(isset($username)){
//     echo "username is set";
// }

// else
// {
//     echo "username is not set";
// }

// here the varible is not declared or set so it will return esle statment
// $username = "";

// if(isset($username)){
//     echo "username is set";
// }

// else
// {
//     echo "username is not set";
// }


// will print if statement because varaible is not set

// conditon #1

// $username = "";

// if(empty($username)){
//     echo "username is empty";
// }

// else
// {
//     echo "username is not empty";
// }

// retrun if statement
// condition #2 
// $username = false;

// if(empty($username)){
//     echo "username is empty";
// }

// else
// {
//     echo "username is not empty";
// }

// returns else statemtn 
// condtion #3

$username = true;

if(empty($username)){
    echo "username is empty";
}

else
{
    echo "username is not empty";
}

?>

</body>
</html>