<?php
class Animal{
    public $nom ;
    public $race;

    public function __construct($nom, $race){
        $this->nom = $nom;
        $this->race = $race;
    }

    public function  parler(){
        echo  $this->nom . "dit : Grr !";
    }

}

$animal1 = new Animal('Rex', 'Chien') ;
$animal2 = new Animal('Mimi', 'Chat');

print_r($animal1->parler());
$animal2 = new Animal('Mimi', 'Chat');
print_r($animal2);

$animal1->parler();
$animal2->parler();
echo "\n".$animal1->nom;