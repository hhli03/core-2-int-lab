const myList = document.querySelector("div");
const myRequest = new Request("color.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
	console.log(data);

    for (const color of data.colors) {
      const newItem = document.createElement("div");
      newItem.appendChild(document.createElement("strong")).textContent =
        color.Name;
      newItem.append(`${color.Hexcode} `);
      newItem.appendChild(
        document.createElement("strong")
      ).style.background = `${color.Hexcode}`;
      newItem.append(`${color.Colorname} `);
      myList.appendChild(newItem);      
    }


  })
  .catch(console.error);