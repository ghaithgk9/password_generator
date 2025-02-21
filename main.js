const lengthInput = document.querySelector(".leng");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const symb = document.getElementById("sym");
const result = document.getElementById("result");
const generateBtn = document.querySelector("button");

function generatePassword() {
    const low_chars = "abcdefghijklmnopqrstuvwxyz";
    const upp_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sym_chars = "!&_ç@$£%*";
    const num_chars = "0123456789";

    let characters = "";
    let password = "";
    let length = parseInt(lengthInput.value) || 8;

    if (lower.checked) characters += low_chars;
    if (upper.checked) characters += upp_chars;
    if (symb.checked) characters += sym_chars;
    characters += num_chars;
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    result.textContent = `Your password is: ${password}`;
}

generateBtn.addEventListener("click", generatePassword);


