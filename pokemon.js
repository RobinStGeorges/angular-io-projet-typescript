function Pokemon(nom){
	this.nom = nom;
	this.parler = function(){
		return nom+" !";
	}
}

const pikachu = new Pokemon("Pikachu")
console.log(pikachu.parler());