<?php

$x = 10;

// $result = ($x % 2 == 0) ? "A" : ($x == 11) ? "B" : "C";

$result = $x % 2 == 0 ? "A" : ($x == 11 ? "B" : "C");

echo $result;

echo PHP_EOL;
echo PHP_EOL;


for($m=0, $n=0; $m <100; $m+=7, $n+=11) {
    echo "m is {$m} \n";
    echo ($n < 100) ? "n is {$n} \n" : '';
}


echo PHP_EOL;
echo PHP_EOL;

for($m=0, $n=0; $m <100; $m+=7, $n+=11) {
    echo $m % 7 == 0 ? $m . " for m \n" : '';
    echo $n % 11 == 0 ? $n . "for n \n" : '';
}
