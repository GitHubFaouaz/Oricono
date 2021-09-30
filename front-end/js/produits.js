
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
//  for( color of data ){
    
//      const color = document.getElementById("colorProuduit-js"); 
     
//       color.innerHTML  += `
//    <select>
//       <option value="${color._id}" >${color._id}</option>
      
    
//    </select>
//   `  
    
//        };  
 
  }
});*/
async function getTeddy() {
   let response = await fetch( 'http://localhost:300/api ' + "/teddies/" + id, {
     method: "GET"
   });
   let json = await response.json();
   return json;
}

