// concerne le panier 
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));// Pour stocker les produits selectionnees 
//La méthode getItem() de l'interface Storage renvoie la valeur associée à la clé passée en paramètre.

// console.log(produitEnregistreDansLocalStorage);


//...................................AFFICHAGE  DES PRODUITS DE PANIER.........................................//
//section de la classe ou je vais injecter le code HTML

const positionElementHtml = document.querySelector("#section-info-panier");// le container panier 


//si le panier est vide : afficher panier vide 
if(produitEnregistreDansLocalStorage === null){
  const panier_vide = `
  <div class =' container_panier_vide'>
       <div> le panier est vide </div> 
   
   <div>`;
   positionElementHtml.innerHTML = panier_vide ;  
}else {
 //si le panier n'est pas vide :afficher les produits du localStorage 


 for( a = 0 ; a < produitEnregistreDansLocalStorage.length ; a++ ){  // construction de la structure du produit a chaque tour
  
  let calcul_sous_total = produitEnregistreDansLocalStorage[a].Quantite * produitEnregistreDansLocalStorage[a].price; 
  
  const elementBody = document.querySelector("#tbody_produit");
  elementBody.innerHTML  +=  ` 
  
  <tr>
    <td class="col-2"><img src="${produitEnregistreDansLocalStorage[a].imageUrl}"></td>
    <td class="col-2">${produitEnregistreDansLocalStorage[a].nameProduitSelectionne}</td>
    <td class="col-2">${produitEnregistreDansLocalStorage[a].couleur}</td>
    <td class="col-2">${produitEnregistreDansLocalStorage[a].Quantite}</td>
    <td class="col-2">${formatPrice(produitEnregistreDansLocalStorage[a].price)}</td>
    <td class="col-2 " id='sous_total'>${formatPrice(calcul_sous_total)}</td>
  </tr>

  `;
  calcul_sous_total = calcul_sous_total
  console.log(`${formatPrice(calcul_sous_total)}`);
   
 }
    
 
} 
//**********************************Le montant total  du panier **********************/


// let tabPrixPanier = [] ;

//  for( let x = 0 ; x < produitEnregistreDansLocalStorage.length; x ++  ){
  
//        let prix_chaque_produit_panier = produitEnregistreDansLocalStorage[x].price;
//        tabPrixPanier.push(prix_chaque_produit_panier)
      
      
    
    //  }
  //  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  //  let prixTotal = tabPrixPanier.reduce(reducer) ;
  //   function totaPrice (){
     
      
  //     return recupId ;
     
   
  //  }
  //   let recupId = document.getElementById('sous_total').value;
  //   console.log(recupId);
//     function getValue() {
//     // Sélectionner l'élément input et récupérer sa valeur
//     var input = document.getElementById("sous_total").value;
//     // Afficher la valeur
    
// }
  
// let fun = getValue() 
// console.log(fun);
//injection dans la page html 

  // const injectPrixTotal = document.querySelector('#totalPrice');
 // injectPrixTotal.innerHTML = `${formatPrice(prixTotal)}`; 










//**********buton pour vider entierement le panier  **********************/


  // Lorsque qu'on clique sur le bouton, le panier se vide ainsi que le localStorage
  const bouton_vide_panier = document.querySelector(".btn_panier_vide");
  bouton_vide_panier.addEventListener("click", (e) => {
    e.preventDefault;
   localStorage.clear();//La méthode clear() permet de retirer tous les éléments d'un ensemble Set.
   //localStorage.removeItem("key_produit");
     
    window.location.href='panier.html';//href a html 
  });

//  ********************************************* validation du formulaire et envoie en POST ********************************
// buton valider_panier pour le formulaire /

const btnValiderPanier = document.querySelector("#Valider_Panier_Js");

btnValiderPanier.addEventListener("click", (e) =>{
e.preventDefault();
  // recuperation des valeurs du formulaire pour le mettre dans le local storage 
  



const infoClients = {
  prenom: document.getElementById("id_prenom").value,
  nom: document.getElementById("id_nom").value,
  email: document.getElementById("id_email").value,
  adresse: document.getElementById("id_adresse").value,
  code_postale: document.getElementById("id_codePostale").value,
  ville: document.getElementById("id_ville").value
  

}
let local = localStorage.setItem('formulaire',JSON.stringify(infoClients)); 
 console.log(local);
 // Lors d'un clic, si l'un des champs n'est pas rempli 



})
  
  
  





