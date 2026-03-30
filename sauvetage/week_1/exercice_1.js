let fruits = ['pomme', 'banane', 'orange'];
console.log(fruits[1]);

let colours = ['rouge', 'bleu', 'vert','jeune'];
colours.push('violet');
console.log(colours.length);

var prssone = {
    nom : "Alice",
    age : 25,
    ville : "Paris",
}

console.log(prssone.nom);

let animaux = ["chat", "chien", "lapin", "tortue"];
for (let i = 0; i<= animaux.length-1; i++){
    console.log(animaux[i]);
}

animaux.forEach(e => {
    console.log(e);
});

let  courses = [{nom:'math', prix:250},{nom:'philosophie', prix:550},{nom:'français', prix:300}];
let total = 0;
courses.forEach(e => {
    total = total + e.prix;
});
console.log(total);


courses.forEach(e => {
    e.contite = 500;
});


let produit = {
    nom: 'iphone',
    prix :8000,
    categorie:'electronique',
}

console.log("le produit",produit.nom, "avec un nouveau prix" , produit.prix);