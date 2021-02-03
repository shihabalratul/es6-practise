class Father{
	constructor(){
		this.fathersName = "Schwerznegger";
	}
}
class Child extends Father{
	constructor(name) {
		super();
		this.name = name;
	}
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby2);