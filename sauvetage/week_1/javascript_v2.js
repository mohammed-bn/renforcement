// PARTIE 1 -- Documentation & Exercices Debutants 

// 1.1  push(), pop(), shift(), unshift(), splice() 

taches = [];
taches.push( 'Coder','Tester', 'Deployer');
taches.unshift('Analyser');
taches.pop();
taches.shift();
taches.splice(1, 0, 'Documenter' );
taches.splice(2,1,'Revue de code');
// console.log(taches);

// Exercice 2 -- Affichage d'une liste
let nbr = 1;
const prenoms = ['Alice', 'Bob', 'Clara', 'David', 'Eva']; 
prenoms.forEach(e => {
    console.log(nbr,e);
    nbr++;
});

let longueurs = [];
let nbrr = 0;
prenoms.forEach(e => {
    longueurs[nbrr] = e.length;
    nbrr++;
});
// console.log(longueurs);

prenoms.forEach(e => {
    if(e.length > 3){
        console.log(e);
    }
});


// Exercice 3 -- Transformation de donnees 

const temperatures = [0, 15, 22, 35, -5, 100]; 
// let Fahrenheit = temperatures.map();

// Exercice 4 -- Filtrage simple 

const mots = ['chat','cheval','chien','lion','chameau','cobra','loup','chevre']; 

const motsChs = mots.filter(m => m.startsWith('ch'));
const motsCh = mots.filter(m => m.length > 5);
const motsChsm = mots.filter(m => m.startsWith('ch') && m.length > 5);
// console.log(motsChsm);

// Exercice 5 -- Recherche dans un catalogue

const catalogue = [ 
    { ref: 'A01', nom: 'Stylo bille',  prix: 1.20 }, 
    { ref: 'A02', nom: 'Cahier A4',    prix: 3.50 }, 
    { ref: 'A03', nom: 'Surligneur',   prix: 2.10 }, 
    { ref: 'A04', nom: 'Post-it',      prix: 3.80 }, 
    { ref: 'A05', nom: 'Ciseaux',      prix: 6.30 }, 
]; 

const ref = catalogue.find(r => r.ref === 'A03');
const index = catalogue.findIndex(i => i.nom ===  'Cahier A4');
const findee = catalogue.find(i => i.ref === 'A05');

if (findee === undefined){
    // console.log('makaynch');
}else{
    // console.log(findee);
}
// console.log(index);

const notes = [14, 8, 17, 11, 15, 9, 18, 12]; 
const somme = notes.reduce((acc,n) => acc + n, 0);
console.log(somme);