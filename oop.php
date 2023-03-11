<?php

/*
class MotorCycle
{
    public $name;
    public $color;

    function __construct($objName, $objColor = "")
    {
        $this->name = $objName;
        $this->color = $objColor;
    }

    function front()
    {
        if ($this->color) {
            return "{$this->name} color is {$this->color}";
        }
        return "{$this->name} Color not Found";
    }
}

$rentAcar = new MotorCycle("php", "red");
$rentAcarTwo = new MotorCycle("lg");

echo $rentAcar->front();
echo PHP_EOL;
echo $rentAcarTwo->front();
*/

/*
//inheritence
class College
{
    public $collegeName;

    function __construct($name)
    {
        $this->collegeName = $name;
    }

    function myDistrict()
    {
    }

    protected function district($districtName)
    {
        $this->collegeName = $districtName . " " . $this->collegeName;
    }
}

class MyCollege extends College
{
    function myDistrict()
    {
        $this->district('Jashore');
        return "My College Name is" . " " . $this->collegeName;
    }
}


$myColleges = new MyCollege("MM College");

echo $myColleges->myDistrict();
*/


/*
//parent method call and modify
class ParentClass
{
    protected $name;
    function __construct($name) //bootstraping orthat auto run hoa jabe
    {
        $this->name = $name;
        $this->functionOne();
    }


    function functionOne()
    {
        echo "This is First Parent method called by $this->name \n\n";
    }

    function functionTwo()
    {
        echo "This is Second Parent method called by $this->name \n\n";
    }
}

class ChiledClass extends ParentClass
{
    function functionOne()
    {
        parent::functionOne(); //called with parent method
        parent::functionTwo(); //called with parent method
        echo "This is Chiled method \n";
    }
}

$childObject = new chiledClass("chiled");

// $childObject->functionOne();
*/


/*
class Shape
{
    protected $name;
    protected $area;

    function __construct($name)
    {
        $this->name = $name;
        $this->calculateArea();
    }

    function getArea()
    {
        echo "this {$this->name}'s is {$this->area} \n \n";
    }

    function calculateArea() //abstract method use korle vlo hoi
    {
    }
}

class Triangle extends Shape
{
    private $a, $b, $c;
    function __construct($a, $b, $c)
    {
        $this->a = $a;
        $this->b = $b;
        $this->c = $c;
        parent::__construct("Triangle");
    }

    function calculateArea()
    {
        $perimeter = ($this->a + $this->b + $this->c) / 2;
        $this->area = sqrt($perimeter * ($perimeter - $this->a) * ($perimeter - $this->b) * ($perimeter - $this->c));
    }
}

class Rectangle extends Shape
{
    private $a, $b;
    function __construct($a, $b)
    {
        $this->a = $a;
        $this->b = $b;
        parent::__construct("Rectangle");
    }

    function calculateArea()
    {
        $this->area = ($this->a * $this->b);
    }
}

$triAngleArea = new Triangle(2, 3, 4);
$triAngleArea->getArea();

$RectangleArea = new Rectangle(2, 3);
$RectangleArea->getArea();
*/


/*
//Final Method, Abstract Class and Abstract Method
abstract class Shape
{
    abstract function getArea();
    abstract function getPerimeter();
    final function finaleMethod() {
        echo "You can't override the Final Method ";
    }
}

class Rectangle extends Shape
{
    private $base, $hight;

    function __construct($base, $hight)
    {
        $this->base = $base;
        $this->hight = $hight;
    }

    // function getBase($base)
    // {
    //     $this->base = $base;
    // }

    // function getHight($hight)
    // {
    //     $this->hight = $hight;
    // }

    function getArea()
    {
        return $this->base * $this->hight;
    }
    function getPerimeter() // abstract thakle stracture show na korle error asbe. orthat implement or override kortei hobe.
    {
    }
    // function finaleMethod() {
    //     echo "You can't implement or override the Final Method ";
    // }
}



$rectangle = new Rectangle(2, 3);

// $rectangle->getBase(3);
echo $rectangle->getArea();

// $showShape = new Shape(); // Abstract thakle evabe parent class show kora jabe na. error asbe.
*/


class AmarJan
{
    public $jan;
    public $kolija;
    public $pop;

    //constructor method not here for initialize properties, so this argument is not used to others
    // function amarSona($jan, $kolija)
    // {
    //     $this->jan = $jan;
    //     $this->kolija = $kolija;

    //     return "amar {$this->jan}, {$this->kolija} koi reee!!";
    // }

    function __construct($jan, $kolija)
    {
        $this->jan = $jan;
        $this->kolija = $kolija;

        return "amar {$this->jan}, {$this->kolija} koi reee!!";
    }

    function amarFalazilSona()
    {
        return "Amar Fazil {$this->jan}, {$this->kolija} koi reee!!";
    }
}

$bou = new AmarJan('jan', 'kolija');

// echo $bou->amarFalazilSona('jan', 'kolija');
echo $bou->amarFalazilSona();
