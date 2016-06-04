function	Spaceship(name, crewArray, phasers, shields){
	this.name = name;
	this.crew = crewArray;
	this.phasers = phasers;
	this.shields = shields;
	this.cloaked = false;
	this.warpDrive = 'disengaged';
	this.phasersCharge = 'uncharged';
	//set currentShip on each crew member
	var ship = this;
	this.crew.forEach(function(crew){
		crew.currentShip = ship;
	});
	//why not on prototype? => stupid test?
	if (this.crew.length === 0)
		this.docked = true
	else
		this.docked =  false
}

// Spaceship.prototype.docked = function() {
// 	if (this.crew.length === 0)
// 		return true;
// 	else
// 		return  false;
// };






