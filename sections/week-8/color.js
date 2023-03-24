
//setup container element
let container = document.getElementById("container");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python

fetch('color.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processColor(data);
  })
  .catch(error => console.log(error));


function processColor( data ){
    let key = parseInt(document.querySelector('div').dataset.colorid );
    console.log(key);

  data.forEach( function(item, index){
    // console.log(item, index);

    if ( item.id == key ){
 
        let newItem = document.createElement("div");
        // newItem.style.cssText = `font-size: ${usage}px`;
        newItem.classList.add('grid');
        newItem.innerHTML = `
        <div id="leftbox">
          <div class="colorname">${item.colorname}</div>
          <div class="hexcode">${item.hexcode}</div>
          <div class="color1">${item.color}</div>
          
          </div>`;

        container.appendChild(newItem);    
    }
});
}

