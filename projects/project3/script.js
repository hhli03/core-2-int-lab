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

function getColorForEthnicity(ethcty) {
  switch (ethcty) {
    case 'HISPANIC':
      return '#FAD281';
    case 'BLACK NON HISPANIC':
      return '#F08584'; 
    case 'ASIAN AND PACIFIC ISLANDER':
      return '#94CFB7';
    case 'WHITE NON HISPANIC':
      return '#B0B8D7'; 
    default:
      return '#808080'; // gray
  }
}

function processBabynameData(data){
  console.log(data);

  // Get the maximum value of the cnt property in the data array
  let maxCnt = Math.max(...data.map(obj => obj.cnt));

  // Iterate over the array of objects and process each object
  for (let i = 0; i < data.length; i++) {
    let babyname = data[i].nm;
    let cnt = data[i].cnt;
    let ratio = cnt / maxCnt;
    let fontWeight = ratio * (800-200) + 200; // calculate font weight based on count
    let ethnicity = data[i].ethcty;
    let rnk = data[i].rnk; // add 'rnk' property

    let color = getColorForEthnicity(ethnicity);

    // Update the name element with the current baby name and 'rnk' value
    let nameElement = document.getElementById('name');
    nameElement.innerText = babyname;
    nameElement.setAttribute('data-rnk', rnk); // store 'rnk' value as a data attribute

    // Update the font weight and color of the name element
    nameElement.style.setProperty('--wght', fontWeight);
    nameElement.style.color = color;
  }
}


function generateRandomName() {
  fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr=2019')
  .then(response => response.json())
  .then(data => {
      let randomIndex = Math.floor(Math.random() * data.length);
      let randomObject = data[randomIndex];
      let babyname = randomObject.nm;
      let cnt = randomObject.cnt;
      let maxCnt = Math.max(...data.map(obj => obj.cnt));
      let ratio = cnt / maxCnt;
      let fontWeight = ratio * (800-200) + 300; // calculate font weight based on count

      let nameElement = document.getElementById('name');
      nameElement.innerText = babyname;

      nameElement.style.setProperty('--wght', fontWeight);
      nameElement.style.color = getColorForEthnicity(randomObject.ethcty);

  })}


  