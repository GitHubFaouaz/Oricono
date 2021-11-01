//...................................AFFICHAGE  DES PRODUITS DE PANIER.........................................//
let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));
//section de la classe ou je vais injecter le code HTML(le container panier ) 


let arrayOfPrice = [];
//si le panier est vide : afficher panier vide 
if (produitEnregistreDansLocalStorage === null) {
  
   panierVideHtml(); 
  } else {

  //si le panier n'est pas vide :afficher les produits du localStorage 
  for (af of produitEnregistreDansLocalStorage) {
    
    produitPanier(af);
  }
  //**********************************Le montant total  du panier **********************/

// On push chaque prix dans un tableau
for (let sous_total of produitEnregistreDansLocalStorage) {

  PrixTotal(arrayOfPrice, sous_total.price, sous_total.Quantite);
}

// Additionner les valeurs du tableau pour avoir le prix total
const reducer = (acc, currentVal) => acc + currentVal;
arrayOfPrice = arrayOfPrice.reduce(reducer);
let prixTotal = document.getElementById('totalPrice');
prixTotal.innerHTML += formatPrice(arrayOfPrice);
}



/**********bouton pour vider ou valider le panier  **********************/
// Lorsque qu'on clique sur le bouton, le panier se vide ainsi que le localStorage
const bouton_vider_panier = document.querySelector(".btn_panier_vide");
bouton_vider_panier.addEventListener("click", (e) => {
  e.preventDefault;
  viderPanier();

});

const bouton_valider_panier = document.querySelector(".valider_panier");
bouton_valider_panier.addEventListener("click", (e) => {
  e.preventDefault;
  validerPanier();

});

//  ********************************************* validation du formulaire et envoie en POST ********************************
// bouton valider_panier pour le formulaire /
const btnValiderPanier = document.querySelector("#Finaliser_commande_Js");

btnValiderPanier.addEventListener("click", (e) => {
  e.preventDefault();

  // recuperation des valeurs du formulaire de l'instance class formulaire  
  const formulaireValues = new formulaire();

  //....................Regex Lors d'un clic, si l'un des champs n'est pas bien rempli .................... 

  const regexPrenomNomVille = /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexAdresse = /^[A-Za-z0-9À-ÿ\s]{5,50}$/;

  // ......................si toute les conditions sont reunies...............................  

  if (
    (regexPrenomNomVille.test(formulaireValues.prenom)) &
    (regexPrenomNomVille.test(formulaireValues.nom)) &
    (regexPrenomNomVille.test(formulaireValues.ville)) &
    (regexEmail.test(formulaireValues.email)) &
    (regexAdresse.test(formulaireValues.adresse))

  ) {


    /* Si le formulaire est valide, le tableau productsId contiendra un tableau d'objet
    qui sont les produits acheté et order contiendra ce tableau ainsi que l'objet qui contient les infos de l'acheteur */
    let productsId = [];
    for (let product of produitEnregistreDansLocalStorage) {

      productsId.push(product.id)

    }

    const order = {
      contact: {
        firstName: formulaireValues.nom,
        lastName: formulaireValues.prenom,
        city: formulaireValues.ville,
        address: formulaireValues.adresse,
        email: formulaireValues.email,
      },
      products: productsId,
    };
  
 

    // ******************************************// on envoie les donnés en POST ********************       
  
    const options = {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
    };

    // Envoie de la requête avec l'en-tête. On changera de page avec un localStorage qui ne contiendra plus que l'order id et le prix.
    fetch("http://localhost:3000/api/teddies/order", options)
      .then((response) => response.json())
      .then((data) => {

        localStorage.clear();
        localStorage.setItem("order", data.orderId);
        localStorage.setItem("total", arrayOfPrice);
        document.location.href = "../html/confirmation.html";

      })
      .catch((err) => {
        alert("Il y a eu une erreur : " + err);
      });

  } else {

    alert("veuillez compléter le formulaire");
  }
});



























