
/*const searchParams = new URLSearchParams(location.search);
// let params = new URL(document.location).searchParams; 
let newId = searchParams.get("_id");

//modification de  l'API 
const newUrl = `http://localhost:3000/api/teddies/${newId}`;
fetch (newUrl)
             .then((response) => response.json())
             .then((data) => { 
               
               addProduit(data); 

// fonction pour  la récupération  du produit séléctionné 

function addProduit(Product) { // a partir de  la class product  

 // inserer les informations du produit séléctionné 
 
 const imageProduitSelectionne = document.getElementById("imageProuduit-js");
 imageProduitSelectionne.innerHTML += `
 <img src="${Product.imageUrl}" alt="${Product.name}">

 `; 
 const NameProduitSelectionne = document.getElementById("NameProuduit-js");
 NameProduitSelectionne.innerHTML += `
 <h1>${Product.name}</h1>
 `; 
 const descriptionProduitSelectionne = document.getElementById("descProuduit-js");
 descriptionProduitSelectionne.innerHTML += `
 <p>${Product.description}</p> <span > ${Product.price}</span>
 `; 
 const descriptionProduitSelectionne = document.getElementById("colorProuduit-js");
 descriptionProduitSelectionne.innerHTML += `
 <p>${Product.description}</p> <span > ${Product.price}</span>
 `; 
 
 
  }
});
*/


// 1)récuperation de la chaine de requete (queryString) dans l'url 

const queryString_url_id = window.location.search;
//console.log(queryString_url_id);

// //méthode 1 avec slice qui modifi un element - pour extraire juste l'id en enlevant le ?  
// const leId = queryString_url_id.slice(1);// exemple ?55888851 donc le numero 1= ? sera supprimé;  
// console.log(leId);

// méthode 2 pour extraire l'id 

const urlSearchParams =new URLSearchParams(queryString_url_id);
//console.log(urlSearchParams);

const leId = urlSearchParams.get("name_id");  //name_id la key du id du produits  
//console.log(leId);

//2)recuperation de l'objet par le biais de sa key id
//méthode 1 avec fetch https://jsonplaceholder.typicode.com/1 = 1 par rapport a la key d'element  donc on remplace par id  attribué a l'element  

//let reponse =  fetch (`http://localhost:3000/api/teddies/${leId}`);
 const newUrl =`http://localhost:3000/api/teddies/${leId}`;

 fetch (newUrl)
 .then((response) => response.json())
 .then((data) => { 
   
   addProduit(data); 

// fonction pour  la récupération  du produit séléctionné 

function addProduit(Product) { // a partir de  la class product  

// inserer les informations du produit séléctionné 

const imageProduitSelectionne = document.getElementById("imageProuduit-js");
imageProduitSelectionne.innerHTML += `
<img src="${Product.imageUrl}" alt="${Product.name}">

`; 
const NameProduitSelectionne = document.getElementById("NameProuduit-js");
NameProduitSelectionne.innerHTML += `
<h1>${Product.name}</h1>
`; 
const descriptionProduitSelectionne = document.getElementById("descProuduit-js");
descriptionProduitSelectionne.innerHTML += `
<p>${Product.description}</p> <span > ${Product.price}</span>
`; 



}
});







