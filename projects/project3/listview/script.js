
let nameElements;

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// Get the dropdown element
var ethnicityDropdown = document.getElementById("ethnicityDropdown");

// Add event listener to toggle the dropdown content
function toggleEthnicityDropdown() {
  ethnicityDropdown.classList.toggle("show-ethnicity-dropdown");

  
}

function toggleRankByDropdown() {
  const rankbyDropdown = document.getElementById("rankbymyDropdown");
  rankbyDropdown.classList.toggle("rankbyshow");

  if (rankbyDropdown.classList.contains('rankbyshow')) {
    // Add an event listener to the "Alphabetical Order" option
    rankbyDropdown.children[1].addEventListener('click', () => {
      const names = document.querySelectorAll('.names');
      const sortedNames = Array.from(names).sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
      namesContainer.innerHTML = ''; // clear the names container
      sortedNames.forEach(name => namesContainer.appendChild(name));
    });
    
    
  } else {
    // Remove the event listener when the dropdown is closed
    rankbyDropdown.children[1].removeEventListener('click');
  }
  if (rankbyDropdown.classList.contains('rankbyshow')) {
    // Add an event listener to the "Popularity" option
    rankbyDropdown.children[0].addEventListener('click', () => {
      const names = document.querySelectorAll('.names');
      const sortedNames = Array.from(names).sort((a, b) => b.style.getPropertyValue('--wght') - a.style.getPropertyValue('--wght'));
      namesContainer.innerHTML = ''; // clear the names container
      sortedNames.forEach(name => namesContainer.appendChild(name));
    });
  } else {
    // Remove the event listener when the dropdown is closed
    rankbyDropdown.children[0].removeEventListener('click');
  }

  if (rankbyDropdown.classList.contains('rankbyshow')) {
    // Add an event listener to each .rankby-option element
    const rankbyOptions = rankbyDropdown.querySelectorAll('.rankby-option');
    rankbyOptions.forEach(option => {
      option.addEventListener('click', () => {
        const rankbyName = option.textContent; // get the text of the clicked element
        const rankbySpan = document.getElementById("rankbyname"); // get the span element
        rankbySpan.textContent = rankbyName; // replace the text of the span with the clicked element's text
      });
    });
  } else {
    // Remove the event listener when the dropdown is closed
    const rankbyOptions = rankbyDropdown.querySelectorAll('.rankby-option');
    rankbyOptions.forEach(option => {
      option.removeEventListener('click', () => {});
    });
  }


  
  
}


// Close the ethnicity dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.ethnicitydropbtn') && !event.target.matches('.ethnicitydropdown-content')) {
    var ethnicityDropdowns = document.getElementsByClassName('ethnicitydropdown-content');
    for (var i = 0; i < ethnicityDropdowns.length; i++) {
      var openEthnicityDropdown = ethnicityDropdowns[i];
      if (openEthnicityDropdown.classList.contains('show-ethnicity-dropdown')) {
        openEthnicityDropdown.classList.remove('show-ethnicity-dropdown');
      }
    }
  }
});


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.rankbydropbtn')) {
    var rankbyDropdowns = document.getElementsByClassName("rankbydropdown-content");
    for (var j = 0; j < rankbyDropdowns.length; j++) {
      var openRankByDropdown = rankbyDropdowns[j];
      if (openRankByDropdown.classList.contains('rankbyshow')) {
        openRankByDropdown.classList.remove('rankbyshow');
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

const rankbyOptions = document.querySelectorAll('.rankby-option');


rankbyOptions.forEach(option => {
  option.addEventListener('click', () => {
    const rankby = option.getAttribute('data-rankby');
    if (rankby === 'alphabetical') {
      const nameElements = Array.from(namesContainer.children);
      nameElements.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
      nameElements.forEach(nameElement => namesContainer.appendChild(nameElement));
    }
  });
});

// Note: This code assumes that the "Popularity" option is selected by default and the names are already sorted by popularity.


const namesContainer = document.getElementById('names-container');



function processBabynameData(data){
  console.log('processnames');
  data.sort((a, b) => b.cnt - a.cnt);
  
  let maxCnt = Math.max(...data.map(obj => obj.cnt));

  nameElements = data.map(obj => {
    let babyname = obj.nm;
    let cnt = obj.cnt;
    let ratio = cnt / maxCnt;
    let fontWeight = ratio * (800-200) + 200;
    let ethnicity = obj.ethcty;
    let rnk = obj.rnk;

    
    let color = getColorForEthnicity(ethnicity);
          // Check if the name needs to be transformed
    if (babyname.toLowerCase() !== babyname) {
      // Transform the name to be lowercase with the first letter capitalized
      const transformedName = babyname.charAt(0).toUpperCase() + babyname.slice(1).toLowerCase();
      babyname = transformedName;
    }
    
    const nameElement = document.createElement('div');
    nameElement.classList.add('names');
    nameElement.dataset.name = babyname;
    nameElement.innerHTML = `<div class="babyname font-var">${babyname}</div><div class="detail">Count: ${obj.cnt}<br> Rank: ${obj.rnk}</div>`;
    nameElement.style.setProperty('--wght', fontWeight);
    nameElement.style.color = '#000000';
    nameElement.setAttribute('data-rnk', rnk);

    

    // Add a mouseover event listener to change the color when hovered over
    nameElement.addEventListener('mouseover', () => {
      let hoverColor = getColorForEthnicity(ethnicity);
      nameElement.style.color = hoverColor;
      let detailElement = nameElement.querySelector('.detail');
      if (detailElement) {
        detailElement.style.borderColor = hoverColor;
      }
    });

    nameElement.addEventListener('mouseout', () => {
      nameElement.style.color = '#000000';
      let detailElement = nameElement.querySelector('.detail');
      if (detailElement) {
        detailElement.style.borderColor = '#000000';
      }
    });

    // check if the name matches the search term
    if (searchTerm.length > 0 && babyname.toLowerCase().includes(searchTerm)) {

    } 

    // Add a mouseout event listener to change the color back to the original color
    nameElement.addEventListener('mouseout', () => {
      nameElement.style.color = '#000000';
    });

      
    return nameElement;
  });

  displayNames(nameElements);

    // add event listener to namesContainer for mouseover
    function showDetails(event) {
      const nameElement = event.currentTarget;
      const detailElement = nameElement.closest('.names').querySelector('.detail');
    }
    function hideDetails(event) {
      const nameElement = event.currentTarget;
      const detailElement = nameElement.closest('.names').querySelector('.detail');

    }

}


function displayNames(nameElements) {
  console.log('displaynames');
  namesContainer.innerHTML = ''; // clear previous content
  for (let nameElement of nameElements) {
    namesContainer.appendChild(nameElement);
  }


}
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
let searchTerm = '';



searchInput.addEventListener('input', () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  // Call the function that updates the names container with the new search term
});

// Define colors for each ethnicity
const ethnicityColors = {
  'HISPANIC': '#FAD281', // Yellow
  'BLACK NON HISPANIC': '#F08584', // Black
  'BLACK NON HISP': '#F08584', // Orange
  'ASIAN AND PACIFIC ISLANDER': '#94CFB7', // Blue
  'ASIAN AND PACI': '#94CFB7', // Grey
  'WHITE NON HISPANIC': '#B0B8D7', // Grey
  'WHITE NON HISP': '#B0B8D7' // Grey
};



// Function to perform the search
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const names = document.querySelectorAll('.babyname');
  let nameFound = false;
  for (let i = 0; i < names.length; i++) {
    const nameText = names[i].textContent.toLowerCase();
    if (nameText === searchTerm) {
      nameFound = true;
      // Get the ethnicity of the name
      const ethnicity = names[i].getAttribute('data-ethnicity');
      // Get the corresponding color for the ethnicity
      const color = ethnicityColors[ethnicity];
      names[i].style.color = color; // Change the color to the corresponding color for the ethnicity
      names[i].scrollIntoView(); // Scroll to the name
      break; // Stop looping as soon as the first occurrence of the name is found
    } else {
      names[i].style.color = '#000000'; // Change the color back to black if the name is not found
    }
  }
  if (!nameFound) {
    searchInput.value = 'Name not found'; // Set the input value to 'Name not found' if the name is not found
  } else {
    searchInput.value = ''; // Clear the input value if the name is found
  }
}

// Event listener for the search button
searchButton.addEventListener('click', performSearch);

// Event listener for the input field
searchInput.addEventListener('keydown', event => {
  if (event.keyCode === 13) { // Check if the pressed key is the 'enter' key
    performSearch(); // Trigger the search function
  }
});


function fetchNames(year) {
  const url = 'https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr=' + year;
  const seenNames = {};
  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      const names = data.filter(row => {
        if (seenNames.hasOwnProperty(row.name)) {
          return false;
        }
        seenNames[row.name] = true;
        return true;
      });
      processBabynameData(names);
    })
    .catch(error => console.log(error));
}


function fetchNames(year){
  fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr='+year)
    .then(response => response.json())
    .then(data => {
      processBabynameData(data);
    })
    .catch(error => console.error(error));
}

fetchNames(2019);



// get the year
let options = document.querySelectorAll('.year');
options.forEach(option => {
  option.addEventListener('click', function(event){
    let selected_year = event.target.dataset.year;
    fetchNames(selected_year);

    
  });

});

const scrollToTopButton = document.getElementById('scroll-to-top');

function scrollHandler() {
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
}

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', scrollHandler);

const yearElements = document.querySelectorAll('.year');
yearElements.forEach(yearElement => {
  yearElement.addEventListener('click', () => {
    const year = yearElement.textContent;
    document.getElementById('yearname').textContent = year;
  });
});



