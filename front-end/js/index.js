//  Récuperation des arcticles depuis l'API
fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then((data) => {

    // boucle pour chaque produit 
    for (produit of data) {

      // on fait appelle à la fonction addTeddies pour Dispatcher les données de chaque produit (prix, nom...) dans le DOM  
      addTeddies(produit)
    }
  })
  .catch((erreur) => console.log("erreur : " + erreur));

















