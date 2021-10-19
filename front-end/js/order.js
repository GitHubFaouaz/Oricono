const order = JSON.parse(localStorage.getItem("aEnvoyer")) || [];
console.log(order);

// afficher mes informations 

const informations =document.getElementById("recap_commande");
informations.innerHTML  += `
<div id="confirm_commande">
<h2>Votre commande été prise en compte</h2>
<p class="">Le montant total est de </p>            
<p class="">Votre numéro de commande est :</p>
</div>

` ;