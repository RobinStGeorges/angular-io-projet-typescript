
// @ts-ignore
import {attack, attaquer, fight, Pokemon} from '../src/pokemon.ts';
// @ts-ignore
import { compareSpeed } from '../src/pokemon.ts';

const ratata = new Pokemon("ratata", 100, 100, 10);
const slowpoke = new Pokemon("slowpoke", 2, 150, 30);
const mew = new Pokemon("mew", 300, 500, 80);

describe('comparing two pokemon', () => {

	it('should return ratata when comparing ratata with slowpoke',
		() => {
			expect(compareSpeed(ratata, slowpoke)).toBe("ratata");
	}
	)}
);

describe('un pokemon en attaque un autre', () => {

	it('should return 140 when  ratata attacks slowpoke',
		() => {
			expect(attack(ratata, slowpoke)).toBe(140);
		}
	)}
);

describe('combat entre deux pokemon', () => {

	it('should return slowpoke',
		() => {
			expect(fight(ratata, slowpoke)).toBe("slowpoke");
		}
	)
it('should return mew',
	() => {
		expect(fight(slowpoke, mew)).toBe("mew");
	}
)}

);



