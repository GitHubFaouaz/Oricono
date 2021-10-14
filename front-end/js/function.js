

// Formatage du prix pour l'afficher en euros
function formatPrice(price) {
    let priceFormatted = price / 100;
    return priceFormatted + "€";
  }

























// formulair
function test () {
  const infoClients = {
    prenom: document.getElementById("id_prenom").value,
    nom: document.getElementById("id_nom").value,
    email: document.getElementById("id_email").value,
    adresse: document.getElementById("id_adresse").value,
    code_postale: document.getElementById("id_codePostale").value,
    ville: document.getElementById("id_ville").value
    
  
  }
};







//Fonction ajouter un produit sélectionné dans le localStorage 
/*const ajoutProduitLocalStorage = () => {
  panier.push(infoProduitSelectionne);//push pour mettre dans un tableau 
localStorage.setItem("key_produit", JSON.stringify(panier));//storage.setItem(nomClé, valeurClé); permet d'ajouter à l'emplacement de stockage 
//JSON.stringify() convertit une valeur JavaScript en chaîne JSON
 
}

// function popup 
/*function popupConfirmation (){

  if(window.confirm(`${infoProduitSelectionne.nameProduitSelectionne} a été ajouté au panier
Consultez le panier ok ou revenir à la laccueil ANNULER ` )){     // window.confirm Affiche un dialogue modal avec un message et deux boutons, OK et Annuler.
  window.location.href ="../html/panier.html";                          
  //L'objet location contient des informations sur l'URL actuelle. L'objet location fait partie de l'objet window et est accessible via la propriété window. location.  
  //et fournit des methodes pour modifier cette url qui peut etre utilisée pour charger une page 
  }else{
  window.location.href ="../index.html"; 
  }

}*/

