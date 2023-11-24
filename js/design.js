// Muis Effect
// Geleerd via website van docent Sanne bij onderwerp spelen met css - pinguïn
var bewegen = false;
var rondjetoevoegen = false;
var klokjebewegen;
var test;

document.addEventListener('mousemove', function (event) {
	// moving = true;
	clearTimeout(klokjebewegen);
	klokjebewegen = setTimeout(movingStopped, 300);
	if(rondjetoevoegen == false) {
		addDot(event);
	}
});

function movingStopped() {
	bewegen = false;
}

function addDot(event) {
	rondjetoevoegen = true;

	let nieuwe = document.createElement("div");
	nieuwe.classList.add("rondje");
    var test2;
	
	nieuwe.style.setProperty("--dotSize", Math.floor( Math.random() * 20 + 20));
	nieuwe.style.setProperty("--dotLeft", event.clientX);
	nieuwe.style.setProperty("--dotTop", event.clientY);
	nieuwe.style.setProperty("--dotAngle", Math.floor( Math.random() * 90 + 4 ));

	nieuwe.addEventListener("animationend", function(event){
		nieuwe.parentNode.removeChild(nieuwe);
	});

	document.body.appendChild(nieuwe);

	setTimeout(function(){
		rondjetoevoegen = false;
	},1);
}




// POP UP HOME
var popUpAlles = document.getElementById("overlay");

// kruisje dat de pop-up laat verdwijnen
var kruisje = document.getElementsByClassName("close")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
kruisje.onclick = function() {
  popUpAlles.style.display = "none";
}








// ENVELOP
var envelop = document.getElementById("envelope");

// kruisje dat de pop-up laat verdwijnen
var buttonA = document.getElementsByClassName("buttonA")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
buttonA.onclick = function() {
  envelope.style.display = "block";
}



var envelop = document.getElementById("envelope");

// kruisje dat de pop-up laat verdwijnen
var buttonB = document.getElementsByClassName("buttonB")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
buttonB.onclick = function() {
  envelope.style.display = "block";
}












// POP UP HOME
var popUpAlles2 = document.getElementById("overlay2");

// kruisje dat de pop-up laat verdwijnen
var kruisje2 = document.getElementsByClassName("close2")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
kruisje2.onclick = function() {
  popUpAlles2.style.display = "none";
}




// POP UP HOME
var popUpAlles3 = document.getElementById("overlay3");

// kruisje dat de pop-up laat verdwijnen
var kruisje3 = document.getElementsByClassName("close3")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
kruisje3.onclick = function() {
  popUpAlles3.style.display = "none";
}


// POP UP HOME
var popUpAlles4 = document.getElementById("overlay4");

// kruisje dat de pop-up laat verdwijnen
var kruisje4 = document.getElementsByClassName("close4")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
kruisje4.onclick = function() {
  popUpAlles4.style.display = "none";
}





// ENVELOP
var scherm = document.getElementById("scherm4");

// kruisje dat de pop-up laat verdwijnen
var buttonA = document.getElementsByClassName("buttonA")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
buttonA.onclick = function() {
  scherm.style.display = "block";
}



// ENVELOP
var scherm = document.getElementById("scherm4");

// kruisje dat de pop-up laat verdwijnen
var buttonA = document.getElementsByClassName("buttonB")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
buttonA.onclick = function() {
  scherm.style.display = "block";
}








// Info scherm 3 - Game Boy Color 
var deButtonStart3 = document.getElementById("schermUit");
var deInfo3 = document.getElementById("info3");

deButtonStart3.addEventListener("dblclick", infoTeZien3);

function infoTeZien3() {
	deInfo3.classList.toggle("rood");
}







var vierkant = document.getElementById("overlay5");

// Button dat het vierkant laat zien
var button = document.getElementById("rondeKnop");

// kruisje dat de vierkant laat verdwijnen
var kruisje = document.getElementsByClassName("close5")[0];



// wanneer op de button wordt gedrukt komt de vierkant tevoorschijn
button.onclick = function() {
  vierkant.style.display = "block";
}

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
kruisje.onclick = function() {
  vierkant.style.display = "none";
}







// POP UP HOME
var popUpAlles6 = document.getElementById("overlay6");

// kruisje dat de pop-up laat verdwijnen
var kruisje6 = document.getElementsByClassName("close6")[0];

// wanneer op het kruisje wordt gedrukt verdwijnt de vierkant
kruisje6.onclick = function() {
  popUpAlles6.style.display = "none";
}





