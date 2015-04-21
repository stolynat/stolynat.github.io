window.addEventListener('load', init);

function init(){
	width = 210;
	height = 140;
	positionImages();
	activeImage();
	document.getElementById("rundomize").addEventListener("click", rundomize);
}

function positionImages() {
	var imagesArray = [], x, y, 
	rows = 2,
	columns = 2,
	container = document.getElementById("container");
	for (x=0; x<=rows; x++) {
		for (y=0; y<=columns; y++){
			var item = {name: x + "-" + y + ".img", 
						positionTop: x*height, 
						positionLeft: y*width};
			imagesArray.push(item);
			var img = document.createElement("img");
			img.src = "images/" + x + "-" + y + ".jpeg";
			img.style.top = x*height + "px";
			img.style.left = y*width + "px";
			container.appendChild(img);
		}
	}
	console.log(imagesArray);
	container.lastChild.src = "images/blank.jpg";
	container.lastChild.id = "blank";
}

function activeImage() {
	var images = document.getElementsByTagName("img"),
	blankImage = document.getElementById("blank");
	for (var i=0; i<images.length-1; i++){
		var blankLeft = parseInt(blankImage.style.left);
		var blankTop = parseInt(blankImage.style.top);
		var imgLeft = parseInt(images[i].style.left);
		var imgTop = parseInt(images[i].style.top);
		if ((blankTop == imgTop && blankLeft == imgLeft + width) || 
		    (blankLeft == imgLeft && blankTop == imgTop + height) ||
			(blankTop == imgTop && blankLeft == imgLeft - width) ||
			(blankLeft == imgLeft && blankTop == imgTop - height)) {
			images[i].className = "active";
		}
	}
}

function rundomize() {
	
}





