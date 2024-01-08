const encryptionKey = {
    'A': 50, 'B': 70, 'C': 20, 'D': 30, 'E': 800, 'F': 330, 'G': 710,
    'H': 220, 'I': 570, 'J': 280, 'K': 310, 'L': 490, 'M': 980,
    'N': 390, 'O': 450, 'P': 360, 'Q': 520, 'R': 120, 'S': 770,
    'T': 830, 'U': 270, 'V': 380, 'W': 530, 'X': 290, 'Y': 880,
    'Z': '000', ' ': '.'
};

function encode(text) {
    return text.toUpperCase().split('').map(char => encryptionKey[char] || char).join(' ');
}

function decode(encodedText) {
    const codeArray = encodedText.split(' ');
    const decodedText = codeArray.map(code => {
        return Object.keys(encryptionKey).find(key => encryptionKey[key] == code) || code;
    }).join('');
    return decodedText;
}


function encodeTxt() {
    let originalText = document.getElementById("message").value;
    let encodedText = encode(originalText);
    document.getElementById("output").value = encodedText;

}

function decodeTxt() {
    let originalText = document.getElementById("message").value;
    let decodedText = decode(originalText);
    document.getElementById("output").value = decodedText;
}

