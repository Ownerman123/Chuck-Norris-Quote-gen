const chuckNorrisQuotesUrl = "https://api.chucknorris.io/jokes/random"
const addJokeBtn = document.getElementById('make-joke-btn');

 function  getChuckJoke(){

    const newQuote = fetch(chuckNorrisQuotesUrl
        ).then(function (response){

            return response.json();

    }).then(function (data) {

        return data.value;

    }

    );

    return newQuote;

}


async function createAndAddJokeToBody() {

    const chuckJoke = await getChuckJoke();

    const jokeP = document.createElement('p');
    jokeP.innerHTML = chuckJoke;

    document.body.appendChild(jokeP);

}

addJokeBtn.addEventListener('click' , createAndAddJokeToBody);