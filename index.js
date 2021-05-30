const h1 = document.querySelector("#h1");
const h12 = document.querySelectorAll("#h2")[1];
const cataegory = document.querySelector("#type");

const requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch("https://v2.jokeapi.dev/joke/Any", requestOptions)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    if (data.type === "twopart") {
      cataegory.innerText = `Category:${data.category}`;
      h1.innerHTML = `${data.setup}`;
      h2.innerHTML = `${data.delivery}`;
    } else {
      cataegory.innerHTML = `Category:${data.category}`;
      h1.innerHTML = data.joke;
    }
  });
