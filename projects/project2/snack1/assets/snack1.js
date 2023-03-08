// console.log('hi!');

let letters = ['a', 'b', 'c']; //an array;

let snackObject = {
    "id": 1,
    "snack-name-eng": "MAMEE Snack Noodles",
    "snack-name-chi": "媽咪麵",
    "cantonese-pronunciation": "maa1mi4 min6",
    "img": "mamee-snack-noodles.jpeg",
    "description": "a crunchy noodle snack where you simply crush the noodles up before opening, add in the seasoning powder, and shake along till everything is mixed.",
    "net-weight": "60g",
    "category": "snack noodles",
    "price-usd": "$2.83",
    "flavors": "original",
    "brand": "Mamee",
    "personal-rating (1-5)": 5,
    "story/memory": "This crunchy noodle snack was a staple in many households in Hong Kong, and it was one of my all-time favorites. Whenever I opened a pack of MAMEE Snack Noodles, the first thing I would do is crush the noodles into small pieces inside the packet. Then, I would sprinkle in the seasoning powder and shake everything up until the noodles were evenly coated.\n\nThe result was a savory, crunchy snack that was perfect for satisfying my hunger pangs. The seasoning powder had just the right amount of saltiness and spice, and the texture of the crushed noodles was addictively satisfying.\n\nI loved snacking on MAMEE Snack Noodles during my after-school activities, whether it was hanging out with friends or playing sports. The snack was easy to carry around in my backpack, and I could quickly whip up a serving whenever I needed a quick boost of energy.\n\nAs I grew older, I continued to enjoy MAMEE Snack Noodles as a comforting snack. Whenever I missed the taste of home, I would make sure to stock up on a few packets of the snack."
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
      <div class="year">${item['snack-name-eng']}</div>`;
    leftbox.appendChild(newItem);    
  });
}

sayHello();
