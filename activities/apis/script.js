
fetch('https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&appid=a0be2ca7d3101a5b3e8a3bbf580143f6&units=imperial')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    processWeatherData(data);
  })
  .catch(error => console.log(error));


function processWeatherData(data){
     console.log(data);
     let currentTemp = data["main"]["temp"];
     let feelsTemp = data["clouds"]["all"];

     document.getElementById('temp').innerText = currentTemp;
     document.getElementById('feels').innerText = feelsTemp;


    let fontWeight = feelsTemp*10;// wght, goes from 100 to 1000 — font weight
    console.log(fontWeight);

 


    let element = document.querySelector('.highlight');
    element.style.setProperty('--wght', fontWeight);


}
