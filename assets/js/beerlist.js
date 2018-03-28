function Beerlist() {
	this.beers = [];
}

Beerlist.prototype.add = function(beer) {
	this.beers.push(beer);
}