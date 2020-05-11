"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, speed, life, attackValue) {
        if (nom === void 0) { nom = "inconnu"; }
        if (speed === void 0) { speed = 1; }
        if (life === void 0) { life = 100; }
        if (attackValue === void 0) { attackValue = 5; }
        this.nom = "inconnu";
        this.speed = 1;
        this.life = 100;
        this.attackValue = 5;
        this.nom = nom;
        this.speed = speed;
        this.life = life;
        this.attackValue = attackValue;
    }
    Pokemon.prototype.parler = function () {
        return this.nom + " !";
    };
    Pokemon.prototype.getNom = function () {
        return this.nom;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function compareSpeed(a, b) {
    console.log(a.speed);
    if (a.speed > b.speed) {
        return a.nom;
    }
    else if (a.speed == b.speed) {
        if (getRandomInt(50 > 25)) {
            return a.nom;
        }
        else {
            return b.nom;
        }
    }
    else {
        return b.nom;
    }
}
exports.compareSpeed = compareSpeed;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function attack(a, b) {
    if (getRandomInt(15) == 2) { // COUP CRITIQUE => attaque * 2
        b.life -= a.attackValue * 2;
        console.log("COUP CRITIQUE ! " + b.nom + " perd " + a.attackValue * 2 + " points de vie !");
    }
    else {
        b.life -= a.attackValue;
        console.log(b.nom + " perd " + a.attackValue + " points de vie !");
    }
    return b.life;
}
exports.attack = attack;
function fight(a, b) {
    var premierTour = true;
    if (premierTour) {
        console.log("Le combat commence !");
        premierTour = false;
        if (compareSpeed(a, b) == a.nom) {
            var premierPokemon = a;
            var secondPokemon = b;
        }
        else {
            var premierPokemon = b;
            var secondPokemon = a;
        }
    }
    console.log("Nouveau tour !");
    while (premierPokemon.life > 0 && secondPokemon.life > 0) {
        console.log(premierPokemon.nom + " attaque !");
        attack(premierPokemon, secondPokemon);
        if (secondPokemon.life > 0) {
            console.log(secondPokemon.nom + " attaque !");
            attack(secondPokemon, premierPokemon);
        }
    }
    if (premierPokemon.life > 0) {
        console.log(premierPokemon.nom + " a gagné !");
        return premierPokemon.nom;
    }
    else {
        console.log(secondPokemon.nom + " a gagné !");
        return secondPokemon.nom;
    }
}
exports.fight = fight;
// const pikachu = new Pokemon("Pikachu", 50);
// console.log(pikachu.parler());
