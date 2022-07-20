const jokeButton = document.querySelector (`.joke-button`);
const jokeContainer = document.querySelector(`.joke-container`);
const likesButton = document.querySelector(`.button`);
likesButton.innerText = 'HAHAHA'

const getJoke = async () => {
    const apiData = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
    const jsonData = await apiData.json()
    const joke = jsonData.joke
    jokeContainer.innerText= joke
    jokeContainer.append(likesButton)
  }

  jokeButton.addEventListener('click',getJoke)