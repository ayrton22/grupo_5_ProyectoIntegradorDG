let currentTab = 0; 
showTab(currentTab); 

function showTab(tabNumber) {

  let classAsign = document.getElementsByClassName("tab");
  classAsign[tabNumber].style.display = "block";

  if (tabNumber == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (tabNumber == (classAsign.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Registrarse";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }

  fixStepIndicator(tabNumber)
}

function nextPrev(tabNumber) {

  let classAsign = document.getElementsByClassName("tab");

  if (tabNumber == 1 && !validateForm()) return false;

  classAsign[currentTab].style.display = "none";

  currentTab = currentTab + tabNumber;

  if (currentTab >= classAsign.length) {

    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {

  let classAsign, y, i, valid = true;
  classAsign = document.getElementsByClassName("tab");
  y = classAsign[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {

    if (y[i].value == "") {

      y[i].className += " invalid";

      valid = false;
    }
    if(y[i].value != ""){
      y[i].className += " valid";
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(tabNumber) {

  let i, classAsign = document.getElementsByClassName("step");
  for (i = 0; i < classAsign.length; i++) {
    classAsign[i].className = classAsign[i].className.replace(" active", "");
  }

  classAsign[tabNumber].className += " active";
}