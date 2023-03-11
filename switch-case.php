<?php

$switch_value = -1;
switch(true) {
    case ($switch_value >= 1 && $switch_value != 0): 
        echo "I have {$switch_value} taka only";
    break;
    case ($switch_value < 1): 
        echo "ami aro " . abs($switch_value) . " taka dina aci vai";
    break;
    default:
        echo "I have no taka";

}

echo "\n \n";

$color = 'red';

switch($color) {
    case 'red':
    case 'green':
        echo "{$color}, This is my Favourite color";
        break;
    
    case 'blue':
        echo "I don't like The {$color} color";
        break;
    
    case 'white':
        echo "I don't like The {$color} color";
        break;

    //same echo amra uporer niyome likhte pari, red && green jmonta koreci
    default : 
        echo "{$color} color is very bad";
}

echo "\n \n";

$number = 20;
$check_number = $number % 2;

switch($check_number) {
    case 0:
        switch($number) {
            case $number > 0:
                echo "{$number} is positive Even number"; 
                break;
            case $number < 0:
                echo "{$number} is Negetive Even number"; 
                break;
        }
        break;
    default:
        switch($number) {
            case $number > 0:
                echo "{$number} is positive Odd number"; 
                break;
            case $number < 0:
                echo "{$number} is Negetive Odd number"; 
                break;
        }
        
}

echo "\n \n";

switch(true) {
    case ($number > 0 && $check_number == 0): 
        echo "{$number} is positive Even number";
        break;
    case ($number < 0 && $check_number == 0): 
        echo "{$number} is Negative Even number";
        break;
    case ($number > 0 && $check_number != 0): 
        echo "{$number} is positive Odd number";
        break;
    /*case ($number > 0 && $check_number == 1): 
        echo "{$number} is positive Odd number";
        break; */
    case ($number < -1 && $check_number != 0): 
        echo "{$number} is Negative Odd number";
        break;
    /* case ($number < 0 && $check_number == -1): 
        echo "{$number} is Negative Odd number";
        break; */

}

echo "\n \n";

$string_check = "9laptops";

switch(true) {
    case (string)"8laptops": 
        echo "Wow, 8 Laptops is mine";
    break;
    case (string)9: 
        echo " 9 ";
    break;
    case (string)"9laptops":
        echo "Wow, 9 Laptops is mine";

}

echo "\n \n";


switch($string_check) {
    case '8laptops': 
        echo "Wow, 8 Laptops is mine";
    break;
    case 9: 
        echo " 9 ";
    break;
    case '9laptops':
        echo "Wow, 9 Laptops is mine";

}