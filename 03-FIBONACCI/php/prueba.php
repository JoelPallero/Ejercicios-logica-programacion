<?php

function displayFibonacci($n){
    $index = 0;
    $next = 1;
    $result = 0;

    for ($i=0; $i < $n; $i++) { 
        if($i === 0){
            echo $i . '<br>';
        }else if($i === 1){
            echo $i . '<br>';
        }else{
            $result = $index + $next;
            echo $result . '<br>';
            $index = $next;
            $next = $result;
        }
    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fibonacci</title>
</head>
<body>

<div class="app">
    <?php displayFibonacci(50); ?>
</div>
    
</body>
</html>