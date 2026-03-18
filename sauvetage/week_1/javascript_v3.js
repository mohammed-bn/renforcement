// Exercice 1 -- Manipulation d'objet 
const fiche = { prenom:'Bob', nom:'Dupont', age:34, ville:'Lyon' }; 
// console.log(fiche.prenom , fiche.nom);

function getProp(obj, cle) {
  if (cle in obj) {
    return obj[cle];
  }else{
    return "not fond";
  }
}

// console.log(getProp(fiche, 'Bob'));

function renommercle(obj, ancienne, nouvelle)
{
  const nouvelle_objet = {...obj};
  if (ancienne in nouvelle_objet)
    {
    nouvelle_objet[nouvelle] = nouvelle_objet[ancienne];
    delete nouvelle_objet[ancienne];
  }
  return nouvelle_objet;
}


// Exercice 2 -- Parcourir un inventaire 

const inventaire = { 
    stylo:  { prix: 1.5, stock: 200 }, 
    cahier: { prix: 3.5, stock: 85  }, 
    regle:  { prix: 0.8, stock: 0   }, 
    compas: { prix: 8.5, stock: 12  }, 
}; 

const deux = Object.entries(inventaire);
// console.log(deux);


const totale = Object.values(inventaire) .reduce((somme, article) => somme + article.prix * article.stock, 0);

// console.log(totale);


const prix = Object.fromEntries(
  Object.entries(inventaire).map(([nom, details]) => [nom, details.prix])
);

// console.log(prix);

// Exercice 3 -- Déstructuration en pratique 

const commande = { 
    id: 'CMD-001', 
    client: { nom: 'Dupont', email: 'dupont@mail.com' }, 
    total: 18.50, 
    livree: false 
};


const { id, total } = commande;

// console.log(nom);

const { client: { nom } } = commande;

const { total: montant, livree: test } = commande;

console.log(montant);    
console.log(test);

// Exercice 4 -- CRUD sur un tableau d'objets 

let catalogue = [ 
    { id:1, nom:'Stylo bille',  prix:1.20, stock:150 }, 
    { id:2, nom:'Cahier A4',    prix:3.50, stock:45  }, 
    { id:3, nom:'Surligneur',   prix:2.10, stock:80  }, 
    { id:4, nom:'Post-it',      prix:3.80, stock:60  }, 
    { id:5, nom:'Ciseaux',      prix:6.30, stock:20  }, 
]; 


function rechercher(catalogue, found) {
    return catalogue.filter(e => e.nom.includes(found));
}


function modifier(catalogue, id, nouvelleprix) {
    return catalogue.map(e => e.id === id ? { ...p, prix: nouvelleprix} : p);
}

function supprimer(catalogue, id) {
    return catalogue.filter(p => p.id !== id);
}
// PARTIE 2 -- Challenges Intermédiaires 

