const h1 = document.querySelector("#h1");
const h12 = document.querySelectorAll("#h2")[1];

const callApi = (para) => {
  if (para === 1) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://v2.jokeapi.dev/joke/Any?type=twopart", requestOptions)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        h1.innerHTML = `setup: ${data.setup}`;
        h2.innerHTML = `Delivery: ${data.delivery}`;
      });
  } else if (para === 2) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://v2.jokeapi.dev/joke/Any?type=single", requestOptions)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data.joke);
      });
  }
};

let btn1 = document
  .querySelector("#btn1")
  .addEventListener("fetch", callApi(1));
let btn2 = document
  .querySelector("#btn2")
  .addEventListener("fetch", callApi(2));
