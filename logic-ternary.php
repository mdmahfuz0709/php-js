<?php

$n = 17;

if ($n % 2 == 0) {
    echo "its a even number";
} else {
    echo "its a odd number";
}

echo "\n \n";

//by ternary operator
$numberCheck = ($n % 2 == 0) ? "its a even number" : "its a odd number";
echo $numberCheck;

echo "\n \n";

//Leap Year
$leap_year = 16;

if ($leap_year % 4 == 0 && $leap_year % 100 == 0 && $leap_year % 400 == 0) {
    echo "{$leap_year} is must be leap year";
} elseif ($leap_year % 4 == 0 && $leap_year % 100 == 0) {
    echo "{$leap_year} is not a leap year";
} elseif ($leap_year % 4 == 0) {
    echo "{$leap_year} is must be leap year";
} else {
    echo "{$leap_year} is not a leap year";
}

echo "\n \n";

//Leap Year Smart Way with combined condition
if ($leap_year % 4 == 0 && ($leap_year % 100 != 0 || $leap_year % 400 == 0)) {
    echo "{$leap_year} is must be leap year";
} else {
    echo "{$leap_year} is not a leap year";
}
//Leap year er Smart Condition jevabe kaj kore
// $leap_year = 4;
// (true && (true || false));
// (true && true) = true;

echo "\n \n";

// only one logic will be false one of them
$logic1 = true;
$logic2 = false;
$logic3 = false;

//nested condition
if ($logic1 == true) { //scaller value jemon string all time bam pashe hoi but boolean dan pashe.
    if ($logic2 == true) {
        if ($logic3 == true) {
            echo "Logic1+2+3 is True";
        } else {
            echo "Logic3 is False";
        }
    } else {
        echo "Logic2 is False";
    }
} else {
    echo "Logic1 is False";
}

echo "\n \n";

//smart way

if ($logic1 == true && $logic2 == true && $logic3 == true) {
    echo "Logic1+2+3 is True";
} elseif ($logic1 == true && $logic2 == true) {

    echo "Logic3 is False";
} elseif ($logic1 == true) {
    echo "Logic2 is False";
} else {

    echo "Logic1 is False";
}
echo "\n \n";

//Best smart way

if ($logic1 && $logic2 && $logic3) {
    echo "Logic1+2+3 is True";
} elseif ($logic1 && $logic2) {

    echo "Logic3 is False";
} elseif ($logic1) {

    echo "Logic2 is False";
} else {

    echo "Logic1 is False";
}

//true && true = true;
//true && false = false;
//false && false = false;

//true || true = true;
//true || false = true;
//false || false = false;