console.log(`Hello World`)

const form = document.querySelector(`form`)
const message = document.querySelector(`#message`)

const addMovie = (evt) => {
    evt.preventDefault()
    let inputField = document.querySelector(`input`)

    let movie = document.createElement(`li`)
    let movieTitle = document.createElement(`span`)
    let deleteBtn = document.createElement(`button`)

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener(`click`,crossOffMovie)
    
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener(`click`, deleteMovie)

    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)

    document.querySelector(`ul`).appendChild(movie)
    inputField.value = ``
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.previousSibling.textContent} was deleted!`
    revealMessage()
}

const crossOffMovie = (even) => {
    even.target.classList.toggle(`checked`)
    if (even.target.classList.contains(`checked`)){
        message.textContent = `${even.target.textContent} marked as Watched!`
    }else{
        message.textContent = `${even.target.textContent} was added back on your list`
    }
    revealMessage() 
}

const revealMessage = () => {
    message.classList.remove(`hide`)
    setTimeout(() => {
        message.classList.add(`hide`)
    },1000)
}

form.addEventListener(`submit`,addMovie)
