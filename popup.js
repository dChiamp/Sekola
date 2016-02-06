console.log("ready!");
var timeInput = document.getElementById("time");

var timeDisplay = document.getElementById("time-display");

var startBtn = document.getElementById("start");
var resetBtn = document.getElementById("reset");
var addTimeBtn = document.getElementById("add-time");

// var deadline = new Date(currentTime + timeInMinutes*60*1000);
// console.log(deadline)

var countStartingVal = []
var start = startBtn.addEventListener("click", function(e){
	e.preventDefault();
	var time = timeInput.value;
	console.log(time);
	countStartingVal.push(time);
	var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
})

var count=countStartingVal;

function timer() {
	count--;
	if (count > 0) {
	console.log(count);
	timeDisplay.innerHTML=count + " secs"; // watch for spelling
	} else {
	  	timeDisplay.innerHTML="sekola malaka!";
	}
}

resetBtn.addEventListener("click", function() {
	location.reload();
})


/*
addTimeBtn.addEventListener("click", function(){
	countStartingVal.push(5);
	start;
})


// defualt 20 min countdown
if (!countStartingVal) {
	count = 20 min
} else if (counterStarting val  = time.value) {
	// start function with inputed time
}



}

*/
