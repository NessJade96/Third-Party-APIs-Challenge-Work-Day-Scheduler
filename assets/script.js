var taskPerHour = Array(17 - 9 + 1).fill("");
var eventInput = $(".calendarEvent");
var firstDiv = $("div input[0]").value;
var saveButton = $("button");
var dayToday = moment().format("dddd, MMMM Do");
$("#currentDay").text(dayToday);

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
	// firstDiv = localStorage.getItem("eventInput");
	// console.log(firstDiv);
	// eventInput.val(firstDiv).value;

	var containerTimeBlocks = $("#container");

	for (let i = 0; i < taskPerHour.length; i++) {
		containerTimeBlocks
			.children()
			.children("input")
			.eq(i)
			.val(taskPerHour[i]);
	}

	var test = localStorage.getItem(taskPerHour);
	console.log(taskPerHour);
	console.log(taskPerHour[0]);
	console.log(test);
}

saveButton.on("click", function (event) {
	var x = event.currentTarget;
	var currentTarget = $(x);
	var currentTargetPrev = currentTarget.prev();
	localStorage.setItem("taskPerHour", currentTargetPrev[0].value);
	console.log(currentTargetPrev[0].value);
	taskPerHour = currentTargetPrev.value;
	// localStorage.setItem("eventInput", currentTargetPrev[0].value);

	renderCalendarEvent();

	currentTarget.prev().val(firstDiv);
});

renderCalendarEvent();
