console.log('loaded');
let data = [];
let selected_year = 2019;

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}


function toggleYearDropdown() {
  var dropdown = document.getElementById("yearDropdown");
  dropdown.classList.toggle("show-year-dropdown");

  var yearDropdownItems = document.querySelectorAll(".year");
  for (var i = 0; i < yearDropdownItems.length; i++) {
    yearDropdownItems[i].onclick = function(event) {
      var year = event.target.innerText;
      document.getElementById("yearname").innerText = year;

      // Reset the name generator before updating the selected year
      resetNameGenerator();

      // Update the selected year
      selected_year = year;

      // Clear the name element
let nameElement = document.getElementById('name');
nameElement.innerText = '';

    

      // Remove the "show-year-dropdown" class from the year dropdown element
      dropdown.classList.remove("show-year-dropdown");

      // Log a message to the console to confirm that the name generator has been reset
      console.log('Name generator reset.');
    };
  }
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
      case 'BLACK NON HISP':
      return '#F08584'; 
    case 'ASIAN AND PACIFIC ISLANDER':
      return '#94CFB7';
      case 'ASIAN AND PACI':
        return '#94CFB7';
    case 'WHITE NON HISPANIC':
      return '#B0B8D7'; 
      case 'WHITE NON HISP':
        return '#B0B8D7'; 
    default:
      return '#808080'; // gray
  }
}

function processBabynameData(data) {
  console.log(data);

  // Get the maximum value of the cnt property in the data array
  let maxCnt = Math.max(...data.map(obj => obj.cnt));

  // Get the name-wrapper element
  let nameWrapper = document.querySelector('.name-wrapper');

  // Iterate over the array of objects and process each object
  for (let i = 0; i < data.length; i++) {
    let cnt = data[i].cnt;
    let ratio = cnt / maxCnt;
    let fontWeight = ratio * (800 - 200) + 200; // calculate font weight based on count
    let ethnicity = data[i].ethcty;
    let rnk = data[i].rnk; // add 'rnk' property

    let color = getColorForEthnicity(ethnicity);

    // Create a new element to display the baby name and 'rnk' value
    let nameElement = document.createElement('div');
    nameElement.classList.add('name');

    let babyname = data[i].nm.toLowerCase().replace(/(?:^|\s)\w/g, c => c.toUpperCase());

    nameElement.innerText = babyname;

    nameElement.setAttribute('data-rnk', rnk); // store 'rnk' value as a data attribute

    // Update the font weight of the name element
    nameElement.style.setProperty('--wght', fontWeight);

    // Add the name element to the container element
    let containerElement = document.getElementById('container');
    containerElement.appendChild(nameElement);


  }
}



function generateRandomName(data) {
  console.log(data, 'randomnamegenerate');
  capitalizeNames(data);

  let randomIndex = Math.floor(Math.random() * data.length);
  let randomObject = data[randomIndex];
  let babyname = randomObject.nm;
  let cnt = randomObject.cnt;
  let rnk = randomObject.rnk;
  let brth_yr = randomObject.brth_yr;
  let maxCnt = Math.max(...data.map(obj => obj.cnt));
  let ratio = cnt / maxCnt;
  let fontWeight = ratio * (800-200) + 300; // calculate font weight based on count

  let nameElement = document.getElementById('name');

  nameElement.innerText = babyname;
  nameElement.dataset.babyname = babyname; // add data attribute to store baby name

  nameElement.style.setProperty('--wght', fontWeight);
  nameElement.style.color = getColorForEthnicity(randomObject.ethcty);

  let detailElement = document.querySelector('.detail');
  detailElement.style.borderColor = getColorForEthnicity(randomObject.ethcty);
  detailElement.innerHTML = `Count: ${cnt} <br>Rank: ${rnk}`;
  detailElement.style.color = getColorForEthnicity(randomObject.ethcty);

}


function capitalizeNames(data) {
  for (var i = 0; i < data.length; i++) {
    var name = data[i].nm.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    data[i].nm = name;
  }
  return data;
}




function fetchNames(year){
  fetch(`https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr=${year}`)
    .then(response => response.json())
    .then(jsondata => {
      data = jsondata;
      generateRandomName(data);
      updateYearName(year); 
    })
    .catch(error => console.error(error));
}

function updateYearName(year) {
  document.getElementById('yearname').textContent = year;
}


let options = document.querySelectorAll('.year');
options.forEach(option => {
  option.addEventListener('click', function(event){
    let selected_year = event.target.dataset.year;
    fetchNames(selected_year);
  });
});


fetchNames(2019);





let button = document.querySelector('#button');
button.addEventListener('click', function() {
  console.log('Button clicked!');
  generateRandomName(data);
});
