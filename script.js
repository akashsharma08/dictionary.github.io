const input = document.querySelector("#input");
const infText = document.querySelector("#info-text");
const meaningContainer = document.querySelector(".meaning-container");
const tile = document.querySelector("#title");
const meaning = document.querySelector("#meaning");
const example = document.querySelector("#example");
const voice = document.querySelector("#audio");

async function fetchAPI(word){


    try {
        meaningContainer.style.display = "none";   
        infText.innerHTML = `Searching the meaning of ${word} . . .`;
        infText.style.display = "block";
        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(URL).then((res) => res.json());
        console.log(result);
        console.log(result[0].meanings[0].definitions[0].definition);
        // console.log(title);
        infText.style.display = "none";
        meaningContainer.style.display = "block";   
        tile.innerHTML = result[0].word;     
        meaning.innerHTML = result[0].meanings[0].definitions[0].definition; 
        if(result[0].meanings[0].definitions[0].example){
            example.innerHTML = result[0].meanings[0].definitions[0].example;   
        }
        voice.src = result[0].phonetics[0].audio;     
    } 
    catch (error) {
        console.log(error);
    }
}



input.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key ==="Enter"){
        fetchAPI(e.target.value);
        // console.log(e.target.value);
    }
}) 