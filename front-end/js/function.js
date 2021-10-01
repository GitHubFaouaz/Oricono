// concerne le panier 
let panier = JSON.parse(localStorage.getItem("product"));// Pour stocker les produits selectionnees
// localStorage.removeItem('casquette');

// Formatage du prix pour l'afficher en euros
function formatPrice(price) {
    let priceFormatted = price / 100;
    return priceFormatted + " €";
  }

  // création de la class produit
class Product {
  constructor(id, name, description, price, quantity, imgurl,color) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = +price;
      this.quantity = +quantity;
      this.imgurl = imgurl;
      this.colors = color;
  }
}
