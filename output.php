<?php

// echo
echo "this is my echo first code";
echo ("this is my echo second code");
echo("this is my echo second alternative code");
echo "this is my echo third code \n";
echo 'this is my echo fourth code \n';
echo "this is my echo fifth code <br/>"; 
echo "this is my",  " echo ",  "sixth code", "\n"; 
echo "it's my last 

echo code 
in this page", "\n"; //single quotation into double quotation and it will show as you write like breakpoint or gap

echo 'it\'s my last echo code in this page'; //single quotation into single quotation with scaping
echo "\n \n"; //new line

// print 
print "this is my print first code";
print("this is my print second code");
// print ("this is my print second alternative code");
print "this is my print third code \n";
print 'this is my print fourth code \n';
print "this is my print fifth code <br/>";
// print "this is my",  "print",  "sixth code"; 

echo "\n \n";//new line


$mahim = "mahim";
$taj = "taj";

echo "i saw {$mahim} and {$taj} \n"; // standard formate
echo "i saw $mahim and $taj \n";
echo 'i saw single quotation with $mahim and $taj' . "\n"; //it's not working but
echo 'i saw single quotation with ' . $mahim . ' and ' . $taj . "\n";
echo "i saw" . $mahim . " and " . $taj . "\n";

printf("i saw %s and %s", $mahim, $taj);
printf("i saw %s and %s \n", strtoupper($mahim), strrev($taj)); //string to upper case and reverse

$test_array = array('mahfuz', 'mamun', 'mahim', 'taj');
$test_array2 = ['mahfuz', 'mamun', 'mahim', 'taj'];

echo "\n \n";//new line

//variable type
$age_mahim = 28;
var_dump($age_mahim);

echo "\n \n";//new line

var_dump($mahim);

echo "\n \n";//new line

// echo $test_array;
var_dump($test_array2);

print_r($test_array2);