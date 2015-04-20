window.addEventListener('load', positionImages());

function positionImages() {
	var imagesArray = [], x, y, width = 210, height = 140;
	var container = document.getElementById("container");
	for (x=0; x<=2; x++) {
		for (y=0; y<=2; y++){
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
	/*container.lastChild.src = "images/blank.jpg";*/
}