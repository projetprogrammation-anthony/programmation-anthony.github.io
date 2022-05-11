//l'utilisation d'un tableau js pour l'information
var information = [19.99, 9.99, 49.99, 29.99, 999.99]
//des variables extérieur car je vais les utilisés à l'extérieur de la fonction
var amount = 0
var total1 = 0
//une fonction pour chaque produit pour l'ajouter au panier
function addcart1(){
  amount = amount + parseInt(document.getElementById("product1").value)
  var divOne = document.getElementById("amountOne");
  total1 = amount*information[0]
  var message1 = "<h6>Vous avez acheté " + amount + " de sac de nourriture. Le prix est " + total1 + ".</h6>"
  divOne.innerHTML = message1;
  var divPanier1 = document.getElementById("panier1");
  var messagePanier1 = "Vous avez " + amount + " de sac de nourriture. Le prix est " + total1 + ".";
  divPanier1.innerHTML = messagePanier1;
}
var amount2 = 0
var total2 = 0
function addcart2(){
  amount2 = amount2 + parseInt(document.getElementById("product2").value);
  var divOne = document.getElementById("amountTwo");
  total2 = amount2*information[1]
  var message2 = "<h6>Vous avez acheté " + amount2 + " de souris. Le prix est " + total2 + ".</h6>"
  divOne.innerHTML = message2;
  var divPanier2 = document.getElementById("panier2");
  var messagePanier2 = "Vous avez " + amount2 + " de souris. Le prix est " + total2 + ".";
  divPanier2.innerHTML = messagePanier2;
}
var amount3 = 0
var total3 = 0
function addcart3(){
  amount3 = amount3 + parseInt(document.getElementById("product3").value);
  var divOne = document.getElementById("amountThree");
  total3 = amount3*information[2]
  var message3 = "<h6>Vous avez acheté " + amount3 + " de tour. Le prix est " + total3 + ".</h6>"
  divOne.innerHTML = message3;
  var divPanier3 = document.getElementById("panier3");
  var messagePanier3 = "Vous avez " + amount3 + " de tour. Le prix est " + total3 + ".";
  divPanier3.innerHTML = messagePanier3;

}
var amount4 = 0
var total4 = 0
function addcart4(){
  amount4 = amount4 + parseInt(document.getElementById("product4").value);
  var divOne = document.getElementById("amountFour");
  total4 = amount4*information[3]
  var message4 = "<h6>Vous avez acheté " + amount4 + " de boîte litière. Le prix est " + total4 + ".</h6>"
  divOne.innerHTML = message4;
  var divPanier4 = document.getElementById("panier4");
  var messagePanier4 = "Vous avez " + amount4 + " de boîte litière. Le prix est " + total4 + ".";
  divPanier4.innerHTML = messagePanier4;
}
var amount5 = 0
var total5 = 0
  function addcart5(){
  amount5 = amount5 + parseInt(document.getElementById("product5").value);
  var divOne = document.getElementById("amountFive");
  total5 = amount5*information[4]
  var message5 = "<h6>Vous avez acheté " + amount5 + " de d̵̢̮̲̅͜ō̸̢͇͍̠͆ĺ̵̛͓̣̲l̵̬̘̆̿̽͜. Le prix est " + total5 + ".</h6>"
  divOne.innerHTML = message5;
  var divPanier5 = document.getElementById("panier5");
  var messagePanier5 = "Vous avez " + amount5 + " de d̵̢̮̲̅͜ō̸̢͇͍̠͆ĺ̵̛͓̣̲l̵̬̘̆̿̽͜. Le prix est " + total5 + ".";
  divPanier5.innerHTML = messagePanier5;
}

//variables à l'extérieur car je vais les utilisé plus tard
var totalCost = 0
var shipping = 0
var tax = 0

//une fonction pour calculer le total.
function total(){
  var answer1 = document.getElementsByName("tax")
  if(answer1[0].checked){
    tax = 1.13
  }else{
    tax = 1.15
  }
  var answer2 = document.getElementsByName("ship")
  if(answer2[0].checked){
    shipping = 15
  }else{
    shipping = 40
  }
  totalCost = total1 + total2 + total3 + total4 + total5
  totalCost = totalCost + shipping
  totalCost = parseFloat(totalCost*tax)
  var divCost = document.getElementById("panierDiv")
  divCost.innerHTML = "Le total est " + totalCost.toFixed(2) + "$"
  var paymentMsg = document.getElementById("paymentDiv")
  paymentMsg.innerHTML = "<input type=\"number\" id=\"payment\" min=" + totalCost.toFixed(2) + ">"
}

//une fonction pour le paiement. ça vérifie si le monnaie est assez pour payer le total
function payment(){
  var onlyTax = tax-1
  var taxAmount = total1 + total2 + total3 + total4 + total5 + shipping
  taxAmount = taxAmount*onlyTax
  var amountPaid = parseFloat(document.getElementById("payment").value)
  if (amountPaid<totalCost){
     var msg = document.getElementById("message")
    msg.innerHTML = "<h5>Vous n'avez pas payer assez d'argent.</h5>"
  }else{
    var change = amountPaid.toFixed(2)-totalCost
    var msg = document.getElementById("message")
    if(change==0){
    msg.innerHTML = "<h5>REÇU<br>1. Nourriture x " + amount + "---" + total1 + "<br> 2. Souris x " + amount2 + "---" + total2 + "<br>3. Tour x " + amount3 + "---" + total3 + "<br> 4. Litière x " + amount4 + "---" + total4 + "<br> 5. d̵̢̮̲̅͜ō̸̢͇͍̠͆ĺ̵̛͓̣̲l̵̬̘̆̿̽͜  x " + amount5 + "---" + total5 + "<br> Livraison: " + shipping.toFixed(2) + "$<br> Tax: " + taxAmount.toFixed(2) + "$ <br>TOTAL: " + totalCost.toFixed(2) + "$<br> Vous avez payer:" + amountPaid.toFixed(2) + "$<br> Vous n'avez aucune monnaie à rendre. Merci pour votre achat.</h5> "
    }else{
      var counter100 = change%100
      counter100 = change - counter100
      change = change - counter100
      counter100 = counter100/100
      var counter50 = change%50
      counter50 = change - counter50
      change = change - counter50
      counter50 = counter50/50
      var counter20 = change%20
      counter20 = change - counter20
      change = change - counter20
      counter20 = counter20/20
      var counter10 = change%10
      counter10 = change - counter10
      change = change - counter10
      counter5 = counter5/5
      var counter5 = change%5
      counter5 = change - counter5
      change = change - counter5
      counter5 = counter5/5
      var counter1 = change%1
      counter1 = change - counter1
      change = change - counter1
      counter1 = counter1/1
      var counter025 = change%0.25
      counter025 = change - counter025
      change = change - counter025
      counter025 = counter025/0.25
      var counter010 = change%0.1
      counter010 = change - counter010
      change = change - counter010
      counter010 = counter010/0.1
      var counter005 = change%0.05
      counter005 = change - counter005
      change = change - counter005
      counter005 = counter005/0.05
      if(change == 0){
      msg.innerHTML = "<h5>REÇU<br>1. Nourriture x " + amount + "---" + total1 + "<br> 2. Souris x " + amount2 + "---" + total2 + "<br>3. Tour x " + amount3 + "---" + total3 + "<br> 4. Litière x " + amount4 + "---" + total4 + "<br> 5. d̵̢̮̲̅͜ō̸̢͇͍̠͆ĺ̵̛͓̣̲l̵̬̘̆̿̽͜  x " + amount5 + "---" + total5 + "<br> Livraison: " + shipping.toFixed(2) + "$<br> Tax: " + taxAmount.toFixed(2) + "$ <br>TOTAL: " + totalCost.toFixed(2) + "$<br> Vous avez payer:" + amountPaid.toFixed(2) + "$<br> Voici votre monnaie à rendre:<br> 100$x" + counter100 + "<br> 50$x" + counter50 + "<br> 20$x" + counter20 + "<br> 10$x" + counter10 + "<br> 5$x" + counter5 + "<br> 1$x" + counter1 + "<br> 0.25$x" + counter025 + "<br> 0.10$x" + counter010 + "<br> 0.05$x" + counter005 +"<br> Nous n'avons plus de pièces de 1 sous alors nous vous avons remis un 5 cent de plus. Merci pour votre achat. </h5>"
      }else{
        counter005++
        msg.innerHTML = "<h5>REÇU<br>1. Nourriture x " + amount + "---" + total1 + "<br> 2. Souris x " + amount2 + "---" + total2 + "<br>3. Tour x " + amount3 + "---" + total3 + "<br> 4. Litière x " + amount4 + "---" + total4 + "<br> 5. d̵̢̮̲̅͜ō̸̢͇͍̠͆ĺ̵̛͓̣̲l̵̬̘̆̿̽͜  x " + amount5 + "---" + total5 + "<br> Livraison: " + shipping.toFixed(2) + "$<br> Tax: " + taxAmount.toFixed(2) + "$ <br>TOTAL: " + totalCost.toFixed(2) + "$<br> Vous avez payer:" + amountPaid.toFixed(2) + "$<br> Voici votre monnaie à rendre:<br> 100$x" + counter100 + "<br> 50$x" + counter50 + "<br> 20$x" + counter20 + "<br> 10$x" + counter10 + "<br> 5$x" + counter5 + "<br> 1$x" + counter1 + "<br> 0.25$x" + counter025 + "<br> 0.10$x" + counter010 + "<br> 0.05$x" + counter005 +"<br> Nous n'avons plus de pièces de 1 sous alors nous vous avons remis un 5 cent de plus. Merci pour votre achat. </h5>"
    }
  }
}
  }
  