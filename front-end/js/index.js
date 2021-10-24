 
//  Récuperation des arcticles depuis l'API
 
  fetch('http://localhost:3000/api/teddies')
 .then((response) => response.json())
 .then((data) => {
    
   // boucle pour chaque produit 
    for( info of data ){
      addTeddies(info) 
    }
 })
 .catch((erreur) => console.log("erreur : " + erreur));

















