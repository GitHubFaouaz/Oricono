

// ****************************index***************************
// Formatage du prix pour l'afficher en euros
function formatPrice(price) {
  let priceFormatted = price / 100;
  return priceFormatted + "€";
}
//fonction des données de chaque produit pour la page index ( nom , prix  )
function addTeddies(produit){

// recuperation des éléments dans le html   
 const cart = document.getElementById('liste'); 
 
  cart.innerHTML  += `

  <article class= 'col-xs-12 col-sm-12 col-md-4 col-lg-4'   >
  <a href="html/product.html?name_id=${produit._id}"><img src="${produit.imageUrl}" alt="${produit.name}"></a> 
  <div class="div-details-photo">
     <p class="nom-prix"><span>${produit.name}</span> <span>${formatPrice(produit.price)}</span></p>  
    
  </div>
</article>`;
}


// ***************************produits************************

//fonction description des produit pour la page produit
function addProduit(produitInfo) { //  
  // inserer les informations du produit séléctionné 
    const imageProduitSelectionne = document.getElementById("imageProuduit-js");
 imageProduitSelectionne.innerHTML += `
 <img src="${produitInfo.imageUrl}" alt="${produitInfo.name}">`; 
 
 const nameProduitSelectionne = document.getElementById("NameProuduit-js");
 nameProduitSelectionne.innerHTML += `
 <h1>${produitInfo.name}</h1>`; 
 
 const descriptionProduitSelectionne = document.getElementById("descProuduit-js");
 descriptionProduitSelectionne.innerHTML += `
  <p>${produitInfo.description}</p> <span > ${formatPrice(produitInfo.price)}</span>
 `;
 
 const colorProduitSelectionne = document.getElementById("colorProuduit-js");
 for (let i = 0; i < produitInfo.colors.length; i++) {
 
 let option = document.createElement("option");
 option.innerText = produitInfo.colors[i];
 colorProduitSelectionne.appendChild(option);
   }
 } 
 

//Fonction ajouter le produit sélectionné dans le localStorage 
function ajoutProduitLocalStorage(infoProduitSelectionne) {
  let productsJson = localStorage.getItem("key_produit");
  let products = [];
  if(productsJson){
    products = JSON.parse(productsJson);
  }
  products.push(infoProduitSelectionne);
  localStorage.setItem("key_produit", JSON.stringify(products));


}
 // function popup 
function pupConfirm (nom){

  document.querySelector(".modal").animate([
   {  transform : 'translateY(30px)',visibility : "visible" }
       
 ],{
  duration: 300,
  fill:"both",
 })
 const modal_body =document.querySelector(".modal-body");
 modal_body.innerHTML +=` <p><span>${nom}</span> a bien été ajouté au panier</p>`  
 
}
// **********************panier**************************

// affiche les produits du localStorage dans le panier  
function produitPanier(product) {

  const elementBody = document.querySelector("#tbody_produit");
  elementBody.innerHTML += ` 

<tr  >
  <td class="col-2"><img src="${product.imageUrl}"></td>
  <td class="col-2">${product.name}</td>
  <td class="col-2">${product.color}</td>
  <td class="col-2">${product.Quantite}</td>
  <td class="col-2">${formatPrice(product.price)}</td>
  <td class="col-2 " class='sous_total'>${formatPrice(product.Quantite * product.price)}</td>
</tr>

`;
    
 
}

function PrixTotal (array,prix,quantite){

    
  array.push(prix * quantite);


 }
//création class pour la fabriquer l'objet avec les valeur du formulaire
class formulaire {

  constructor(){ // pas besoin de paremetre puique les valeurs sont directement inserées 
 
   this.prenom = document.getElementById("id_prenom").value,
   this.nom = document.getElementById("id_nom").value,
   this.email = document.getElementById("id_email").value,
   this.adresse = document.getElementById("id_adresse").value,
   this.ville = document.getElementById("id_ville").value
     }
}
// afficher panier vide 
function panierVideHtml() {
  // je fais appelle au container panier vide
  document.querySelector("#section-info-panier").innerHTML = `
  
  <div class =' container_panier_vide'>
       <p> votre panier est vide </p> 
      <a href="../index.html" <button type="button" class="btn btn-secondary  col-2 mx-5"> Page d'acceuil</button></a>
   <div>`;
   
   // les boutons valider et vider  le panier sont invisibles 
   document.querySelector('.valider_panier').style.visibility= "hidden";
   document.querySelector('.btn_panier_vide').style.visibility= "hidden";  
 }
//vider le panier
function viderPanier() {

 
  localStorage.clear();
  location.reload();
}
 // valider le panier 
 function validerPanier() {
  document.querySelector('#section-commande').animate([
   
     {  transform : 'translateY(5px)',visibility : "visible" }
         
 ],{
   duration: 300,
   fill:"both",
  })
 
 }
// *********************confirmation************************

// function qui a affiche le recaputatif de la commande
function afficherCommande(numeroRef,totalmontant){

  // afficher mes informations 
  const informations = document.getElementById("recap_commande");
  informations.innerHTML += `
            <div id="confirm_commande">
            <h2>Votre commande été prise en compte</h2>
            <p class="">Le montant total est de : ${formatPrice(totalmontant)}</p>            
            <p class="">Votre numéro de commande est : ${numeroRef} </p>
            </div>
      
      `;
  }


  // function ajoutProduitLocalStorage(infoProduitSelectionne) {
  
  //   let productsJson = localStorage.getItem("key_produit");
  //   let products = [];
  //   if(infoProduitSelectionne.id == infoProduitSelectionne.id ){
  //     infoProduitSelectionne.Quantite++
  //     localStorage.setItem("key_produit", JSON.stringify(products));
    
  //   }else{
  //     products = JSON.parse(productsJson);
  //   }
  //   products.push(infoProduitSelectionne);
    
  
  
  // } 
 






















