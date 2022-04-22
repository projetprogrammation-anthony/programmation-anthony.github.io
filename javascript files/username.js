function completeNameFunction(){
  var prenom = document.getElementById("premierNom").value
  var nomMil = document.getElementById("milieuNom").value
  var nomDer = document.getElementById("dernierNom").value
  var nomComplet = prenom + " " + nomMil + " " +nomDer
  var results = document.getElementById("affiche1")
  results.innerHTML = nomComplet
}
function userFunction(){
  var prenom = document.getElementById("premierNom").value
  var nomMil = document.getElementById("milieuNom").value
  var nomDer = document.getElementById("dernierNom").value
  var nomUtilisateur = prenom.slice(0,1) + nomMil.slice(0,1) + nomDer
  var results = document.getElementById("affiche3")
  results.innerHTML = nomUtilisateur
}
function initialsFunction(){
  var prenom = document.getElementById("premierNom").value
  var nomMil = document.getElementById("milieuNom").value
  var nomDer = document.getElementById("dernierNom").value
  var ini = prenom.slice(0,1) + nomMil.slice(0,1) + nomDer.slice(0,1)
  var results = document.getElementById("affiche2")
  results.innerHTML = ini
}

