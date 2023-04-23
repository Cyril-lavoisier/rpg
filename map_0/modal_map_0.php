<div class="myModal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Modal 0</p>
    </div>
</div>

<div class="myModal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Modal 1</p>
    </div>
</div>

<div class="myModal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Modal 2</p>
    </div>
</div>
<!-- 
<div class="modal_combat" class="modal">
    <div class="modal-content">
        <img src="" id="mob" style="width: 64px; height: 64px; border: 1px solid red;">
        <img src="" id="player" style="width: 64px; height: 64px; border: 1px solid red;">
        <div id="attack">
            <select name="attack_option">
                <option value="value1" selected>Coup de poing</option>
                <option value="value2">Coup de pied</option>
                <option value="value3">Epee</option>
            </select>
            <button onclick="attack()">Attack</button>
        </div>
        <div>
            <img src="../ressource/heart.png">
            <h4 id="life_amount2">0</h4>
        </div>
        <div>
            <img src="../ressource/shield.png">
            <h4 id="shield_amount2">0</h4>
        </div>
        <div>
            <img src="../ressource/coin.png">
            <h4 id="coin_amount2">0</h4>
        </div>
    </div>
</div>

<div class="modal_combat" class="modal">
    <div class="modal-content">
        <p>Modal combat 1</p>
    </div>
</div>

<div class="modal_combat" class="modal">
    <div class="modal-content">
        <p>Modal combat 2</p>
    </div>
</div>
-->

<div class="modal_combat modal">
    <div class="modal-content">
        <div class="modal-container">
            <div class="modal-ennemy">
                <div class="ennemy">
                    <img src="" id="player" style="width: 64px; height: 64px;">
                </div>
                <div class="modal-infos ennemys">
                    <div>
                        <p id="ennemi_life">100</p>
                        <img src="../ressource/heart.png" alt="Vie"/>
                    </div>
                    <div>
                        <p id="ennemi_shield">75</p>
                        <img src="../ressource/shield.png" alt="Armure"/>
                    </div>
                </div>
            </div>

            <div class="modal-player">
                <div class="joueur">
                <img src="" id="mob" style="width: 64px; height: 64px;">
                </div>
                <div class="modal-infos joueurs">
                    <div>
                        <p id="player_life">100</p>
                        <img src="../ressource/heart.png" alt="Vie"/>
                    </div>
                    <div>
                        <p id="player_shield">75</p>
                        <img src="../ressource/shield.png" alt="Armure"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-action">
            <div class="attack">
                <select name="" id="">
                    <option>Sélectionner votre Attaque</option>
                    <option value="1">Coup 1</option>
                    <option value="2">Coup 2</option>
                    <option value="3">Coup 3</option>
                </select>
                <div class="infos-attack">
                    <button onclick="attack()" id="attack">Attaquer</button>
                </div>
            </div>
            <div class="infos-attack">
                <p>Jsais pas quoi mettre</p>
            </div>
        </div>
    </div>
</div>