

function nextImageR1(el){
if (el.src.match("image/red1.jpg")){
el.src = "image/red1r1.jpg";
} else if (el.src.match("image/red1r1.jpg")){
el.src = "image/red1r2.jpg";
} else if (el.src.match("image/red1r2.jpg")){
el.src = "image/red1r3.jpg";
} else if (el.src.match("image/red1r3.jpg")){
el.src = "image/red1.jpg";
} else {
}
}

function nextImageR2(el){
if (el.src.match("image/red2.jpg")){
el.src = "image/red2r1.jpg";
} else if (el.src.match("image/red2r1.jpg")){
el.src = "image/red2r2.jpg";
} else if (el.src.match("image/red2r2.jpg")){
el.src = "image/red2r3.jpg";
} else if (el.src.match("image/red2r3.jpg")){
el.src = "image/red2.jpg";
} else {
}
}

function nextImageR3(el){
if (el.src.match("image/red3.jpg")){
el.src = "image/red3r1.jpg";
} else if (el.src.match("image/red3r1.jpg")){
el.src = "image/red3r2.jpg";
} else if (el.src.match("image/red3r2.jpg")){
el.src = "image/red3r3.jpg";
} else if (el.src.match("image/red3r3.jpg")){
el.src = "image/red3.jpg";
} else {
}
}

function nextImageB1(el){
if (el.src.match("image/blue1.jpg")){
el.src = "image/blue1r1.jpg";
} else if (el.src.match("image/blue1r1.jpg")){
el.src = "image/blue1r2.jpg";
} else if (el.src.match("image/blue1r2.jpg")){
el.src = "image/blue1r3.jpg";
} else if (el.src.match("blue1r3.jpg")){
el.src = "image/blue1.jpg";
} else {
}
}

function nextImageB2(el){
if (el.src.match("image/blue2.jpg")){
el.src = "image/blue2r1.jpg";
} else if (el.src.match("image/blue2r1.jpg")){
el.src = "image/blue2r2.jpg";
} else if (el.src.match("image/blue2r2.jpg")){
el.src = "image/blue2r3.jpg";
} else if (el.src.match("image/blue2r3.jpg")){
el.src = "image/blue2.jpg";
} else {
}
}

function nextImageB3(el){
if (el.src.match("image/blue3.jpg")){
el.src = "image/blue3r1.jpg";
} else if (el.src.match("image/blue3r1.jpg")){
el.src = "image/blue3r2.jpg";
} else if (el.src.match("image/blue3r2.jpg")){
el.src = "image/blue3r3.jpg";
} else if (el.src.match("image/blue3r3.jpg")){
el.src = "image/blue3.jpg";
} else {
}
}

function nextImageG1(el){
if (el.src.match("image/green1.jpg")){
el.src = "image/green1r1.jpg";
} else if (el.src.match("image/green1r1.jpg")){
el.src = "image/green1r2.jpg";
} else if (el.src.match("image/green1r2.jpg")){
el.src = "image/green1r3.jpg";
} else if (el.src.match("image/green1r3.jpg")){
el.src = "image/green1.jpg";
} else {
}
}

function nextImageG2(el){
if (el.src.match("image/green2.jpg")){
el.src = "image/green2r1.jpg";
} else if (el.src.match("image/green2r1.jpg")){
el.src = "image/green2r2.jpg";
} else if (el.src.match("image/green2r2.jpg")){
el.src = "image/green2r3.jpg";
} else if (el.src.match("image/green2r3.jpg")){
el.src = "image/green2.jpg";
} else {
}
}

function nextImageG3(el){
if (el.src.match("image/green3.jpg")){
el.src = "image/green3r1.jpg";
} else if (el.src.match("image/green3r1.jpg")){
el.src = "image/green3r2.jpg";
} else if (el.src.match("image/green3r2.jpg")){
el.src = "image/green3r3.jpg";
} else if (el.src.match("image/green3r3.jpg")){
el.src = "image/green3.jpg";
} else {
}
}


//This code activates when the html that links to this function is clicked
function checkConfiguration(el){
	//the if statement checks if the images are all correct and if they are it switches the lock image with a key
	if (document.getElementById("red1").src.match("image/red1.jpg") && document.getElementById("red2").src.match("image/red2.jpg") && document.getElementById("red3").src.match("image/red3.jpg") && document.getElementById("blue1").src.match("image/blue1.jpg") && document.getElementById("blue2").src.match("image/blue2.jpg") && document.getElementById("blue3").src.match("image/blue3.jpg") && document.getElementById("green1").src.match("image/green1.jpg") && document.getElementById("green2").src.match("image/green2.jpg") && document.getElementById("green3").src.match("image/green3.jpg")){
		document.getElementById("lock").classList.add("display");
		document.getElementById("key").classList.remove("display")
	//The else statement says that if the images are not in the right order don't do anything
	} else {
		console.log("else");
	}
	
}