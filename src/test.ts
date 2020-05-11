const sum = require('./pokemon.ts');

const ratata = new Pokemon("ratata", 100);
const slowpoke = new Pokemon("slowpoke", 2);


describe('comparing two pokemon', () => {

	it('should return ratata when comparing ratata with slowpoke',
		() => {
			expect(compareSpeed(ratata, slowpoke)).toBe("ratata");
	}
	)});

