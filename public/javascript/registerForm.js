let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(tabNumber) {
  // This function will display the specified tab of the form...
  let classAsign = document.getElementsByClassName("tab");
  classAsign[tabNumber].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (tabNumber == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (tabNumber == (classAsign.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(tabNumber)
}

function nextPrev(tabNumber) {
  // This function will figure out which tab to display
  let classAsign = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (tabNumber == 1 && !validateForm()) return false;
  // Hide the current tab:
  classAsign[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + tabNumber;
  // if you have reached the end of the form...
  if (currentTab >= classAsign.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let classAsign, y, i, valid = true;
  classAsign = document.getElementsByClassName("tab");
  y = classAsign[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(tabNumber) {
  // This function removes the "active" class of all steps...
  let i, classAsign = document.getElementsByClassName("step");
  for (i = 0; i < classAsign.length; i++) {
    classAsign[i].className = classAsign[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  classAsign[tabNumber].className += " active";
}