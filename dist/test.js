var sum = require('./pokemon.ts');
var ratata = new Pokemon("ratata", 100);
var slowpoke = new Pokemon("slowpoke", 2);
test(it('should return ratata when comparing ratata with slowpoke', function () {
    expect(compareSpeed(ratata, slowpoke).toBe("ratata"));
}));
