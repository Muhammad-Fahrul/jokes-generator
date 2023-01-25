const btnBahagia = document.querySelector('#btn');
const jokeContainer = document.querySelector('#joke');
const urlJokeApi = "https://candaan-api.vercel.app/api/text/random";


const updateUi = async () => {
    const { data } = await getJoke();
    jokeContainer.innerText = data;

}
const getJoke = () => {
    return fetch(urlJokeApi)
        .then((data) => data.json())
}

btnBahagia.addEventListener('click', updateUi)
