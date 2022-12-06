// Bloc score
let resetBtn = document.getElementById('reset');
let scoreJoueur = document.getElementById('score-joueur');
let scoreOrdinateur = document.getElementById('score-ordinateur');


// Partie ordinateur
let oiseauOrdi = document.getElementById('oiseauOrdi');
let avionOrdi = document.getElementById('avionOrdi');
let ovniOrdi = document.getElementById('ovniOrdi');

//Partie pour jouer
let message = document.getElementById('message');

//Partie joueur
let getBird = document.getElementById('oiseau');
let getPlane = document.getElementById('avion');
let getOvni = document.getElementById('ovni');


// **********CHOIX DE L'ORDI**************
const iaChoice =() =>{
    let ramdom = Math.floor((Math.random() * 3)+1);

    if (ramdom == 1){
        return "oiseau";
    }
    else if (ramdom == 2){
        return "avion";
    }
    else{
        return "ovni";
    }
}


// ********** COMPARAISON DES CHOIX************

// return 2 = defaite
// return 1 = victory
// return 0 = egality

 const comparison = (user, pc) =>{
    
    //USER CHOICE = OISEAU
    if(user == "oiseau" && pc == "oiseau"){
        cloneBird();
        cloneBirdOrdi();
        message.textContent = "Égalité !";
        return 0;
    }
    else if(user == "oiseau" && pc == "avion"){
        cloneBird();
        cloneAvionOrdi();
        scoreOrdinateur.textContent++;
        message.textContent = "Gagné !";
        return 2;
    }
    else if(user == "oiseau" && pc == "ovni"){
        cloneBird();
        cloneOvniOrdi();
        scoreOrdinateur.textContent++;
        message.textContent = "Perdu !";
        return 2;
    }

    //USER CHOICE = AVION
    if(user == "avion" && pc == "oiseau"){
        cloneAvion();
        cloneBirdOrdi();  
        scoreJoueur.textContent++;        
        message.textContent = "Perdu !";
        return 1;
    }
    else if(user == "avion" && pc == "avion"){
        cloneAvion();
        cloneAvionOrdi();
        message.textContent = "Égalité !";
        return 0;
    }
    else if(user == "avion" && pc == "ovni"){
        cloneAvion();
        cloneOvniOrdi();        
        scoreOrdinateur.textContent++;
        message.textContent = "Gagné !";
        return 2;
    }

    //USER CHOICE = OVNI
    if(user == "ovni" && pc == "oiseau"){
        cloneOvni();
        cloneBirdOrdi();
        scoreJoueur.textContent++;        
        message.textContent = "Gagné !";
        return 1; 
    }
    else if(user == "ovni" && pc == "avion"){
        cloneOvni();
        cloneAvionOrdi();
        scoreJoueur.textContent++;
        message.textContent = "Perdu!";
        return 1;
    }
    else if(user == "ovni" && pc == "ovni"){
        cloneOvni();
        cloneOvniOrdi();
        message.textContent = "Égalité !";
        return 0;
    }
}



cloneBirdOrdi = () => {
    let pouetOrdi = document.getElementById('areneOrdi'); 
    pouetOrdi.src =  "assets/img/arme1.png"
};

cloneAvionOrdi = () => {
    let pouetOrdi = document.getElementById('areneOrdi'); 
    pouetOrdi.src =  "assets/img/arme3.png"
};

cloneOvniOrdi = () => {
    let pouetOrdi = document.getElementById('areneOrdi'); 
    pouetOrdi.src =  "assets/img/arme2.png"
};



//le choix du joueur apparaît dans la div pouet
cloneBird = () => {
    let pouet = document.getElementById('areneJoueur'); 
    pouet.src =  "assets/img/arme1.png"
};

cloneAvion = () => {
    let pouet = document.getElementById('areneJoueur'); 
    pouet.src =  "assets/img/arme3.png"
};

cloneOvni = () => {
    let pouet = document.getElementById('areneJoueur'); 
    pouet.src =  "assets/img/arme2.png"
};


// ********EVENEMENTS DECLENCHES AU CLIC***********

getBird.addEventListener('click',function(){
    let userChoice = document.getElementById('oiseau').value;
    //Comparaison des choix
    comparison(userChoice, iaChoice());
    
});
getPlane.addEventListener('click',function(){
    let userChoice = document.getElementById('avion').value;
    //Comparaison des choix
    comparison(userChoice, iaChoice());
    
});
getOvni.addEventListener('click',function(){
    let userChoice = document.getElementById('ovni').value;
    //Comparaison des choix
    comparison(userChoice, iaChoice());
    
});


// ********reset bouton***********

resetBtn.addEventListener("click", () => {
    scoreJoueur.textContent = 0;
    scoreOrdinateur.textContent = 0;
});

// ********ANIMATION NUAGES***********


//  let nuage2 = document.getElementById('nuage2');

// nuage2.onclick = function() {
//     let start = Date.now();

//     let timer = setInterval(function() {
//     let timePassed = Date.now() - start;

//     nuage2.style.left = timePassed / 5 + 'px';

//     if (timePassed > 2000) clearInterval(timer);

//     }, 20);
// };




// ********mouseover sur boutons joueur***********

function bigImg(event) {
    event.style.width = "150px";
    }
    
function normalImg(event) {
    event.style.width = "120px";
    }
















































































