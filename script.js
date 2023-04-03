function shareByEmail() {
  var email = prompt("Enter recipient email address:");
  if (email !== null) {
    var subject = "Check out this event";
    var body = "Hey, I thought you might be interested in this event: Lunch with Emily. Check it out here: " + window.location.href;
    var href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = href;
  }
}
