let server = window.location.hostname;
let animation_time = false;
let moveBy = 32;
let walk_top = false;
let walk_bottom = false;
let walk_left = false;
let walk_right = false;

let pos_main_character_X;
let pos_main_character_Y;
let main_character = document.querySelector('#main_character');

if (localStorage.getItem('position_X') == 0 && localStorage.getItem('position_Y') == 0); {
    main_character.setAttribute('style', 'transition: all 0.352s linear 0s; left: 0px; top: 0px;');
}

document.addEventListener('keydown', function(e) {
    if (animation_time == false) {
        switch (e.code) {
            case 'ArrowLeft':
                if (walk_left == true) {
                    break;
                } else {
                    animation_time = true;
                    main_character.setAttribute('src', '../main_character/main_character_5.png');
                    main_character.style.left = parseInt(main_character.style.left) - moveBy + 'px';
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_4.png');
                    }, 87);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_5.png');
                    }, 174);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_6.png');
                    }, 261);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_5.png');
                    }, 350);
                    setTimeout(function () {
                        animation_time = false;
                        pos_main_character_Y = main_character.offsetTop;
                        pos_main_character_X = main_character.offsetLeft;
                        analyse_cases();
                    }, 355); //20ms entre l'animation css du personnage et l'analyse des tableaux
                    break;
                }
            case 'ArrowRight':
                if (walk_right == true) {
                    break;
                } else {
                    animation_time = true;
                    main_character.setAttribute('src', '../main_character/main_character_8.png');
                    main_character.style.left = parseInt(main_character.style.left) + moveBy + 'px';
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_7.png');
                    }, 87);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_8.png');
                    }, 174);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_9.png');
                    }, 261);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_8.png');
                    }, 350);
                    setTimeout(function () {
                        animation_time = false;
                        pos_main_character_Y = main_character.offsetTop;
                        pos_main_character_X = main_character.offsetLeft;
                        analyse_cases();
                    }, 352);
                    break;
                }
            case 'ArrowUp':
                if (walk_top == true) {
                    break;
                } else {
                    animation_time = true;
                    main_character.setAttribute('src', '../main_character/main_character_11.png');
                    main_character.style.top = parseInt(main_character.style.top) - moveBy + 'px';
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_10.png');
                    }, 87);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_11.png');
                    }, 174);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_12.png');
                    }, 261);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_11.png');
                    }, 350);
                    setTimeout(function () {
                        animation_time = false;
                        pos_main_character_Y = main_character.offsetTop;
                        pos_main_character_X = main_character.offsetLeft;
                        analyse_cases();
                    }, 355);
                    break;
                }
            case 'ArrowDown':
                if (walk_bottom == true) {
                    break;
                } else {
                    animation_time = true;
                    main_character.setAttribute('src', '../main_character/main_character_2.png');
                    main_character.style.top = parseInt(main_character.style.top) + moveBy + 'px';
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_1.png');
                    }, 87);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_2.png');
                    }, 174);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_3.png');
                    }, 261);
                    setTimeout(function () {
                        main_character.setAttribute('src', '../main_character/main_character_2.png');
                    }, 350);
                    setTimeout(function () {
                        animation_time = false;
                        pos_main_character_Y = main_character.offsetTop;
                        pos_main_character_X = main_character.offsetLeft;
                        analyse_cases();
                    }, 355);
                    break;
                }
        }
    }
});

/*let form_data = new FormData();
form_data.append('pos_main_character_X', pos_main_character_X);
form_data.append('pos_main_character_Y', pos_main_character_Y);
$.ajax({
    type: 'POST', // METHOD D'ENVOIE
    url: 'http://'+server+'/RPG/map_2/map_changing.php', // URL DE DESTINATION DE DONNER EN POST
    data: form_data, // L'OBJET DATA
    dataType: 'json', // LE FORMAT DE RETOUR DES DONNER
    success: function(reponse) {
        console.log(reponse);
    }
})
*/
/*
 $('#case8-18').submit(function(){
     alert(('Form submitted'))
 });
 $.post(
     'http://'+server+'/RPG/map_2/map_changing.php',
     {
         pos_main_character_X: pos_main_character_X,
         pos_main_character_Y: pos_main_character_Y
     }, 
     function (data) {
         console.log(data.pos_main_character_X);
         console.log(data.pos_main_character_Y);
     }, 'json'
 );
 */