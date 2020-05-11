export class Pokemon{
	public nom : string = "inconnu";
	public speed : number = 1;
	public life : number = 100;
	public attackValue : number = 5;
	
	constructor(nom : string = "inconnu", speed : number = 1, life : number = 100, attackValue : number =5 ){
		this.nom = nom;
		this.speed = speed;
		this.life = life;
		this.attackValue = attackValue;
	}
	
	public parler(){
		return this.nom+" !";
	}

	public getNom(){
		return this.nom;
	}

}

export function compareSpeed(a: Pokemon, b: Pokemon){
	console.log(a.speed);
	if(a.speed > b.speed){
		return a.nom;
	}
	else{
		return b.nom;
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export function attack(a : Pokemon, b : Pokemon){
	if(getRandomInt(15) == 2){ // COUP CRITIQUE => attaque * 2
		b.life -= a.attackValue * 2;
		console.log("COUP CRITIQUE ! "+b.nom+ " perd "+ a.attackValue * 2 +" points de vie !" );
	}
	else{
		b.life -= a.attackValue;
		console.log(b.nom+ " perd "+ a.attackValue +" points de vie !" )
	}
	return b.life;
}

export function fight(a :Pokemon, b : Pokemon){
	var premierTour : boolean = true;

	if(premierTour){
		console.log("Le combat commence !");
		premierTour = false;
	}

	console.log("Nouveau tour !")
	while(a.life > 0 && b.life > 0){
		if(a.speed > b.speed){
			console.log(a.nom+" attaque !");
			attack(a,b);
			if(b.life > 0){
				attack(b, a);
			}
		}
		else{
			console.log(b.nom+" attaque !")
			attack(b, a);
			if(a.life > 0){
				attack(a, b);
			}
		}
	}

	if(a.life > 0){
		console.log(a.nom+ " a gagné !");
		return a.nom;
	}
	else{
		console.log(b.nom+ " a gagné !");
		return b.nom;
	}
}

// const pikachu = new Pokemon("Pikachu", 50);
// console.log(pikachu.parler());