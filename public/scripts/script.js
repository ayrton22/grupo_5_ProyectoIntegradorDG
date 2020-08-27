document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    function myFunction2() {
        document.getElementById("drop-cont2").classList.toggle("show2");
    }

    function myFunction3() {
      document.querySelector(".inactive-profile-dropdown").classList.toggle("show3");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.header-nav__dropdown-button')) {
      var dropdowns = document.getElementsByClassName("header-nav__sub-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

    if (!event.target.matches('.header-nav__language-dropdown')) {
        var dropdowns2 = document.getElementsByClassName("header-nav__language-sub-list");
        var j;
        for (j = 0; j < dropdowns2.length; j++) {
          var openDropdown2 = dropdowns2[j];
          if (openDropdown2.classList.contains('show2')) {
            openDropdown2.classList.remove('show2');
          }
        }
    }

    if (!event.target.matches('.nav__right-profile-options-imgCont')) {
      var dropdowns3 = document.getElementsByClassName("inactive-profile-dropdown");
      var k;
      for (k = 0; k < dropdowns3.length; k++) {
        var openDropdown3 = dropdowns3[k];
        if (openDropdown3.classList.contains('show3')) {
          openDropdown3.classList.remove('show3');
        }
      }
  }
 }
