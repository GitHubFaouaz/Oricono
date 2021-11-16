//récupération de la chaine de requête dans l'url  pour afficher le bon produit 
const queryString_url_id = window.location.search;
//récupération  des arguments décodés de la requête GET contenu dans l'URL
const urlSearchParams = new URLSearchParams(queryString_url_id);
const idProduitSelectionne = urlSearchParams.get("name_id");

// recuperation de l'objet par le biais de sa key id 
fetch(`http://localhost:3000/api/teddies/${idProduitSelectionne}`)
  .then((response) => response.json())
  .then((data) => {
    let produitInfo = data;
  // fonction pour la création du produit  
    addProduit(produitInfo);


    const btn_envoyerPanier = document.querySelector("#btn_envoyerPanier"); // doit etre dans la function 
    btn_envoyerPanier.addEventListener("click", (event) => {
      event.preventDefault();

      // recuperation des valeurs Quantités et Couleurs du formulaire 
      const choixQuantité = document.querySelector("#quantiteBear");
      const choixCouleur = document.querySelector("#colorProuduit-js");

      //selection de l'article pour le  panier 

      let infoProduitSelectionne = {
        id: idProduitSelectionne,
        name: produitInfo.name,
        desc: produitInfo.description,
        price: produitInfo.price,
        color: choixCouleur.value,
        Quantite: choixQuantité.value,
        imageUrl: produitInfo.imageUrl

      }

      // .......................localStorage..................................
      ajoutProduitLocalStorage(infoProduitSelectionne);
      pupConfirm(infoProduitSelectionne.name);

    })
  })



































