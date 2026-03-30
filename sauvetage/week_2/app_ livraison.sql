CREATE DATABASE  livraison;
use livraison;
CREATE TABLE utilisateur (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(50) NOT NULL,
  prenom VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  type ENUM('client', 'livreur') NOT NULL,
  creat_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE table resturant (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL,
  ville VARCHAR(255) NOT NULL,
  note_moyne INTEGER NOT NULL
);

CREATE Table plats (
    id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES resturant(id),
    nom VARCHAR(100) NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    categorie VARCHAR(90) NOT NULL
    
);

CREATE Table commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT,
    FOREIGN KEY (client_id) REFERENCES utilisateur(id),
    livreur_id INT,
    FOREIGN KEY (livreur_id) REFERENCES utilisateur(id),
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES resturant(id),
    status ENUM('livre', 'en cours', 'annule') NOT NULL,
    total DECIMAL(5, 2) NOT NULL,
    creat_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table lignes_commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT,
    FOREIGN KEY (commande_id) REFERENCES commandes(id),
    plat_id INT,
    FOREIGN KEY (plat_id) REFERENCES plats(id),
    quantite INT NOT NULL,
    prix DECIMAL(5, 2) NOT NULL
);

CREATE Table notations(
    id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT,
    FOREIGN KEY (commande_id) REFERENCES commandes(id),
    note INTEGER NOT NULL,
    commentaire TEXT
);

-- 1. Afficher le nom et l'email de tous les utilisateurs de type 'client'
SELECT nom, email FROM utilisateur WHERE type = 'client';
-- 2. Afficher tous les plats dont le prix est inférieur à 15€, triés du moins cher au plus cher
SELECT * FROM plats WHERE prix < 15
ORDER BY prix ASC;
-- 3. Compter le nombre de commandes par statut ('livré', 'en cours', 'annulé')
SELECT status, COUNT(*) AS nombre_commandes FROM commandes GROUP BY status;
-- 4. Afficher les 3 restaurants avec la meilleure note moyenne (ORDER BY + LIMIT)
SELECT * FROM resturant ORDER BY note_moyne DESC LIMIT 3;
-- 5. Calculer le chiffre d'affaires total et le panier moyen de toutes les commandes livrées
SELECT 
    SUM(total) AS chiffre_affaires_total,
    AVG(total) AS panier_moyen
FROM commandes WHERE status = 'livree';
-- 6. Afficher tous les plats dont le nom contient le mot 'poulet' (LIKE)
SELECT * FROM plats WHERE nom LIKE '%poulet%';


-- Exercice 2 — Jointures — Application de livraison (semi-autonome)


-- 7. Afficher le nom du client et le total pour chaque commande (INNER JOIN commandes +
-- utilisateurs)

SELECT u.nom, u.prenom, c.total FROM commandes c
INNER JOIN utilisateur u ON c.client_id = u.id
WHERE u.type = 'client';
