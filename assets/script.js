var taskPerHour = Array(17 - 9 + 1).fill("");
var saveButton = $("button");
var dayToday = moment().format("dddd, MMMM Do");
var firstHour = $("firstHour");
var storedHourInput = JSON.parse(localStorage.getItem("taskPerHour"));
var containerTimeBlocks = $("#container");

$("#currentDay").text(dayToday);

// use a function with moment.js in it to determin with if / else statements on what colour the time blocks / divs should be.
var allChildren = $("#container input");

function hourColor() {
	var currentHour = moment().format("HH");
	console.log(currentHour);
	if (currentHour < 11) {
		console.log("heyy");
		// allChildren.addClass("past");
	}
}
hourColor();

//this loops through each input of the html elements and places in the locally stored values.
for (var i = 0; i < storedHourInput.length; i++) {
	containerTimeBlocks
		.children()
		.children("input")
		.eq(i)
		.val(storedHourInput[i]);
}

//when this button is clicked it saves to local storage by selecting the previous sibling.
saveButton.on("click", function (event) {
	var currentTarget = $(event.currentTarget);
	var calendarHourInput = currentTarget.prev();
	var buttonIndex = currentTarget.data("buttonindex");
	taskPerHour[buttonIndex] = calendarHourInput.val();
	//saves to local storage ->
	localStorage.setItem("taskPerHour", JSON.stringify(taskPerHour));
});
