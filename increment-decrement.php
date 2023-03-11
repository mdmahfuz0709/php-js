<?php

//postfix increment
$x = 10;
echo $x++; // first time return x then increment
echo PHP_EOL;
echo $x;

echo PHP_EOL;
echo PHP_EOL;


//prefix increment
$x = 10;
echo ++$x; // first time return increment
echo PHP_EOL;
echo $x;

echo PHP_EOL;
echo PHP_EOL;

//Three Differences by for loop

$x = 0;
while ($x < 5) {
    echo $x . "\n";
    $x++;
}
echo PHP_EOL;
echo PHP_EOL;

$x = 0;
while ($x++ < 5) {
    echo $x . "\n";
}
echo PHP_EOL;
echo PHP_EOL;

$x = 0;
while (++$x < 5) {
    echo $x . "\n";
}
echo PHP_EOL;
echo PHP_EOL;
