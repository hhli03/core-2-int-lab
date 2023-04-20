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

function processBabynameData(data){
  // Filter the data array to only include names from 2019
  data = data.filter(obj => obj.yr === 2019);

  // Get the maximum value of the cnt property in the filtered data array
  let maxCnt = Math.max(...data.map(obj => obj.cnt));

  // Get the container element where the names will be displayed
  let namesContainer = document.getElementById('names-container');
  
  // Clear the container element
  namesContainer.innerHTML = '';

  // Iterate over the filtered array of objects and process each object
  for (let i = 0; i < data.length; i++) {
    let babyname = data[i].nm;
    let cnt = data[i].cnt;
    let ratio = cnt / maxCnt;
    let fontWeight = ratio * (800-200) + 200; // calculate font weight based on count
    let ethnicity = data[i].ethcty;
    let rnk = data[i].rnk; // add 'rnk' property

    let color = getColorForEthnicity(ethnicity);

    // Create a new element for the name
    let nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.innerText = babyname;
    nameElement.setAttribute('data-rnk', rnk); // store 'rnk' value as a data attribute
    nameElement.style.setProperty('--wght', fontWeight);
    nameElement.style.color = color;

    // Add the name element to the container
    namesContainer.appendChild(nameElement);
  }
}
