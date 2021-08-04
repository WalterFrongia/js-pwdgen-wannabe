
var nome = prompt("inserisci qui il tuo nome")
var cognome = prompt("inserisci qui il tuo cognome")
var colorePreferito = prompt("inserisci qui il tuo colore preferito")

document.getElementById("ins-nome").innerHTML = nome

document.getElementById("ins-cognome").innerHTML = cognome

document.getElementById("ins-colore").innerHTML = colorePreferito

var password = nome + cognome + colorePreferito

document.getElementById("ins-password").innerHTML = nome + cognome + colorePreferito

