console.log('loaded');

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

function toggleYearDropdown() {
  var dropdown = document.getElementById("yearDropdown");
  dropdown.classList.toggle("show-year-dropdown");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.yeardropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var yearDropdowns = document.getElementsByClassName("yeardropdown-content");
    for (var j = 0; j < yearDropdowns.length; j++) {
      var openYearDropdown = yearDropdowns[j];
      if (openYearDropdown.classList.contains('show')) {
        openYearDropdown.classList.remove('show');
      }
      if (openYearDropdown.classList.contains('show-year-dropdown')) {
        openYearDropdown.classList.remove('show-year-dropdown');
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
    let babyname = event.target.dataset.name;
    let cnt = data[i].cnt;
    let ratio = cnt / maxCnt;
    let fontWeight = ratio * (800-200) + 200; // calculate font weight based on count
    let ethnicity = data[i].ethcty;
    let rnk = data[i].rnk; // add 'rnk' property

    let color = getColorForEthnicity(ethnicity);

    // Create a new element to display the baby name and 'rnk' value
    let nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.innerText = babyname;
    nameElement.setAttribute('data-rnk', rnk); // store 'rnk' value as a data attribute

    // Update the font weight and color of the name element
    nameElement.style.setProperty('--wght', fontWeight);
    nameElement.style.color = color;


    // Add the name element to the container element
    let containerElement = document.getElementById('container');
    containerElement.appendChild(nameElement);

nameElement.addEventListener('mouseenter', (event) => {
  event.target.setAttribute('data-babyname', babyname);

  showDetail(event);
});


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
      nameElement.addEventListener('mouseenter', showDetail); // add event listener to the name element

      nameElement.style.setProperty('--wght', fontWeight);
      nameElement.style.color = getColorForEthnicity(randomObject.ethcty);

  })}


  function showDetail(event) {
    // Get the baby name from the data attribute
    let babyname = event.target.dataset.babyname;
    // Make an API request to get the 'rnk' and 'cnt' data for the current baby name
    fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr=2019' + babyname + '"')
      .then(response => response.json())
      .then(data => {
        // Check whether the data array is empty
        if (data.length === 0) {
          console.log('No data found for ' + babyname);
          return;
        }
        // Get the 'rnk' and 'cnt' values from the data object
        let rnk = data[0].rnk;
        let cnt = data[0].cnt;
  
        // Create a new element to display the 'rnk' and 'cnt' data
        let detailElement = document.createElement('div');
        detailElement.classList.add('detail');
        detailElement.innerHTML = `
          <p>Rank: ${rnk}</p>
          <p>Count: ${cnt}</p>
        `;
  
        // Add the detail element to the container element
        let containerElement = document.getElementById('container');
        containerElement.appendChild(detailElement);
      });
  }
  


