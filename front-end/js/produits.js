const queryString_url_id = window.location.search;
const urlSearchParams =new URLSearchParams(queryString_url_id);
const idProduitSelectionne = urlSearchParams.get("name_id");  


// recuperation de l'objet par le biais de sa key id 
fetch (`http://localhost:3000/api/teddies/${idProduitSelectionne}`)
 .then((response) => response.json())
 .then((data) => { 
   let produitInfo =data ;
   addProduit(produitInfo);
   
  
   const btn_envoyerPanier = document.querySelector("#btn_envoyerPanier"); // doit etre dans la function 
   btn_envoyerPanier.addEventListener("click",(event) =>{
   event.preventDefault();    
   
   // recuperation des valeurs Quantités et Couleurs du formulaire 
   const choixQuantité = document.querySelector("#quantiteBear");
   const choixCouleur = document.querySelector("#colorProuduit-js");
   
   //selection de l'article pour le  panier 
   
   let infoProduitSelectionne = {
     id: idProduitSelectionne,
     name: produitInfo.name,
     desc : produitInfo.description,
     price : produitInfo.price,
     color : choixCouleur.value,
     Quantite: choixQuantité.value,
     imageUrl : produitInfo.imageUrl
   
   }
   
   // .......................localStorage..................................
   let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));
   //s'il y a deja des produits d'enregistré dans le local storage 
   if(produitEnregistreDansLocalStorage){
     
     ajoutProduitLocalStorage(produitEnregistreDansLocalStorage,infoProduitSelectionne);
     
     pupConfirm (infoProduitSelectionne.name);
     
     
    //  popupConfirmation (infoProduitSelectionne.name);
   }
   //s'il n'y a deja des produits d'enregistré dans le local storage 
   else{
     produitEnregistreDansLocalStorage = []; 
     ajoutProduitLocalStorage(produitEnregistreDansLocalStorage,infoProduitSelectionne );
    
   
      //  popupConfirmation (infoProduitSelectionne.name);
   } 
   
   })
 })
 
  
  
  
  
  


 
 
  
  



  







  











