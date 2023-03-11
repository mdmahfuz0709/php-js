<?php

$m = 6;
for ($n = $m, $factorial = 1; $n > 1; $n--) {
    $factorial *= $n;
}

echo "factorial {$m} is {$factorial}";

echo PHP_EOL;
echo PHP_EOL;

$y = 10;
$operation = 1;
for ($x = $y; $x <= 15; $x++) {
    for ($n = $x, $factorial = 1; $n > 1; $n--) {
        $factorial *= $n;
        $operation++;
    }
    echo "factorial {$x} is {$factorial} \n";
}
echo PHP_EOL;
echo "Toatal Operation with multiplication is {$operation}";

echo PHP_EOL;
echo PHP_EOL;

$result = 1;
$operation = 1;
for ($y = 1; $y <= 10; $y++) {
    $result *= $y;
    $operation++;
    echo "factorial {$y} is {$result} \n";
}

echo PHP_EOL;

echo "Toatal Operation with multiplication is {$operation}";

echo PHP_EOL;
echo PHP_EOL;

$result = 1;
$operation = 1;
for ($y = 5; $y <= 10; $y++) {
    $result *= $y;
    $operation++;
    echo "factorial {$y} is {$result} \n";
}

echo PHP_EOL;

echo "Total Operation by multiplication is {$operation}";

echo PHP_EOL;
echo PHP_EOL;


for ($i = 5; $i <= 10; $i++) {
    $factorial = 1;
    for ($j = 1; $j <= $i; $j++) {
        $factorial *= $j;
    }
    echo "$i! = $factorial\n";
}

echo PHP_EOL;

echo "Total Operation by multiplication is {$operation}";
