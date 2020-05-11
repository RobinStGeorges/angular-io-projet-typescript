class Pokemon{
	nom : string;
	speed : number
	
	constructor(nom : string, speed : number){
		this.nom = nom;
		this.speed = speed;
	}
	
	parler(){
		return this.nom+" !";
	}
	

}

function compareSpeed(a: Pokemon, b: Pokemon){
	if(a.speed > b.speed){
		return a.nom;
	}
	else{
		return b.nom;
	}
}

const pikachu = new Pokemon("Pikachu", 50);
console.log(pikachu.parler());