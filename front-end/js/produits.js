


// 1)récuperation de la chaine de requete (queryString) dans l'url 

const queryString_url_id = window.location.search;
//console.log(queryString_url_id);

// //méthode 1 avec slice qui modifi un element - pour extraire juste l'id en enlevant le ?  
// const idProduitSelectionne = queryString_url_id.slice(1);// exemple ?55888851 donc le numero 1= ? sera supprimé;  
// console.log(idProduitSelectionne);

// méthode 2 pour extraire l'id 

const urlSearchParams =new URLSearchParams(queryString_url_id);
//console.log(urlSearchParams);

const idProduitSelectionne = urlSearchParams.get("name_id");  //name_id la key du id du produits  
//console.log(idProduitSelectionne);

//2)recuperation de l'objet par le biais de sa key id
//méthode 1 avec fetch https://jsonplaceholder.typicode.com/1 = 1 par rapport a la key d'element  donc on remplace par id  attribué a l'element  

//let reponse =  fetch (`http://localhost:3000/api/teddies/${leId}`);
 const newUrl =`http://localhost:3000/api/teddies/${idProduitSelectionne}`;

 fetch (newUrl)
 .then((response) => response.json())
 .then((data) => { 
   
   addProduit(data); 

// fonction pour  la récupération  du produit séléctionné 

function addProduit(data) { // a partir de  la class product  

// inserer les informations du produit séléctionné 

const imageProduitSelectionne = document.getElementById("imageProuduit-js");
imageProduitSelectionne.innerHTML += `
<img src="${data.imageUrl}" alt="${data.name}">`; 
const nameProduitSelectionne = document.getElementById("NameProuduit-js");
nameProduitSelectionne.innerHTML += `
<h1>${data.name}</h1>`; 
const descriptionProduitSelectionne = document.getElementById("descProuduit-js");
descriptionProduitSelectionne.innerHTML += `
 <p>${data.description}</p> <span > ${formatPrice(data.price)}</span> <!--${(data.price)/100} €-->
`;// utilisation de la function formattPrice avec Product.price comme prarametre 

const colorProduitSelectionne = document.getElementById("colorProuduit-js");
for (let i = 0; i < data.colors.length; i++) {

let option = document.createElement("option");
option.innerText = data.colors[i];
colorProduitSelectionne.appendChild(option);
   }
//selection du button Ajouter l'article au panier 
   const btn_envoyerPanier = document.querySelector("#btn_envoyerPanier"); // doit etre dans la function 
btn_envoyerPanier.addEventListener("click",(event) =>{
event.preventDefault();// pour annuller l'effet par defaut    



//recuperation des valeurs du formulaire 
// 1)Selection de l'id du formulaire quantité
const idQuantite = document.querySelector("#quantiteBear");
const choixQuantité = idQuantite.value;//value pour la quantitée selectionnée  

// 2)Selection de l'id du formulaire Couleur
const idCouleur = document.querySelector("#colorProuduit-js");//.value
//mettre le choix de l'utisateur dans une variable 
const choixCouleur = idCouleur.value;// value pour la couleur selectionnée  

// .......................gestion du panier AddToCart..................... 
//-- recuperation des données selectionnées par l'utilisateur  et envoi du panier 
//selection du button Ajouter l'article au panier 
let infoProduitSelectionne = {
   id_ProduitSelectionne  :idProduitSelectionne,
   nameProduitSelectionne : data.name,
   Quantite :choixQuantité,
   couleur :choixCouleur ,
   price :`${formatPrice(data.price)}`,
   image : `
   <img src="${data.imageUrl}" alt="${data.name}">`
}

//console.log( infoProduitSelectionne);

// .......................localStorage..................................
// .......................stocker la récupération des valeurs dans le local storage 
// .....déclaration de la variable " panier " dans laquelle on met les key et les vluues qui sont dans le locla storage 

let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("key_produit"));

//--Json.parse c'est pour convertir les données au format json qui sont dans le local storage en objet javascript 

//console.log(panier);

//Fonction ajouter un produit sélectionné dans le localStorage 
const ajoutProduitLocalStorage = () => {
   //ajout dans le tableau de l'objet avec les values choisi par l'utilisateur  
   produitEnregistreDansLocalStorage.push(infoProduitSelectionne);//push pour mettre dans un tableau 
   //la transformation en forma json et l'envoyer dans la la key_produit du localStorage 
   localStorage.setItem("key_produit", JSON.stringify(produitEnregistreDansLocalStorage));//storage.setItem(nomClé, valeurClé); permet d'ajouter à l'emplacement de stockage 
 //JSON.stringify() convertit une valeur JavaScript en chaîne JSON
  
 }
 
 // function popup 
 function popupConfirmation (){
 
   if(window.confirm(`${infoProduitSelectionne.nameProduitSelectionne} a été ajouté au panier
 Consultez le panier ok ou revenir à la laccueil ANNULER ` )){     // window.confirm Affiche un dialogue modal avec un message et deux boutons, OK et Annuler.
   window.location.href ="../html/panier.html";                          /*L'objet location contient des informations sur l'URL actuelle. L'objet location fait partie de l'objet window et est accessible via la propriété window. location.  
   et fournit des methodes pour modifier cette url qui peut etre utilisée pour charger une page */
   }else{
   window.location.href ="../index.html"; 
   }
 
 }
 
 
 //s'il y a deja des produits d'enregistré dans le local storage 
// la creation de la clé "key_produit" fait que if ==true donc s'execute 
if(produitEnregistreDansLocalStorage){
   ajoutProduitLocalStorage();
  
 
   popupConfirmation ();
}
//s'il n'y a deja des produits d'enregistré dans le local storage 
else{
   produitEnregistreDansLocalStorage = []; // faire un tableau  
 ajoutProduitLocalStorage();
 
 popupConfirmation ();
} 
    });
   
  }
});










