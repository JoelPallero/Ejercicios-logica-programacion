<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FizzBuzz</title>



    <link rel="stylesheet" href="./php.css">
</head>
<body>

    <section>
        <?php
            for($i = 1; $i <= 100; $i++){
                if($i % 3 === 0 && $i % 5 === 0){
                    echo "<span> FizzBuzz </span>";
                }else if($i % 5 == 0){
                    echo "<span> Buzz </span>";
                }else if($i % 3 == 0){
                    echo "<span> Fizz </span>";
                }else{
                    echo "<span>". $i ."</span>";
                }
            }
        ?>
    </section>
    
</body>
</html>