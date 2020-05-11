"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, speed) {
        if (nom === void 0) { nom = "inconnu"; }
        if (speed === void 0) { speed = 1; }
        this.nom = "inconnu";
        this.speed = 1;
        this.nom = nom;
        this.speed = speed;
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
// const pikachu = new Pokemon("Pikachu", 50);
// console.log(pikachu.parler());
