$(document).ready(function(){
	
	// Calling our splashScreen plugin and
	// passing an array with images to be shown
	
	$('#promoIMG').splashScreen({
		textLayers : [
			'img/name.png',
			'img/student.png',
			'img/degree.png',
			'img/language.png',
			'img/open_source.png'

		]
	});
	
});
