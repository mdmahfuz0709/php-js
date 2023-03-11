<?php

//factor-1
$n = 20;
$m = $n++; 

echo "the number of m = " . $m . " but the number of n = " . $n;
echo "\n \n";

printf("the number of m is %d and n is %d \n \n", $m, $n);

//$n = 20;
//$m = $n++
// $m = $n; but php calculate this
// $n = $n+1; but php calculate this



//factor-2
$b = 20;
$a = ++$b;

echo "the number of a = " . $a . " but the number of b = " . $b;
echo "\n \n";

printf("the number of a is %d and b is %d \n \n", $a, $b);

//$b = 20;
//$a = ++$b $a +=$b
// $b = $b+1; but php calculate this
// $a = $b; but php calculate this


//factor-3
$x = 10;
$x += 20; //$x = $x+20;
echo $x . "\n \n";

$p = $v = $h =31;
echo $v;
echo "\n \n";

// % = Modulus, vagsesh ber korte hobe
// BODMASA = Bracket, Of, Division, Multiplication, Addition, Subtraction

// $f = (20-5) * 2;
$f = 20 % 3;
echo $f;
echo "\n \n";


//factor-4

printf('decimal %1$d to Hexadecimal %1$x', 20);
echo "\n \n"; //Deci Base-10(0-9)

printf('decimal %1$d to binary %1$b', 20);
echo "\n \n"; //Binary Base-2(0,1)

printf('decimal %1$d to Octal %1$o', 20);
echo "\n \n"; //Octal Base-8(0-7)

printf('binary %1$b to Hexadecimal %1$x', 01);
echo "\n \n"; //Hexa Base-16(0-9 + A-F)