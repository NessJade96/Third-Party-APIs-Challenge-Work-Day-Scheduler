var eventInput = $("#first");
var firstDiv = $("div input[0]").value;
var saveButton = $("button");
var dayToday = moment().format("dddd, MMMM Do");
$("#currentDay").text(dayToday);

renderCalendarEvent();

// use a function with moment.js in it to determin with if / else statements on what colour the time blocks / divs should be.
var allChildren = $("#container input");
hourColor();

function hourColor() {
	var currentHour = moment().format("hh");
	console.log(currentHour);
	if (currentHour < 11) {
		console.log("heyy");
		// allChildren.addClass("past");
	}
}

function renderCalendarEvent() {
	firstDiv = localStorage.getItem("eventInput");
	console.log(firstDiv);
	eventInput.val(firstDiv).value;
}

saveButton.on("click", function (event) {
	localStorage.setItem("eventInput", eventInput[0].value);
	console.log(eventInput[0].value);
	renderCalendarEvent();
});
