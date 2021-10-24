let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));
//fonction des données de chaque produit pour la page index ( nom , prix  )
function addTeddies(produit){

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
function formatPrice(price) {
    let priceFormatted = price / 100;
    return priceFormatted + "€";
  }

  // création de la class produit
class Product {
  constructor(id, name, description, price, quantity, imgurl) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = +price;
      this.quantity = +quantity;
      this.imgurl = imgurl;
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







































