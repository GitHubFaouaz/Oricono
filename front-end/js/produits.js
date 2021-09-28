//Mise à jour du basketPreview
basketPreview();

let params = new URL(document.location).searchParams;
let newId = params.get("_id");

fetch (newId).then((response) => response.json()
             .then((data) => addProduitSelectionne(data) ) 
)
// fonction pour  la récupération  du produit séléctionné 

function addProduitSelectionne(product) {

 // inserer les informations du produit séléctionné 
 
 const imageProduitSelectionne = document.getElementById("imageProuduit");
 imageProduitSelectionne.innerHTML += `
 <img src="${product.imageUrl}" alt="${product.name}">

 `; 
 const NameProduitSelectionne = document.getElementById("NameProuduit");
 NameProduitSelectionne.innerHTML += `
 <h1>${product.name}</h1>
 `; 
 const descriptionProduitSelectionne = document.getElementById("descProuduit");
 descriptionProduitSelectionne.innerHTML += `
 <p>${product.description}</p> <span > ${product.price}</span>
 `; 
 const descriptionProduitSelectionne = document.getElementById("descProuduit");
 descriptionProduitSelectionne.innerHTML += `
 <p>${product.description}</p> <span > ${product.price}</span>
 `; 
 









}
