function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

document.querySelector('.encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').value = encrypt(inputText);
});

document.querySelector('.decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').value = decrypt(inputText);
});

document.querySelector('.copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
