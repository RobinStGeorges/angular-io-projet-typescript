var Pokemon = /** @class */ (function () {
    function Pokemon(nom, speed) {
        this.nom = nom;
        this.speed = speed;
    }
    Pokemon.prototype.parler = function () {
        return this.nom + " !";
    };
    return Pokemon;
}());
compareSpeed(Pokemon, a, Pokemon, b);
{
    if (a.speed > b.speed) {
        return a.nom;
    }
    else {
        return b.nom;
    }
}
var pikachu = new Pokemon("Pikachu");
console.log(pikachu.parler());
