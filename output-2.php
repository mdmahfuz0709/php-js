<?php

$name = "mahfuz";
$mahfuz = "name";
echo $$mahfuz . "\n \n";

echo strtoupper($name). "\n \n";


$number = 20;

printf('now i will print decimal %1$d and binary %1$b number', $number); // it's perfect way

echo "\n \n";

printf("now i will print decimal %d and binary %b number", 20, 20); // it's not perfect way because 20 repeat

echo "\n \n";

$fname = "md";
$mid_name = "mahfuz";
$lname = "alam";

printf('%3$s %1$s %2$s', $fname, $mid_name, $lname);

echo "\n \n";

$float_number = 20.121;

printf("%.2f", $float_number);

echo "\n \n";

$integer_number = 21;
$integer_number2 = 210;
$integer_number3 = 2341;

printf("%04d \n \n", $integer_number);//0021

printf('%04d', $integer_number2);//0210

echo "\n \n";

$f = 121.677;
$m = 235.345;
printf("%05.2f \n", $m);
printf("%08.2f \n", $m);

printf("%05.3f \n", $f);


$return_number = sprintf("printf function not return output just output print but sprintf return value"); //sprintf return value

echo $return_number;