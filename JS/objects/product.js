function Product(name, price,id,catId) {
	this.name = name;
	this.price = price;
	this.id=id;
	this.catId=catId;
}

Product.compare=function(ProductA,ProductB) {
	
	return ProductA.name==ProductB.name;
}