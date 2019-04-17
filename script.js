/*
>>> Poject Titile: Movies List
>>> Start Date: 13.04.2019 
>>> By: Marsid Zyberi
*/

// "var ml" => movies length
// "var pn" => printed number
// "var nfr" => name for remove


var ml = 0;

function addmovietitle() {

	// Get Movie Title

	var moviename = document.getElementById("moviename").value.toUpperCase();
	var x = document.getElementById("movies");

	// Get input-s by Tag
	var y = x.getElementsByTagName("input")[ml];
	var pn = `${ml + 1}. `;

	// Change Values of input to Movie Title
	y.value = pn + moviename;
	document.getElementById("moviename").value = "";
	document.getElementsByTagName("input")[ml + 2].style.visibility = "visible"
	console.log(ml);
	
	ml++;

	hidd();
}


// Prompt for watched movies
// Change style of watched movies

function watched() {
	var x = document.getElementById("movies");
	var nfr = prompt("Which Movie Have You Watched? \nWrite Number!")
	var y = x.getElementsByTagName("input")[nfr - 1];
	y.style.color = "#1dd1a1";
	y.style.textDecoration = "line-through"
}

// When Input Box value = "" => set it to hidden

function hidd() {

	for (var i = 2; i < 100; i++) {
	
		var y = document.getElementsByTagName("input")[i];
		
		if (y.value == "") {
			y.style.visibility = "hidden";
		}
	}
}

// Cookies

document.cookie = "moviename=" + document.getElementsByTagName("input").value;



// Add Movie Button

function addmovie() {
	addmovietitle()
}	

// Enter Key for adding movie

function keyDown() {
	if (event.keyCode == 13) {
		addmovietitle()
	}
}