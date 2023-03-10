// console.log('hi!');

let letters = ['a', 'b', 'c']; //an array;

let snackObject = {
  "id": 1,
  "snacknameeng": "MAMEE Snack Noodles",
  "snacknamechi": "媽咪麵",
  "cantonesepronunciation": "maa1mi4 min6",
  "origin": "Hong Kong",
  "img": "mamee-snack-noodles.jpeg",
  "description": "a crunchy noodle snack where you simply crush the noodles up before opening, add in the seasoning powder, and shake along till everything is mixed.",
  "netweight": "60g",
  "category": "snack noodles",
  "priceusd": "$2.83",
  "flavors": "original",
  "brand": "Mamee",
  "personalrating": 5,
  "story": "This crunchy noodle snack was a staple in many households in Hong Kong, and it was one of my all-time favorites. Whenever I opened a pack of MAMEE Snack Noodles, the first thing I would do is crush the noodles into small pieces inside the packet. Then, I would sprinkle in the seasoning powder and shake everything up until the noodles were evenly coated.\n\nThe result was a savory, crunchy snack that was perfect for satisfying my hunger pangs. The seasoning powder had just the right amount of saltiness and spice, and the texture of the crushed noodles was addictively satisfying.\n\nI loved snacking on MAMEE Snack Noodles during my after-school activities, whether it was hanging out with friends or playing sports. The snack was easy to carry around in my backpack, and I could quickly whip up a serving whenever I needed a quick boost of energy.\n\nAs I grew older, I continued to enjoy MAMEE Snack Noodles as a comforting snack. Whenever I missed the taste of home, I would make sure to stock up on a few packets of the snack."
  };
//setup container element
let container = document.getElementById("leftbox");

// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python
fetch('./assets/snacks.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processSnacks(data);
  })

  .catch(error => console.log(error));


function sayHello(){
  console.log('Hello');
}

function processSnacks( data ){
  data.forEach( function(item, index){
    console.log(item, index);
    let newItem = document.createElement("div");
    newItem.classList.add("icon");
    newItem.classList.add(item.categorykey);
    // newItem.style.cssText = `font-size: ${usage}px`;
    newItem.innerHTML = `
      <!--commenting out <div class="image"><img src="assets/images/${item.img}.jpg"></div>-->
      <div class="snacknameeng">${item.snacknameeng}</div>
      <div class="cantonesepronunciation">${item.cantonesepronunciation}</div>
      <div class="snack1img">${item.img}</div>
      <div class="snacknamechi">${item.snacknamechi}</div>`;

    leftbox.appendChild(newItem);    
  });
}



 // newItem.style.cssText = `font-size: ${usage}px`;
    //if setting up new pages /links
    // newItem.innerHTML = `
    // <a href="${item.linkname}.html"><div class="category">${item.category}</div>
    // <div class="emoji">${item.emoji}</div>
    // <div class="detail">
    //     ${item.emoji}<br>
    //     <p class="description">${item.description}</div>
    // </div></a>
    // `;
sayHello();
