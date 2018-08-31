console.log("LETS GO KNICKS")

const weatherDescription = document.querySelector("#weather");
const search = document.querySelector("#search");

//CLOCK
function clock() {
  // We create a new Date object and assign it to a variable called "time".
  let time = new Date();
  // Access the "getHours" method on the Date object with the dot accessor.
  let hours = time.getHours();
  // Access the "getMinutes" method with the dot accessor.
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if(hours > 12){
    hours = hours-12;
  }else if(hours === 0){
    hours = hours+12;
  }
  if(hours)

  document.querySelector('#time').innerHTML = `${hours}:${taco(minutes)}:${taco(seconds)}`
  function taco(num) {
    if (num < 10) {
      num = '0' + num
    }
    return num;
  }
}
setInterval(clock, 1000);


// TODOLIST
const lis = document.querySelectorAll("li");
const task = document.querySelector("#task");
const list = document.querySelector("#list")

task.addEventListener("change", (e) => {
 e.preventDefault();
 document.querySelector("ul").innerHTML += `<li>${task.value}</li>`;
 task.value = "";
})

list.addEventListener('click', (e) => {
  e.target.classList.toggle("done");
});
list.addEventListener("mouseover", (e) => {
  e.target.classList.add("selected");
  // console.log(e.target)
});
list.addEventListener("mouseout", (e) => {
  e.target.classList.remove("selected");
});
list.addEventListener("dblclick", (e) => {
  list.removeChild(e.target)
});

//EVENT FOR NAME CHANGE
const userName = document.querySelector("#user");

userName.addEventListener("change", () => {
  document.querySelector("#greeting").innerHTML = `
  <h1>Greetings, ${userName.value}</h1>
  `
});

//AJAX REQUESTS
axios.get("http://api.giphy.com/v1/gifs/random?api_key=YSSoblb6EYNT9VSRBNo29aU9RHJWCxch&tag=computers")
  .then((response) => {
    console.log(response.data.data)
    console.log(response.data.data.images['fixed_height_still'].url);
    document.querySelector("img").src = response.data.data.images['fixed_height_downsampled'].url

  })
  .catch(error => console.log(error));

axios.get("http://api.openweathermap.org/data/2.5/weather?q=phoenix&APPID=1ea5c5d3585bd190c69d54fd139d6ddd&units=imperial")
  .then((response) => {
    const weather = response.data.weather[0].description;
    const temp = Math.floor(response.data.main.temp);
    console.log(response.data.weather[0].description);
    // console.log(response.data)
    if(weather === "clear sky"){
      weatherDescription.innerHTML = `<p>${temp}º <i class="far fa-sun"></i> ${response.data.weather[0].description}</p>`;
    }else if(weather === "few clouds" || weather === "scattered clouds" || weather === "broken clouds"){
      weatherDescription.innerHTML = `<p>${temp}º <i class="fas fa-cloud"></i> ${response.data.weather[0].description}</p>`;
    }else if(weather === "shower rain" || weather === "rain"){
      weatherDescription.innerHTML = `<p>${temp}º <i class="fas fa-umbrella"></i> ${response.data.weather[0].description}</p>`;
    }else if(weather === "thunderstorm"){
      weatherDescription.innerHTML = `<p>${temp}º <i class="fas fa-bolt"></i> ${response.data.weather[0].description}</p>`;
    }else if(weather === "snow"){
      weatherDescription.innerHTML = `<p>${temp}º <i class="fas fa-snowflake"></i> ${response.data.weather[0].description}</p>`;
    }else{
      weatherDescription.innerHTML = `<p>${temp}º <i class="fas fa-braille"></i> ${response.data.weather[0].description}</p>`;
    }
  })
  .catch(error => console.log(error));

document.querySelector("#bordedButton").addEventListener("click", (e) => {
  axios.get("http://boredapi.com/api/activity/?type=recreational")
    .then((response) => {
    console.log(response.data.activity);
    document.querySelector("#bored").innerHTML = "";
    document.querySelector("#bored").insertAdjacentHTML("beforeend", `<p>${response.data.activity}</p>`)
    })

  })
  search.addEventListener("change", (e) => {
    window.open(`https://www.google.com/search?q=${search.value}`)
  })
