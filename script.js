function shareByEmail() {
  var email = prompt("Enter recipient email address:");
  if (email !== null) {
    var subject = "Check out this event";
    var body = "Hey, I thought you might be interested in this event: Lunch with Emily. Check it out here: " + window.location.href;
    var href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = href;
  }
}

function showAvailableTimes() {
  // // Define the available times as an array of Date objects
  // var availableTimes = [
  //   new Date('2023-04-10T10:00:00'),
  //   new Date('2023-04-10T11:00:00'),
  //   new Date('2023-04-10T13:00:00'),
  //   new Date('2023-04-10T14:00:00'),
  //   new Date('2023-04-10T15:00:00'),
  // ];

  // // Get the container element where we will display the available times
  // var container = document.getElementById('available-times');

  // // Clear the container in case there is any existing content
  // container.innerHTML = '';

  // // Iterate over the available times and create a button for each one
  // for (var i = 0; i < availableTimes.length; i++) {
  //   var time = availableTimes[i];

  //   // Create a new button element
  //   var button = document.createElement('button');

  //   // Set the button text to the formatted date string
  //   button.textContent = time.toLocaleString();

  //   // Add a click event listener that sets the selected time
  //   button.addEventListener('click', function() {
  //     // Set the selected time input field to the clicked time
  //     var selectedTimeField = document.getElementById('selected-time');
  //     selectedTimeField.value = time.toISOString();

  //     // Hide the available times container
  //     container.style.display = 'none';
  //   });

  //   // Add the button to the container
  //   container.appendChild(button);
  // }

  // // Show the container
  // container.style.display = 'block';
  var email = prompt("Enter recipient email address:");
  if (email !== null) {
    var subject = "Check out this event";
    var body = "Hey, I thought you might be interested in this event: Lunch with Emily. Check it out here: " + window.location.href;
    var href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = href;
  }
