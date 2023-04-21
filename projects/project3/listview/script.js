function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleRankByDropdown() {
  document.getElementById("rankbymyDropdown").classList.toggle("rankbyshow");
}

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
    case 'ASIAN AND PACIFIC ISLANDER':
      return '#94CFB7';
    case 'WHITE NON HISPANIC':
      return '#B0B8D7'; 
    default:
      return '#808080'; // gray
  }
}
const namesContainer = document.getElementById('names-container');

function processBabynameData(data){
  data.sort((a, b) => b.cnt - a.cnt);
  
  let maxCnt = Math.max(...data.map(obj => obj.cnt));

  const nameElements = data.map(obj => {
    let babyname = obj.nm;
    let cnt = obj.cnt;
    let ratio = cnt / maxCnt;
    let fontWeight = ratio * (800-200) + 200;
    let ethnicity = obj.ethcty;
    let rnk = obj.rnk;

    let color = getColorForEthnicity(ethnicity);

    const nameElement = document.createElement('div');
    nameElement.classList.add('names');
    nameElement.textContent = babyname;
    nameElement.style.setProperty('--wght', fontWeight);
    nameElement.style.color = '#000000';
    nameElement.setAttribute('data-rnk', rnk);

    // Add a mouseover event listener to change the color when hovered over
    nameElement.addEventListener('mouseover', () => {
      let hoverColor = getColorForEthnicity(ethnicity);
      nameElement.style.color = hoverColor;
    });

    // Add a mouseout event listener to change the color back to the original color
    nameElement.addEventListener('mouseout', () => {
      nameElement.style.color = '#000000';
    });

    return nameElement;
  });

  displayNames(nameElements);
}


function displayNames(nameElements) {
  namesContainer.innerHTML = ''; // clear previous content
  for (let nameElement of nameElements) {
    namesContainer.appendChild(nameElement);
  }
}

function fetchNames(){
  fetch('https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr=2019')
    .then(response => response.json())
    .then(data => {
      processBabynameData(data);
    })
    .catch(error => console.error(error));
}

fetchNames();
