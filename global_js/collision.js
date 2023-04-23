//Récupération des zone de collision top
let collision_top_X = [];
let collision_top_Y = [];
let collision_top_list = document.querySelectorAll('.collision_top');
collision_top_list.forEach(function (object, index) {
    collision_top_X.push(object.offsetLeft); //recupere la valeur du left
    collision_top_Y.push(object.offsetTop); //recupere la valeur du top
})

function collision_top(perso_coord_X) {
    if (collision_top_X.findIndex((value_index) => value_index == perso_coord_X)) {
        console.log("je passe collision top");
        walk_top = true
        walk_bottom = false
        walk_left = false
        walk_right = false
    }
}


//Récupération des zone de collision bottom
let collision_bottom_X = [];
let collision_bottom_Y = [];
let collision_bottom_list = document.querySelectorAll('.collision_bottom');
collision_bottom_list.forEach(function (object, index) {
    collision_bottom_X.push(object.offsetLeft); // recupere la valeur du left
    collision_bottom_Y.push(object.offsetTop); //recupere la valeur du top
})

function collision_bottom(perso_coord_X) {
    if (collision_bottom_X.findIndex((value_index) => value_index == perso_coord_X)) {
        console.log("je passe collision bottom");
        walk_top = false
        walk_bottom = true
        walk_left = false
        walk_right = false
    }
}

//Récupération des zone de collision left
let collision_left_X = [];
let collision_left_Y = [];
let collision_left_list = document.querySelectorAll('.collision_left');
collision_left_list.forEach(function (object, index) {
    collision_left_X.push(object.offsetLeft); // recupere la valeur du left
    collision_left_Y.push(object.offsetTop); //recupere la valeur du top
})

function collision_left(perso_coord_X) {
    if (collision_left_X.findIndex((value_index) => value_index == perso_coord_X)) {
        console.log("je passe collision left");
        walk_top = false
        walk_bottom = false
        walk_left = true
        walk_right = false
    }
}

//Récupération des zone de collision right
let collision_right_X = [];
let collision_right_Y = [];
let collision_right_list = document.querySelectorAll('.collision_right');
collision_right_list.forEach(function (object, index) {
    collision_right_X.push(object.offsetLeft); // recupere la valeur du left
    collision_right_Y.push(object.offsetTop); //recupere la valeur du top
})

function collision_right(perso_coord_X) {
    if (collision_right_X.findIndex((value_index) => value_index == perso_coord_X)) {
        console.log("je passe collision right");
        walk_top = false
        walk_bottom = false
        walk_left = false
        walk_right = true
    }
}

//Récupération des zone safe
let safe_zone_X = [];
let safe_zone_Y = [];
let safe_zone_list = document.querySelectorAll('.safe_zone');
safe_zone_list.forEach(function (object, index) {
    safe_zone_X.push(object.offsetLeft); // recupere la valeur du left
    safe_zone_Y.push(object.offsetTop); //recupere la valeur du top
})

function safe_zone(perso_coord_X) {
    if (safe_zone_X.findIndex((value_index) => value_index == perso_coord_X)) {
        console.log("Je passe safe_zone");
        walk_top = false
        walk_bottom = false
        walk_left = false
        walk_right = false
    }
}