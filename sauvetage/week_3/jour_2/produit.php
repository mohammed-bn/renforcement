<?php
class Produit{
    private $nom;
    private $prix;
    private $stock;

    public function __construct($nom, $prix, $stock){
        $this->nom = $nom;
        $this->prix = $prix;
        $this->stock = $stock;
    }

    public function getNom(){
        return $this->nom;
    }

    public function getPrix(){
        return $this->prix;
    }

    public function getStock(){
        return $this->stock;
    }

    public function setPrix($prix){
        if ($prix < 0){
            echo "veuillez saisir un nomber positive";
        }else{
            $this->prix = $prix;
        }
        
    }

    public function setStock($stock){
        if (stock < 0){
            echo "opération impossible!";
        }else{
            $this->stock = $stock;
        }
    }

    public function afficher(){
        echo "nom : ". $this->nom;
        echo "prix : ".$this->prix;
        echo "stock :".$this->stock;
    }
}

$produit1 = new Produit("PC", 5000, 20);
$produit2 = new Produit("voiture", 500000, 10);
// print_r($produit1->afficher());
print_r($produit2->setPrix(3333333));
print_r($produit2->getPrix());