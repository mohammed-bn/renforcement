
<?php

// <!-- Exercice 1 — Variables & echo
// Complétez et exécutez ce script. Observez le résultat dans le navigateur. -->

// 1. Déclarez une variable $prenom avec votre prénom
$prenom = "mohammed";
// 2. Déclarez une variable $age avec votre âge
$age = 23;
// 3. Affichez : "Bonjour, je m'appelle [prénom] et j'ai [âge] ans."
echo "Bonjour, je m'appelle $prenom et j'ai $age ans.";

// ------------------------------------------------------------------------------


// Exercice 2 — Condition if/else
// Écrivez la condition qui affiche 'Majeur' si l'âge est >= 18, 'Mineur' sinon.
$age = 16;
if ($age >= 18) {
echo "Majeur";
} else {
echo "Mineur";
}

// -------------------------------------------------------------------------------------

for ($i = 1; $i <= 10; $i++) {
    echo   $i.' ';
}
// Résultat attendu : 1 2 3 4 5 6 7 8 9 10