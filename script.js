let form = document.getElementById('forms'); // Form element
let data = document.getElementById('data'); // Input for city name
let info = document.getElementById('info'); // Element to display weather information
let apiKey = "7f2e99b538b5b087e58122e768972b8e"; // API key

form.addEventListener('submit', (event) => {
    event.preventDefault();
    info.textContent = ""; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.value}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response)=>{
            console.log(response);
            return response.json();
        })
        .then((response) => {
            console.log(response)
            info.innerHTML=`<h1>City Name is ${response.name}</h1>
            <p>Temperature is ${response.main.temp}<sup>o</sup> Clouds are ${response.weather[0].description}</p>`
        })
        .catch((error)=>{
            alert("Enter valid city name");
            data.innerHTML="please enter valid city name";
        })
        
});
