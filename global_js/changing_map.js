//Récupération des zone de changement de map 
let changing_map_X = [];
let changing_map_Y = [];

let changing_map_list = document.querySelectorAll('.changing_map');
changing_map_list.forEach(function (object, index) {
    changing_map_X.push(object.offsetLeft); //recupere la valeur du left
    changing_map_Y.push(object.offsetTop); //recupere la valeur du top
})

function map_changing() {
    for (let index = 0; index < changing_map_X.length; index++) {
        if (changing_map_X[index] === pos_main_character_X && changing_map_Y[index] === pos_main_character_Y) {
            localStorage.setItem('position_X', pos_main_character_X);
            localStorage.setItem('position_Y', pos_main_character_Y);
            console.log(localStorage.getItem('position_X'));
            console.log(localStorage.getItem('position_Y'));
            window.location.replace('http://' + server + '/rpg/map_1/map_1.php');
        }
    }
}

/*
//Placement du personnage au premier démarrage de la map
if (localStorage.getItem('position_X') == 0 && localStorage.getItem('position_Y') == 0); {
    main_character.setAttribute('style', 'transition: all 0.350s linear 0s; left: 768px; top: 448px;');
}

//Placement du personnage après retour sur cette map
if (localStorage.getItem('position_X') == 896 && localStorage.getItem('position_Y') == 576) {
    main_character.setAttribute('style', 'transition: all 0.350s linear 0s; left: 1152px; top: 640px;');
}
*/