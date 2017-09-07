// product constructor
function Shoe(name, size, color, price, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.price = price
	this.image = image
}

// create new products from the product constructor
var blueshoe  = new Shoe("Sarah J. Parker", "S/M/L", "Blue", 199.99, "img/blueshoes.jpg")
var blackshoe = new Shoe("Ivanka Trump", "S/M/L", "Black", 79.99, "img/blackshoe.jpg")
var buttonshoe = new Shoe("Katy Perry", "S/M/L", "Rainbow Buttons", 99.99, "img/buttonshoe.jpg")
var leopardshoe = new Shoe("Bella Vita", "S/M/L", "Leopard", 69.99, "img/leopardprint.jpg")
var confettishoe  = new Shoe("Chinese Laundry", "S/M/L", "Rainbow", 54.99, "img/multicolorshoe.jpg")
var redshoe = new Shoe("Steve Madden", "S/M/L", "Red", 119.99, "img/redwedge.jpg")
var greenshoe = new Shoe("Rupert Sanderson", "S/M/L", "Green", 169.99, "img/greenshoe.jpg")
var whiteshoe = new Shoe("J. Renee", "S/M/L", "White", 149.99, "img/whiteshoe.jpg")
var bootieshoe = new Shoe("Giuseppe Zanotti", "S/M/L", "Black", 499.99, "img/booties.jpg")

// create an array to add products to
var shoeArray = new Array

// add products to array of products
shoeArray.push(blueshoe, blackshoe, buttonshoe, leopardshoe, confettishoe, redshoe, greenshoe, whiteshoe, bootieshoe)

// loop through products array
for(var i = 0; i < shoeArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var priceH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var sName   = document.createTextNode(shoeArray[i].name)
	var sSize   = document.createTextNode("Available size: " + shoeArray[i].size)
	var sColor  = document.createTextNode("Color: " + shoeArray[i].color)
	var sPrice  = document.createTextNode("Price: " + shoeArray[i].price)
	var sButton = document.createTextNode("Buy Me!")

	// update source attribute
	image.src = shoeArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "shoe shoeName" + [i] + " thumbnail"
	
	// add text to elements
	nameH1.appendChild(sName)
	sizeH4.appendChild(sSize)
	colorH4.appendChild(sColor)
	priceH4.appendChild(sPrice)
	btn.appendChild(sButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shoes"
	document.getElementById("products").appendChild(newItem)
}