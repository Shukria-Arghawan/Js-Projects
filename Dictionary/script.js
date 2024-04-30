const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector('.result');
const btn = document.getElementById('search');
const sound = document.getElementById('sound');
btn.addEventListener('click', () => {
    const mainWord = document.getElementById('getWord').value;
    return new Promise((resolve, reject) => {
        fetch(`${url}${mainWord}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                result.innerHTML = `
            <div class="word">
                <h3 class="word">${mainWord}</h3>
                <button onclick="pronounce()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <span>${data[0].meanings[0].partOfSpeech}</span>
                <span>${data[0].phonetics[1].text}</span>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="examples">${data[0].meanings[0].definitions[0].example || ""}</p>
            `
                    sound.setAttribute('src', `${data[0].phonetics[0].audio}`);
                resolve(data);
            })
            .catch((error) => {
                result.innerHTML = `<h3>Could not find the word</h3>`
                console.log(error);
                reject(error);
            });
    });
});
function pronounce(){
    sound.play();
}