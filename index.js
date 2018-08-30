console.log("LETS GO KNICKS")
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
});
list.addEventListener("mouseout", (e) => {
  e.target.classList.remove("selected");
});
list.addEventListener("dblclick", (e) => {
  list.removeChild(e.target);
});

//EVENT FOR NAME CHANGE
const userName = document.querySelector("#user");

userName.addEventListener("change", () => {
  document.querySelector("#greeting").innerHTML = `
  <p>Greetings, ${userName.value}</p>
  `
})

const api = 'yxiX3reOVJnwyOsUaAIQ0zmke2k4YP6L'

//AJAX REQUESTS
document.addEventListener("DOMContentLoaded", () => {
  axios.get("api.giphy.com/v1/gifs/random?api_key=yxiX3reOVJnwyOsUaAIQ0zmke2k4YP6L")
      .then((response) => {
          console.log(response.data)
      }).catch(error => console.log(error))
  axios.get("api.openweathermap.org/data/2.5/weather?q=phoenix&APPID=1ea5c5d3585bd190c69d54fd139d6ddd")
      .then((response) => {
          console.log(response)
      })
      .catch(error => console.log(error))
})

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

  document.querySelector('#time').innerHTML = `${hours}:${taco(minutes)}:${taco(seconds)}`
  function taco(num) {
    if (num < 10) {
      num = '0' + num
    }
    return num;
  }
}
setInterval(clock, 1000);
