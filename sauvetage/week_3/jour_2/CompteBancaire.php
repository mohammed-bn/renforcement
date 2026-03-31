<?php

class CompteBancaire{
    private $titulaire;
    private $iban;
    private $solde;

    public function __construct($titulaire, $iban, $solde=0){
        $this->titulaire = $titulaire;
        $this->iban = $iban;
        $this->solde = $solde;
    }

    public function getTitulaire(){
        return $this->titulaire;
    }

    public function getIban(){
        return $this->iban;
    }

    public function getSolde(){
        return $this->solde;
    }
    public function deposer($montant){
        if($montant <= 0){
            echo "opération impossible!";
        }else{
            $this->solde += $montant;
        }
    }

    public function  retirer($montant){
        if ($montant <= 0){
            echo "opération impossible!";
        }else{
            if($this->solde >= $montant){
                $this->solde -= $montant;
            }else{
                echo "solde insuffisant";
            }
        }
    }

    public function afficherInfos(){
        echo "titulaire : ".$this->titulaire;
        echo "iabn : ".$this->iban;
        echo "solde : ".$this->solde;
    }

}

$compte1 = new CompteBancaire("mohammed", "ertyui345678", 10000);
$compte2 = new CompteBancaire("said", "DFGHJ34567");

// // test
$compte1->deposer(500);
$compte1->retirer(200);
$compte1->retirer(2000);

$compte2->deposer(300);
$compte2->retirer(100);

// test affichag
$compte1->afficherInfos();
$compte2->afficherInfos();