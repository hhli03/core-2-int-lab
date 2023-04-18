console.log('loaded');

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("rankbymyDropdown").classList.toggle("rankbyshow");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');

              if (!event.target.matches('.rankbydropbtn')) {
      var dropdowns = document.getElementsByClassName("rankbydropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('rankbyshow')) {
          openDropdown.classList.remove('rankbyshow');
        }
        }
      }
    }
  }


  
  function myFunction() {
    document.getElementById("rankbymyDropdown").classList.toggle("rankbyshow");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.rankbydropbtn')) {
      var dropdowns = document.getElementsByClassName("rankbydropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('rankbyshow')) {
          openDropdown.classList.remove('rankbyshow');
        }
      }
    }
  }

    }}
