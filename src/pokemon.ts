export class Pokemon{
	public nom : string = "inconnu";
	public speed : number = 1;
	
	constructor(nom : string = "inconnu", speed : number = 1){
		this.nom = nom;
		this.speed = speed;
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


// const pikachu = new Pokemon("Pikachu", 50);
// console.log(pikachu.parler());