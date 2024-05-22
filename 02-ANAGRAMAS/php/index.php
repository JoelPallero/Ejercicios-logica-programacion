<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$mainString = '';
$secondString = '';
$successEvaluation = '';
$errorEvaluation = '';


if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["buttonAnagrama"])){
    $mainString = $_POST["mainString"];
    $secondString = $_POST['secondString'];

    //verificar si tienen la mimsma cantidad de letras
    if(strlen($mainString) !== strlen($secondString)){
        $errorEvaluation = 'No son Anagramas';
    }else{
        //transformar letras a minúsculas
        $mainString = strtolower($mainString);
        $secondString = strtolower($secondString);

        //verificar si son palabras identicas
        if($mainString === $secondString){
            $errorEvaluation = 'No son Anagramas';
        }else{
            //Reordenar letras y verificar si son las mismas en ambas palabras.
            $mainArray = [];
            $secondArray = [];

            $mainArray = str_split($mainString);
            sort($mainArray);
            $secondArray = str_split($secondString);
            sort($secondArray);

            //verificar si son las mismas en ambas palabras.
            if($mainArray === $secondArray){
                $successEvaluation = 'Son Anagramas';
            }else{
                $errorEvaluation = 'No son Anagramas';
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anagramas</title>

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
    />

<style>
    #app{
    width: 100%;
    max-width: 480px;
    padding: 50px 20px;
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    span{
        width: 100%;
        padding: 10px 15px;
        border-radius: 5px;
        color: #dddddd;
        font-weight: 500;
        strong{
            font-weight: 700;
        }
    }
    .success-span{
        background-color: green;
    }
    .error-span{
        background-color: red;
    }
</style>

</head>
<body>
    <div id="app">
        <form action="" method="post" id="form">
            <?php
                if(isset($successEvaluation) && $successEvaluation !== ''){
                    echo '<span class="success-span"> <strong>Resultado</strong>: '. $successEvaluation .'</span>';
                }else if(isset($errorEvaluation) && $errorEvaluation !== ''){
                    echo '<span class="error-span"> <strong>Resultado</strong>: '. $errorEvaluation .'</span>';
                }
            ?>
            <label for="mainString">
                Ingresar una palabra
                <input type="text" name="mainString" id="mainString">
            </label>
            

            <label for="secondString">
                Ingresar otra palabra
                <input type="text" name="secondString" id="secondString">
            </label>

            <button type="submit" name="buttonAnagrama" id="buttonAnagrama">Verificar si son anagramas</button>
        </form>
    </div>
</body>
</html>