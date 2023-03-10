
//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python
fetch('/assets/snacks.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processSnacks(data);
  })

  .catch(error => console.log(error));



function processSnacks( data ){
    let key = document.querySelector('body').dataset.snackid;
    console.log(key);

  data.forEach( function(item, index){
    console.log(item, index);

    if ( item.id == key ){
        let newItem = document.createElement("div");
        // newItem.style.cssText = `font-size: ${usage}px`;
        newItem.innerHTML = `
        <div id="leftbox">
          <div class="snackno">SNACK 1</div>
          <div class="snacknameeng">${item.snacknameeng}</div>
          <div class="snackimg"><img src="${item.img}"></div>
          <div class="cantonesepronunciation">${item.cantonesepronunciation}</div>
          <div class="snacknamechi">${item.snacknamechi}</div>
        </div>
        <div id="rightbox">
        <div class="smallcontainer">
        <div class="story">${item.story}</div>
        <div class="brand">${item.brand}</div>
        <div class="category">${item.category}</div>
        <div class="origin">${item.origin}</div>
        <div class="flavors">${item.flavors}</div>
        <div class="personalrating">${item.personalrating}</div>
        </div>

        <div id="buttongrid">
        <div class="nextbutton">NEXT</div>
        <div class="homebutton">HOME</div>
        </div>
        </div>`;

        container.appendChild(newItem);    
    }
  });
}

