// concerne le panier 
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));// Pour stocker les produits selectionnees 
//La méthode getItem() de l'interface Storage renvoie la valeur associée à la clé passée en paramètre.

// console.log(produitEnregistreDansLocalStorage);


//...................................AFFICHAGE  DES PRODUITS DE PANIER.........................................//
//section de la classe ou je vais injecter le code HTML

const positionElementHtml = document.querySelector("#section-info-panier");// le container panier 


//si le panier est vide : afficher panier vide 
if (produitEnregistreDansLocalStorage === null) {
  const panier_vide = `
  <div class =' container_panier_vide'>
       <div> le panier est vide </div> 
   
   <div>`;
  positionElementHtml.innerHTML = panier_vide;
} else {
  //si le panier n'est pas vide :afficher les produits du localStorage 


  for (a = 0; a < produitEnregistreDansLocalStorage.length; a++) {  // construction de la structure du produit a chaque tour

    let calcul_sous_total = produitEnregistreDansLocalStorage[a].Quantite * produitEnregistreDansLocalStorage[a].price;

    const elementBody = document.querySelector("#tbody_produit");
    elementBody.innerHTML += ` 
  
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

  window.location.href = 'panier.html';//href a html 
});

//  ********************************************* validation du formulaire et envoie en POST ********************************
// buton valider_panier pour le formulaire /

const btnValiderPanier = document.querySelector("#Finaliser_commande_Js");

btnValiderPanier.addEventListener("click", (e) => {
  e.preventDefault();

  // recuperation des valeurs du formulaire de l'instance class formulaire  

  const formulaireValues = new formulaire();




  //..................................Regex Lors d'un clic, si l'un des champs n'est pas bien rempli .................... 

  const textElse = (value) => {

    return `${value} :chiffre et symbole ne sont pas autorisé \n ne pas depasser 20 caractere , minimum 3 `;

  };

  
  const regexPrenomNomVille = (value) => { //une expression de function =  function dans une variable    VALUE = lePrenom OU NOM OU VILLE   qui ne doivent pas comprendre de chiffre 

    return /^[A-Za-z]{3,20}$/.test(value);

  };
  
  const regexCodePostale = (value) => { //function dans une variable    

    return /^[0-9]{5}$/.test(value);//0 a 9 chiffres autorisé avec 5 comme quantité 95360

  };

  const regexEmail = (value) => { //function dans une variable    

    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);//0 a 9 chiffres autorisé avec 5 comme quantité 95360

  };
  
  const regexAdresse = (value) => { //function dans une variable    

    return /^[A-Za-z0-9À-ÿ\s]{5,50}$/.test(value);//\s pour autoriser les espaces  À-ÿ pour autoriser les accents

  };
  
  
  function prenomControle() {
    const lePrenom = formulaireValues.prenom; //appelle du nom de la page du formulaire pour le controle 

    if (regexPrenomNomVille(lePrenom)) { //if(/^[A-Za-z]{3,20}$/.test(lePrenom)){ 

      return true;
    } else {


      alert(textElse("prenom"));
      return false;
    }
  };

  function nomControle() {
    const leNom = formulaireValues.nom;

    if (regexPrenomNomVille(leNom)) { //if(/^[A-Za-z]{3,20}$/.test(lePrenom)){ 

      return true;
    } else {


      alert(textElse("nom"));
      return false;
    }
  };
  
  function villeControle() {
    const laVille = formulaireValues.ville;

    if (regexPrenomNomVille(laVille)) { //if(/^[A-Za-z]{3,20}$/.test(lePrenom)){ 

      return true;
    } else {


      alert(textElse("la ville n'est pas valide"));
      return false;
    }
  };
  
  function codePostaleControle() {
    const leCodePostale = formulaireValues.code_postale; 

    if (regexCodePostale(leCodePostale)) { //controle du code postale 

      return true;
    } else {


      alert("veuillez entrer un code postale valide");
      return false;
    }
  };
 
  function emailControle() {
    const leEmail = formulaireValues.email; 

    if (regexEmail(leEmail)) { 

      return true;
    } else {


      alert("le email n'est pas valide");
      return false;
    }
  };

  
  function adresseControle() {
    const adresse = formulaireValues.adresse; 

    if (regexAdresse(adresse)) { 

      return true;
    } else {


      alert("l'adresse n'est  valide");
      return false;
    }
  };
  


 
// .............................si toute les conditions sont reunies...............................  
 
  if (prenomControle() & nomControle() & villeControle()  & codePostaleControle() & emailControle() & adresseControle() ) {  

    //si true envoyer les donnés du formulaire dans le localStorage 
    localStorage.setItem('formulaire', JSON.stringify(formulaireValues));

  } else {

    //print(" veuillez bien remplire le formulaire");
  }



  /* /^  $/ debut et fin d'un regex et .test la methode  
   [A-Z]pour controler toutes les lettres en majuscule 
   [a-z]pour controler toutes les lettres en minuscule
    {3,20} le quatificateur un maximun de 20lettres  
    */


});


// ************************mettre le contenu du localStorage dans les champs du formulaire********

// recuperation des valeures du formulaire dans le localStorage ( celui au dessus n'est pas accessible)
// const dataLocalStorage = JSON.parse(localStorage.getItem('formulaireValues')); 

// mettre les valeures du localStorage dans les champs du formulaire
//let = document.getElementById("id_prenom").setAttribute('value',dataLocalStorage.prenom);

// *****************************Controle validation formulaire du champ nom et prénom avant envoi dans local storage ***************




