/*
>>> Poject Titile: Movies List
>>> Start Date: 13.04.2019 
>>> By: Marsid Zyberi
*/

// "var ml" => movies length
// "var pn" => printed number
// "var nfr" => name for remove

var ml = 0;

var moviename = document.getElementById("moviename").value.toUpperCase();
var x = document.getElementById("movies");
var y = x.getElementsByTagName("input")[ml];

function addmovietitle() {

	// Get Movie Title

	var moviename = document.getElementById("moviename").value.toUpperCase();
	var x = document.getElementById("movies");
	var y = x.getElementsByTagName("input")[ml];

	// Get input-s by Tag
	var pn = `${ml + 1}. `;


	// ------------- Local Storage ----------------------------

	localStorage.setItem("moviet" + ml, moviename);

	// Change Values of input to Movie Title

	y.value = pn + moviename;

	document.getElementById("moviename").value = "";
	document.getElementsByTagName("input")[ml + 2].style.visibility = "visible"
	console.log(ml);
	

	hidd();

	ml++;

}

// Prompt for watched movies
// Change style of watched movies

function watched() {
	var x = document.getElementById("movies");
	var nfr = prompt("Which Movie Have You Watched? \nWrite Number!")
	var y = x.getElementsByTagName("input")[nfr - 1];
	y.style.color = "#1dd1a1";
	y.style.textDecoration = "line-through";
	// Local Storage

	localStorage.setItem("color" + (nfr-1), "#1dd1a1");

}

// Set Movie Names to Box Values from Local Storage

for (var i = 0; i < 100; i++) {
	if (localStorage.getItem(`moviet${i}`) !== null) {

		x.getElementsByTagName("input")[i].value = (i + 1) + (". ") + localStorage.getItem(`moviet${i}`)

	}

	if (localStorage.getItem("color" + i) == "#1dd1a1") {
		x.getElementsByTagName("input")[i].style.color = "#1dd1a1"
		x.getElementsByTagName("input")[i].style.textDecoration = "line-through"
	}	

	if (localStorage.getItem(`moviet${i}`) == null) {
		console.log(i)
		ml = i;
		break
	}

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

// Add Movie Button

function addmovie() {
	addmovietitle()
}	

	// Enter Key for Adding Movie

function keyDown() {
	if (event.keyCode == 13) {
		addmovietitle()
	}
}


// Remove Local Storage

/*for (var i = 0; i < 110; i++) {
	localStorage.removeItem("moviet" + i)
	localStorage.removeItem("color" + i)
}*/