 
//  Récuperation des arcticles depuis l'API
 let url =`http://localhost:3000/api`;
    
 fetch(url+'/teddies')
 .then((response) => response.json())
 .then((data) => {
     addCards(data);
 })
 .catch((erreur) => console.log("erreur : " + erreur));


//fonction des données de chaque produit ( nom , prix  )
function addCards(data){

  // boucle pour chaque produit 
for( produit of data ){

  // recuperation des éléments dans le html   
 const cart = document.getElementById('liste'); 
 
  cart.innerHTML  += `
<article >
  <a href="html/product.html?name_id=${produit._id}"><img src="${produit.imageUrl}" alt="${produit.name}"></a> 
  <div class="div-details-photo">
     <p class="nom-prix">${produit.name}</span> <span>${formatPrice(produit.price)}</span></p>  
    
  </div>
</article>`;


   }  

}













