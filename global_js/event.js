//Récupération des zone d'evenement de marchant
let modal_marchant = document.querySelectorAll('.myModal');
let span_marchant = document.querySelectorAll('.close');

let evenement_marchant_X = [];
let evenement_marchant_Y = [];

let evenement_marchant_list = document.querySelectorAll('.evenement_marchant');
evenement_marchant_list.forEach(function (object, index) {
    evenement_marchant_X.push(Math.round(object.offsetLeft / 32)); //recupere la valeur du left
    evenement_marchant_Y.push(Math.round(object.offsetTop / 32)); //recupere la valeur du top
})

function event_marchant(perso_coord_X) {
    const result = evenement_marchant_X.findIndex((value_index) => value_index == perso_coord_X)
    //Ouverture modal marchant
    modal_marchant[result].style.display = "block";
    //Fermeture modal marchant
    span_marchant[result].onclick = function () {
        modal_marchant[result].style.display = "none";
    }
}

//Evenement de combat
let modal_combat = document.querySelectorAll('.modal_combat');
let mob = document.getElementById("mob");
let mob_life = document.getElementById("ennemi_life");
let mob_shield = document.getElementById("ennemi_shield");
let player = document.getElementById("player");
let player_life = document.getElementById("player_life");
let player_shield = document.getElementById("player_shield");
let attack_btn = document.getElementById("attack");
let attack_round = 0;

console.log(mob_life, mob_shield, player_life, player_shield) ;

let evenement_combat_X = [];
let evenement_combat_Y = [];

let evenement_combat_list = document.querySelectorAll('.evenement_combat');
evenement_combat_list.forEach(function (object, index) {
    evenement_combat_X.push(Math.round(object.offsetLeft / 32)); //recupere la valeur du left
    evenement_combat_Y.push(Math.round(object.offsetTop / 32)); //recupere la valeur du top
})

function event_combat(perso_coord_X) {
    const result = evenement_combat_X.findIndex((value_index) => value_index == perso_coord_X)
    //Ouverture modal combat
    modal_combat[result].style.display = "block";
    //Gestion du mob
    mob.setAttribute('src', '../ressource/mob/garde1/5.png');
    //Gestion du joueur
    player.setAttribute('src', '../main_character/main_character_8.png');
}

function attack() {
    //Attaque joueur
    if (attack_round == 0) {
        attack_btn.disabled = true;
        console.log("le player attaque !");
        mob_life.innerHTML = parseInt(mob_life.innerHTML) - 25;
        attack_round = 1
    }

    //Attaque ennemi 
    setTimeout(() => {
        console.log("l'ennemi attaque !");
        player_life.innerHTML = parseInt(player_life.innerHTML) - 25;
        attack_round = 0
        attack_btn.disabled = false;
    }, 2000);
}

 