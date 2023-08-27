const jokeBtn = document.querySelector("#joke-btn");
const joke = document.querySelector("#joke");

function jokeGenerator(e) {
  const xhr = new XMLHttpRequest();

  //getting jokes from api
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      let data = JSON.parse(this.responseText);

      joke.textContent = data.value;
    }
  };

  xhr.send();
}

jokeBtn.addEventListener("click", jokeGenerator);
