let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));
//fonction des données de chaque produit pour la page index ( nom , prix  )
function formatPrice(price) {
  let priceFormatted = price / 100;
  return priceFormatted + "€";
}

function addTeddies(produit){

// recuperation des éléments dans le html   
 const cart = document.getElementById('liste'); 
 
  cart.innerHTML  += `
<article >
  <a href="html/product.html?name_id=${produit._id}"><img src="${produit.imageUrl}" alt="${produit.name}"></a> 
  <div class="div-details-photo">
     <p class="nom-prix"><span>${produit.name}</span> <span>${formatPrice(produit.price)}</span></p>  
    
  </div>
</article>`;
}

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
 // Formatage du prix pour l'afficher en euros

//Fonction ajouter le produit sélectionné dans le localStorage 
function ajoutProduitLocalStorage (ajoutLocalStorage) {
    produitEnregistreDansLocalStorage.push(ajoutLocalStorage);
    localStorage.setItem("key_produit", JSON.stringify(produitEnregistreDansLocalStorage));
  
   
}
 // function popup 
 function popupConfirmation (nom){
  
  if(window.confirm(`${nom} a été ajouté au panier
Consultez le panier ok ou revenir à la laccueil ANNULER ` )){     // window.confirm Affiche un dialogue modal avec un message et deux boutons, OK et Annuler.
 window.location.href ="../html/panier.html";                          
 
  }else{
 window.location.href ="../index.html"; 
 }

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

// affiche les produits du localStorage dans le panier  
function produitPanier(product) {

  const elementBody = document.querySelector("#tbody_produit");
  elementBody.innerHTML += ` 

<tr>
  <td class="col-2"><img src="${product.imageUrl}"></td>
  <td class="col-2">${product.name}</td>
  <td class="col-2">${product.color}</td>
  <td class="col-2">${product.Quantite}</td>
  <td class="col-2">${formatPrice(product.price)}</td>
  <td class="col-2 " class='sous_total'>${formatPrice(product.Quantite * product.price)}</td>
</tr>

`;
    
 
}

function viderPanier() {

  localStorage.clear();
  location.reload();
}


// **********************panier**************************
// function qui a affiche le recaputatif de la commande
function afficherCommande(numeroRef,totalmontant){

  // afficher mes informations 
  const informations = document.getElementById("recap_commande");
  informations.innerHTML += `
            <div id="confirm_commande">
            <h2>Votre commande été prise en compte</h2>
            <p class="">Le montant total est de : ${totalmontant} </p>            
            <p class="">Votre numéro de commande est : ${numeroRef} </p>
            </div>
      
      `;
  }



































