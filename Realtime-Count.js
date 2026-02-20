const textInput = document.getElementById("text-input");

const charCount = document.getElementById("char-count");


function update(num) {
    if (num >= 50) {
        textInput.value = textInput.value.slice(0, 50)
        charCount.textContent = "Character Count: 50/50"
        charCount.style.color = "red"
    } else {

        charCount.textContent = "Character Count: " + num + "/50"
    }
}
textInput.addEventListener("input", () => update(textInput.value.length))