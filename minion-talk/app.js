const btn = document.getElementById("btn");
const input = document.getElementById("input");
const output = document.getElementById("output");
const URL = "https://api.funtranslations.com/translate/minion.json";

const handleError = (error) => {
    console.log("error: " + error);
};

const translate = () => {
    const inputText = input.value;
    const query = URL + "?text=" + inputText;

    fetch(query)
        .then((res) => res.json())
        .then((res) => {
            const data = res.contents.translated;
            output.innerText = data;
        })
        .catch(handleError);
};

btn.addEventListener("click", translate);
