console.log('loaded');

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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
        }
      }
    }
  }


  fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr=2019')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processBabynameData(data);
  })
  .catch(error => console.log(error));



function processBabynameData(data){
     console.log(data);
     let babyname = data["nm"];

     document.getElementById('name').innerText = babyname;



    let fontWeight = babyname*10;// wght, goes from 200 to 800 — font weight
    console.log(fontWeight);

 


    let element = document.querySelector('name');
    element.style.setProperty('--wght', fontWeight);


}