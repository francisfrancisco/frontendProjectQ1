console.log("LETS GO KNICKS")
// TODOLIST
const lis = document.querySelectorAll("li");
const newTask = document.querySelector("#task");

newTask.addEventListener("change", (e) => {
 e.preventDefault();
 document.querySelector("ul").innerHTML += `<li>${newTask.value}</li>`;
 newTask.value = "";
})

list.addEventListener('click', (e) => {
  e.target.classList.add("selected");
})

//EVENT FOR NAME CHANGE
const userName = document.querySelector("#user");

userName.addEventListener("change", () => {
  document.querySelector("#greeting").innerHTML = `<p>Greetings, ${userName.value}</p>`
})

//AJAX REQUESTS
// document.addEventListener("DOMContentLoaded", () => {
//   axios.get(``)
//       .then((response) => {
//           console.log(response)
//       })
// })

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
