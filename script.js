/*
>>> Poject Titile: Movies List
>>> Start Date: 13.04.2019 
>>> By: Marsid Zyberi
*/

// "var ml" => movieslength

var ml = 0;

function addmovietitle() {
	var moviename = document.getElementById("moviename").value.toUpperCase();
	var createinput = document.createElement("input");
	//alert(`Movies selected by you is "${moviename}"`);

	
	var x = document.getElementById("movies");
	var y = x.getElementsByTagName("input")[ml];
	y.value = moviename;
	document.getElementById("moviename").value = ""

	console.log(ml);
	ml++;
}

function addmovie() {
	addmovietitle()

}	

function keyDown() {
	if (event.keyCode == 13) {
		addmovietitle()
	}
}


// Cookies

document.cookie()