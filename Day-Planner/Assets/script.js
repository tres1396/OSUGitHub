//Using moment.js to get current date and time 
var displayCurrentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(displayCurrentDate);
//loads input items from storage
window.onload = function() { 
document.getElementById("myInput").style.display = "none";//set textbox to not visiable
var x = localStorage.getItem("Text");//Load storage
document.getElementById("myInput").value = x;//Value of local storage

//time
var myTime = new Date();
var time = myTime.getHours();
if(time>12)
{
	time-="12";
}

if(time < 12) {

	$("timeRow9").addClass = "past";
}
}
// Input fields
function myFunction() 
{  
	var x = document.getElementById("myInput");
	x.style.color = "black";
	if(x.style.display === "none")
	{
		x.style.display = "block";
	} 
}
// Sets input items to local storage
function myFunction1() 
{
	var x = document.getElementById("myInput").value;
	
	localStorage.setItem("Text", x);
	var a = localStorage.getItem("Text");
	
}

