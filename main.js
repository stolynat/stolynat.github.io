window.addEventListener('load', init);

function init(){
	width = 210;
	height = 140;
	positionImages();
	activeImage();
	activeImageAddEventListener();
	/*removeActiveClass();*/
}

/*function removeActiveClass(){
	var active = document.getElementsByClassName("active");
	for (var i=0; i<active.length; i++) {
		active[i].className = "none";
		console.log(active[i]);
	}
}*/

function activeImageAddEventListener (){
	var active = document.getElementsByClassName("active");
	for (var i=0; i<active.length; i++) {
		active[i].addEventListener("click", replaceImages);
	}
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
	alert("hello");
}
function replaceImages() {
	var clickedImage = this, blankImage = document.getElementById("blank");
	var tmpTop, tmpLeft;
	tmpTop = blankImage.style.top;
	tmpLeft = blankImage.style.left;
	blankImage.style.top = clickedImage.style.top;
	blankImage.style.left = clickedImage.style.left;	
	clickedImage.style.top = tmpTop;
	clickedImage.style.left = tmpLeft;
}


