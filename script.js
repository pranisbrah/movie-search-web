document.addEventListener("DOMContentLoaded", () => {
    const defaultTitle = "Rocky";
    const apikey = "b4cdfba7";
    const defaultUrl = `https://www.omdbapi.com/?t=${defaultTitle}&apikey=${apikey}`;
    const movieTitle = document.getElementById("movieTitle");
    const director = document.getElementById("director");
    const image = document.getElementById("image");
  
    fetch(defaultUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movieTitle.innerHTML = `Title: <b>${data.Title}</b>`;
        director.innerHTML = `Director: <b>${data.Director}</b>`;
        image.innerHTML = `<img src="${data.Poster}" alt="Default Movie Image" style="max-width: 160px;">`;
      })
      .catch((error) => {
        console.log("Error:", error);
        movieTitle.innerHTML = `Title: <b>${defaultTitle}</b>`;
        director.innerHTML = "";
        image.innerHTML = "";
      });
  });
  
  const searchButton = document.querySelector("button");
  const inputField = document.querySelector("input");
  const movieTitle = document.getElementById("movieTitle");
  const director = document.getElementById("director");
  const image = document.getElementById("image");
  
  searchButton.addEventListener("click", () => {
    const title = inputField.value;
    const apikey = "b4cdfba7";
    const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movieTitle.innerHTML = `Title: <b>${data.Title}</b>`;
        director.innerHTML = `Director: <b>${data.Director}</b>`;
        image.innerHTML = `<img src="${data.Poster}" alt="Movie Poster" style="max-width: 160px;">`;
      })
      .catch((error) => {
        console.log("Error:", error);
        movieTitle.innerHTML = `Title: <b>${title}</b>`;
        director.innerHTML = "";
        image.innerHTML = "";
      });
  });
  