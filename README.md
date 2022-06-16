# Third-Party-APIs-Challenge-Work-Day-Schedule

# Description

A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

# Planning Notes:

1. create the HTML of the hour blocks in the calendar 9 - 5 ✔️
   -create these using divs

2. current day displayed at top of calendar ✔️
   -enter this using moment.js

3. depending on the time of day - the blocks are color coded to show past, present, and future.
   -use a function with moment.js in it to determin with if / else statements on what colour the time blocks / divs should be.

4. be able to click into the timeblock to enter an event name for that hour and a save button on each of the blocks that saves the event in local storage.
    - give each time block its own <input?> for each timeblock that when saved - it then displays the value in the box.
    - create a for loop that checks the input boxes previous sibling, and when the save button is clicked it saves that value to local storange. The value is then pulled from local storage and saved into an array index. When the page is refreshed the text is retrieved from that array index and displayed to the relevent hour.

# Screenshots:

![Screenshot1](./assets/images/HTMLdone.jpg)
![Screenshot2](./assets/images/finishedProject.PNG)

# Links:

GitHub: https://github.com/NessJade96/Third-Party-APIs-Challenge-Work-Day-Scheduler
Deploy: https://nessjade96.github.io/Third-Party-APIs-Challenge-Work-Day-Scheduler/

# Commit notes:

Commit 1:
Created repo - created css, js, and readme files and linked to index.html. Wrote up a plan and started on the html. Had to reset up the fontawesome links in the head for the save/ floppydisk icon.

Commit 2:
Used moment.js to add in the current date in the <header>

Commit 3:
Started to try and figure out the time blocks color - but decided to move onto the saving calendar events. I created click handler on the save buttons so they save and continue to display the value once typed - even when the page is refreshed. Only working on the 9am hour atm.

Commit 4:
Wanting to save this code as I am going to try something different.

Commit 5:
Played around with different ways to set and get the local storage array information. I ended up creating a saveButton that on a click event triggers the previous sibling (the input value) to be saved into an array at the buttons index number. I get the data attribute of each button to equal an index number. Then in a for loop it retreives the array values and displays into the html inputs using dom traveral selectors. Next I will work of the hour colours.

Commit 6:
Used an if / else for loop on what colour the time blocks / divs should be. Did final checks to make sure it fits the criteria, added some screenshots, and uploaded.
