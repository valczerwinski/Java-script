/**
créer une fonction qui cache le mot de passe via le bouton
et vérifie si le mots de passe est fort ou pas
 */
let cacher = document.querySelector("#cacher");
let bouton = document.querySelector("#bouton");
let champs = document.querySelector("#champsmdp");
let erreur = document.querySelector("#erreur");
let forceBarre = document.querySelector("#forceBarre");


// fonction qui permet de transformer les chaines de caractères en "*"
cacher.addEventListener("click", function() {
    if (champs.type === "text") {
        champs.type = "password";
        cacher.textContent = "Montrer";
    } else {
        champs.type = "text";
        cacher.textContent = "Cacher";
    }
});

champs.addEventListener("input", function() {
    let longueur = champs.value.length;
    let pourcentage = (longueur / 20) * 100; 
    forceBarre.style.width = pourcentage + "%";
});


// permet de vérifier si le mot de passe est inférieur à 10 caractère 
bouton.addEventListener("click", function(){
    let longueurmin = 10;
    erreur.textContent = ""
    if (champs.value.length < longueurmin){
        erreur.textContent = "ATTENTION le mot de passe est inférieur à 10 caractère";
    }else{
        erreur.textContent = "Mot de passe validé"
    }
});


// créer un bouton qui permet de cliquer et d'augmenter un score à chaque clique

let plus = document.querySelector("#plus")
let moins = document.querySelector("#moins");
let compteur = document.querySelector("#compteur");

plus.onclick = function () {
    let nbr = Number(compteur.textContent)
    nbr = nbr + 1;
    compteur.textContent = nbr
};

moins.onclick = function () {
    let nbr = Number(compteur.textContent)
    nbr = nbr - 1;
    if (nbr == -1) {
        nbr = 0
        compteur.textContent = nbr

    }
    compteur.textContent = nbr
};
