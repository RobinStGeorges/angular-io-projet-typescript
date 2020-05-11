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
    else {
        return b.nom;
    }
}
exports.compareSpeed = compareSpeed;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function attack(a, b) {
    if (getRandomInt(30) == 2) { // COUP CRITIQUE => attaque * 2
        b.life -= a.attackValue * 2;
        console.log(b.nom + " perd " + a.attackValue * 2 + " points de vie !");
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
    }
    console.log("Nouveau tour !");
    while (a.life > 0 && b.life > 0) {
        if (a.speed > b.speed) {
            console.log(a.nom + " attaque !");
            attack(a, b);
            if (b.life > 0) {
                attack(b, a);
            }
        }
        else {
            console.log(b.nom + " attaque !");
            attack(b, a);
            if (a.life > 0) {
                attack(a, b);
            }
        }
    }
    if (a.life > 0) {
        console.log(a.nom + " a gagné !");
        return a.nom;
    }
    else {
        console.log(b.nom + " a gagné !");
        return b.nom;
    }
}
exports.fight = fight;
// const pikachu = new Pokemon("Pikachu", 50);
// console.log(pikachu.parler());
