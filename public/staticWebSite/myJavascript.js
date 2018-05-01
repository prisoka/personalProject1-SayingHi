function hello() {
	console.log("Hello code");
	document.getElementById("paragraph").innerHTML = "Hello!"
}

var patCount = 0;
function patPuppy(num){
	patCount += num;
	document.getElementById("result").innerHTML = "Puppy Patted " + patCount + " times";
}
