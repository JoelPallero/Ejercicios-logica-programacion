<?php

function checkNumbers($n){
    if($n === 0) {
        return false;
    }
    else if($n === 1) {
        return false;
    }
    else if($n === 2) {
        return true;
    }

    for ($i=2; $i <= sqrt($n); $i++) { 
        if($n % $i === 0){
            return false;
        }
    }    
    return true;
}

function displayPrimeNumbers(){
    for ($i=0; $i < 100; $i++) {
        if(checkNumbers($i)){
            echo '<span>'.$i.'</span><br>';
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Es Primo</title>
</head>
<body>

<div class="app">
    <?php displayPrimeNumbers(); ?>
</div>
    
</body>
</html>