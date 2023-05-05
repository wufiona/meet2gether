function beSelected(boxId) {
  console.log("selecting..." + document.getElementById(boxId).style.backgroundColor);
  if (document.getElementById(boxId).style.backgroundColor == "var(--light-blue)"){
    document.getElementById(boxId).style.backgroundColor = "#FFFFFF";
  } else {
    document.getElementById(boxId).style.backgroundColor = "var(--light-blue)";
  }
}
