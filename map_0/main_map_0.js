let line0 = ['X', 'CG', 'CG', 'CG', 'CG', 'CG', 'X', 'EVM', 'X', 'EVM', 'X'] //Tableau représentant une ligne, chaque lettre représente une case
let line1 = ['X', 'CS', 'CS', 'CS', 'CS', 'CS', 'X', 'X', 'EVM', 'X', 'X']
let line2 = ['X', 'CC', 'CC', 'CC', 'CC', 'CC', 'X', 'EVC', 'X', 'EVC', 'X']
let line3 = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'EVC', 'X', 'X']
let line4 = ['X', 'X', 'X', 'SZ', 'SZ', 'SZ', 'SZ', 'X', 'X', 'X', 'X']
let line5 = ['X', 'X', 'SZ', 'CB', 'CB', 'CB', 'CB', 'SZ', 'X', 'X', 'X']
let line6 = ['X', 'SZ', 'CR', 'X', 'X', 'X', 'X', 'CL', 'SZ', 'X', 'X']
let line7 = ['X', 'X', 'SZ', 'CT', 'CT', 'CT', 'CT', 'SZ', 'X', 'X', 'X']
let line8 = ['X', 'X', 'X', 'SZ', 'SZ', 'SZ', 'SZ', 'X', 'X', 'X', 'X']
let line9 = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
let line10 = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

let map = [line0, line1, line2, line3, line4, line5, line6, line7, line8, line9, line10] //Tableau a deux dimension représentant toute la map

function analyse_cases() {
    let perso_coord_Y = Math.round(pos_main_character_Y / 32); //Recolte de la position du joueur en pixel par rapport a l'axe Y (top/bottom), division par 32 (largeur d'une case) ce qui donne un reste entier arrondis, exemple : 128 / 32 = 4.
    let perso_coord_X = Math.round(pos_main_character_X / 32);//Recolte de la position du joueur en pixel par rapport a l'axe X (left/right), division par 32 (largeur d'une case) ce qui donne un reste entier arrondis, exemple : 128 / 32 = 4.

    switch (map[perso_coord_Y][perso_coord_X]) { //switch permettant de savoir sur quelle case le joueur se trouve et quelle fonction déclencher, exemple : si map[0][3], le joueur se trouve sur la case 3 de la ligne 0 du tableau map, si cette case comporte X Y ou O, le switch s'adapte pour déclencher une action.
        case "X":
            break;
        case "CG":
            get_coin_gold(perso_coord_X);
            break;
        case "CS":
            get_coin_silver(perso_coord_X);
            break;
        case "CC":
            get_coin_copper(perso_coord_X);
            break;
        case "CT":
            collision_top(perso_coord_X);
            break;
        case "CB":
            collision_bottom(perso_coord_X);
            break;
        case "CL":
            collision_left(perso_coord_X);
            break;
        case "CR":
            collision_right(perso_coord_X);
            break;
        case "SZ":
            safe_zone(perso_coord_X);
            break;
        case "EVM":
            event_marchant(perso_coord_X);
            break;
        case "EVC":
            event_combat(perso_coord_X);
            break;
        default:
            break;
    }
}
