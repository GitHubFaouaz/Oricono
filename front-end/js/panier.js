// concerne le panier 
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));// Pour stocker les produits selectionnees 
//La méthode getItem() de l'interface Storage renvoie la valeur associée à la clé passée en paramètre.
// // localStorage.removeItem('casquette');
console.log(produitEnregistreDansLocalStorage);


//...................................AFFICHAGE  DES PRODUITS DE PANIER.........................................//
//section de la classe ou je vais injecter le code HTML

const positionElementHtml = document.querySelector("#section-info-panier");// le container panier 
console.log(positionElementHtml);

//si le panier est vide : afficher panier vide 
if(produitEnregistreDansLocalStorage === null){
  const panier_vide = `
  <div class =' container_panier_vide'>
       <div> le panier est vide </div> 
   
   <div>`;
   positionElementHtml.innerHTML = panier_vide ;  
}else {
   console.log('je ne suis pas vide ');

} 