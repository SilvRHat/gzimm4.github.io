// Art Project 4 - Noir's Journal
// Gavin Zimmerman

// Lens Handler - Enables visibility for the components of webpage given the lens in url
const urlParams = new URLSearchParams(window.location.search);
var lens_str = urlParams.get('lens') || 'norm';
var lens = lens_str.split(',');
console.log(lens)

var i, j;


for (i=0; i<lens.length; i++) {
	var pieces = document.getElementsByClassName(lens[i]);
	console.log(pieces, pieces.len)
	for (j=0; j<pieces.length; j++) {
		pieces.item(j).style.visibility = 'visible';
	};
	
	if (lens=='ghost') {
		document.body.style['background-blend-mode']='luminosity';
		document.body.style['background-color']='rgb(74 116 232 / 45%)';
	};
};
