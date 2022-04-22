function madlibs(){
  var vetements = document.getElementById("vets").value
  var theFood = document.getElementById("nour").value
  var infinitif = document.getElementById("action").value
  var ami = document.getElementById("ami").value
  var foods = document.getElementById("nour").value
  var adjectif = document.getElementById("adj").value
  var action = document.getElementById("action2").value
  var adverbement = document.getElementById("adver").value
  var dinner = document.getElementById("nour3").value
  var nom = document.getElementById("nom").value
  var adjectifNumberTwo = document.getElementById("adj2").value
  
  var message = "J’adore l’été !  Chaque jour, quand je suis en vacances, je me réveille, je mets mes " + vetements + ", je me rend à la cuisine et je mange " + theFood + " pour déjeuner.  Ensuite, mon activité préféré est de " + infinitif + " avec mon ami " + ami +".  À 14h, je dîne.  Je mange des " + foods + " " + adjectif + ".  Durant l’après-midi, j’aime me rendre au parc et de " + action + " " + adverbement + ".  En soirée, je mange toujours du " + dinner + " pour le souper.  Finalement, je me couche et je rêve de " + nom + ".  Quel été " + adjectifNumberTwo + "!" 
  
  var div = document.getElementById("results");
  div.innerHTML = message
}