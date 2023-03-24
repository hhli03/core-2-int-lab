
//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python

fetch('../assets/snacks.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processSnacks(data);
  })
  .catch(error => console.log(error));


function processSnacks( data ){
    let key = parseInt( document.querySelector('body').dataset.snackid );
    console.log(key);

  data.forEach( function(item, index){
    // console.log(item, index);

    if ( item.id == key ){

        let nextno = key+1;
        console.log('NEXT PAGE NUMBER', nextno);

        let newItem = document.createElement("div");
        // newItem.style.cssText = `font-size: ${usage}px`;
        newItem.classList.add('grid');
        newItem.innerHTML = `
        <div id="leftbox">
          <div class="snackno">${item.snackno}</div>
          <div class="snacknameeng">${item.snacknameeng}</div>
          <div class="snackimg"><img src="${item.img}"></div>
          <div class="cantonesepronunciation">${item.cantonesepronunciation}</div>
          <div class="snacknamechi">${item.snacknamechi}</div>
        </div>
        <div id="rightbox">
        <div class="smallcontainer">
        <div class="story">${item.story.replace('\n\n', '<br><br>')}</div>
        <div class="brand"><span class="label">Brand<br></span>${item.brand}</div>
        <div class="category"><span class="label">Category<br></span>${item.category}</div>
        <div class="origin"><span class="label">Origin<br></span>${item.origin}</div>
        <div class="flavors"><span class="label">Flavors<br></span><span class="list">${item.flavors}</span></div>
        <div class="personalrating"><span class="label">Personal Rating<br></span>${item.personalrating}</div>
        </div>

        <div id="buttongrid">
        <div class="nextbutton"><a href="../snack${nextno}/">NEXT</a></div>
        <div class="homebutton"><a href="../index.html">HOME</div>
        </div>
        </div>`;

        container.appendChild(newItem);    
    }
  });
}

