function Beer(image, name, description, ABV, tier) {
	this.image = image;
	this.name = name;
	this.description = description;
	this.ABV = ABV;
	this.tier = tier;
}

Beer.prototype.toHTML = function() {
	var htmlString = '<li>';
	htmlString += this.image;
	htmlString += this.name;
	htmlString += this.description;
	htmlString += this.ABV;
	htmlString += this.tier;
	htmlString += '</li>';
	return htmlString;
}