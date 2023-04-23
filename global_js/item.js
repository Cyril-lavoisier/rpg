let coin_amount = document.getElementById('coin_amount');

//Coin copper
let coin_copper = document.querySelectorAll('.coin_copper');
let coin_copper_win = document.querySelectorAll('.coin_copper_win');
let pos_coin_copper_X = [];
let pos_coin_copper_Y = [];

coin_copper.forEach(function (object, index) {
    pos_coin_copper_X.push(Math.round(object.offsetLeft / 32)); //recupere la valeur du left, division par 32 pour avoir un entier arrondis
    pos_coin_copper_Y.push(Math.round(object.offsetTop / 32)); //recupere la valeur du top, division par 32 pour avoir un entier arrondis
    coin_copper[index].style.display = 'block';
})

for (let index = 0; index < coin_copper.length; index++) {
    setInterval(function () {
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_0.png');
        }, 0);
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_1.png');
        }, 142.8);
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_2.png');
        }, 285.6);
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_3.png');
        }, 428.4);
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_4.png');
        }, 571.2);
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_5.png');
        }, 714);
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_6.png');
        }, 856.8);
        setTimeout(function () {
            coin_copper[index].setAttribute('src', '../coin_copper/coin_copper_7.png');
        }, 999.6);
    }, 1000);
}

//fonction capture de piece
function get_coin_copper(perso_coord_X) {
    const result = pos_coin_copper_X.findIndex((value_index) => value_index == perso_coord_X);
    coin_copper[result].style.display = "none";
    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let coin_copper_price = getRandomInt(20, 5);
    coin_copper_win[result].append(coin_copper_price);
    coin_amount.innerHTML = parseInt(coin_amount.innerHTML) + coin_copper_price;
    setTimeout(function () {
        coin_copper_win[result].style.display = "none";
    }, 1000);

}

//Coin silver
let coin_silver = document.querySelectorAll('.coin_silver');
let coin_silver_win = document.querySelectorAll('.coin_silver_win');
let pos_coin_silver_X = [];
let pos_coin_silver_Y = [];

coin_silver.forEach(function (object, index) {
    pos_coin_silver_X.push(Math.round(object.offsetLeft / 32)); //recupere la valeur du left, division par 32 pour avoir un entier arrondis
    pos_coin_silver_Y.push(Math.round(object.offsetTop / 32)); //recupere la valeur du top, division par 32 pour avoir un entier arrondis
    coin_silver[index].style.display = 'block';
})

for (let index = 0; index < coin_silver.length; index++) {
    setInterval(function () {
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_0.png');
        }, 0);
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_1.png');
        }, 142.8);
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_2.png');
        }, 285.6);
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_3.png');
        }, 428.4);
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_4.png');
        }, 571.2);
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_5.png');
        }, 714);
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_6.png');
        }, 856.8);
        setTimeout(function () {
            coin_silver[index].setAttribute('src', '../coin_silver/coin_silver_7.png');
        }, 999.6);
    }, 1000);
}

//fonction capture de piece
function get_coin_silver(perso_coord_X) {
    const result = pos_coin_silver_X.findIndex((value_index) => value_index == perso_coord_X);
    coin_silver[result].style.display = "none";
    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let coin_silver_price = getRandomInt(50, 20);
    coin_silver_win[result].append(coin_silver_price);
    coin_amount.innerHTML = parseInt(coin_amount.innerHTML) + coin_silver_price;
    setTimeout(function () {
        coin_silver_win[result].style.display = "none";
    }, 1000);

}

//Coin gold
let coin_gold = document.querySelectorAll('.coin_gold');
let coin_gold_win = document.querySelectorAll('.coin_gold_win');
let pos_coin_gold_X = [];
let pos_coin_gold_Y = [];

coin_gold.forEach(function (object, index) {
    pos_coin_gold_X.push(Math.round(object.offsetLeft / 32)); //recupere la valeur du left, division par 32 pour avoir un entier arrondis
    pos_coin_gold_Y.push(Math.round(object.offsetTop / 32)); //recupere la valeur du top, division par 32 pour avoir un entier arrondis
    coin_gold[index].style.display = 'block';
})

for (let index = 0; index < coin_gold.length; index++) {
    setInterval(function () {
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_0.png');
        }, 0);
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_1.png');
        }, 142.8);
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_2.png');
        }, 285.6);
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_3.png');
        }, 428.4);
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_4.png');
        }, 571.2);
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_5.png');
        }, 714);
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_6.png');
        }, 856.8);
        setTimeout(function () {
            coin_gold[index].setAttribute('src', '../coin_gold/coin_gold_7.png');
        }, 999.6);
    }, 1000);
}

//fonction capture de piece
function get_coin_gold(perso_coord_X) {
    const result = pos_coin_gold_X.findIndex((value_index) => value_index == perso_coord_X); //Grâce à la fonction findIndex, on va chercher dans le tableau pos_coin_gold_X le numero d'index qui contient la valeur envoyer dans la fonction par perso_coord_X, la fonction fléché contenant la variable value_index permet de fouiller les valeur du tableau et de faire un match entre la valeur perso_coord_X et value_index, exemple : valeur pos_coin_gold_X[3,4,5,6], index pos_coin_gold_X[0,1,2,3], si perso_coord_X vaut 5, alors value_index fouilleras le tableau pos_coin_gold_X jusqu'a trouver l'index correspondant a 5 c'est a dire 2, le chiffre de l'index représente le numero de l'objet ciblé dans le tableau coin_gold.
    coin_gold[result].style.display = "none"; //On applique le display à l'objet ayant l'index renvoyer par result, exemple : coin_gold[0,1,2,3], si result vaut 2, alors c'est le 3eme objet du tableau qui doit être modifier.
    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let coin_gold_price = getRandomInt(100, 50);
    coin_gold_win[result].append(coin_gold_price);
    coin_amount.innerHTML = parseInt(coin_amount.innerHTML) + coin_gold_price;
    setTimeout(function () {
        coin_gold_win[result].style.display = "none";
    }, 1000);

    /* Fonction non fléché a conserver.
    const result = pos_coin_gold_X.findIndex(check); //Capture et change le display block en none dans l'object de la class
    function check(value_index) {
        console.log("Valeur renvoyer de value_index : " + value_index);
        return value_index == perso_coord_X;
        
    }
    */
}