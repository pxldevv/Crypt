const codeSequence = {
  // Mapping of letters to code sequence
  letterCode: {
    a: '101',
    b: '203',
    c: '310',
    d: '405',
    e: '501',
    f: '603',
    g: '710',
    h: '805',
    i: '901',
    j: '102',
    k: '213',
    l: '320',
    m: '415',
    n: '520',
    o: '613',
    p: '720',
    q: '815',
    r: '920',
    s: '121',
    t: '223',
    u: '330',
    v: '435',
    w: '530',
    x: '635',
    y: '730',
    z: '835'
  },
  // Phrase code sequence
  phraseCode: {
    'okay sounds good!': '935'
  },
  // Encoding function
  encode: function(input) {
    const lowercaseInput = input.toLowerCase();
    let output = '';
    for (let i = 0; i < lowercaseInput.length; i++) {
      const char = lowercaseInput[i];
      if (char === '.') {
        output += '...';
      } else if (this.phraseCode[char]) {
        output += this.phraseCode[char];
      } else if (this.letterCode[char]) {
        output += this.letterCode[char];
      } else {
        output += char;
      }
    }
    return output;
  },
  // Decoding function
  decode: function(input) {
    let output = '';
    let currentCode = '';
    const lowercaseInput = input.toLowerCase();
    for (let i = 0; i < lowercaseInput.length; i++) {
      const char = lowercaseInput[i];
      if (char === '.' && currentCode.length === 0) {
        output += char;
      } else if (char === '.' && currentCode.length > 0) {
        output += '.';
        currentCode = '';
      } else if (char === '.' && i === lowercaseInput.length - 1) {
        output += '...';
      } else if (this.phraseCode[char]) {
        output += this.phraseCode[char];
        currentCode = '';
      } else if (this.letterCode[char]) {
        output += char;
        currentCode = this.letterCode[char];
      } else {
        if (currentCode.length > 0) {
          if (output.length > 0) {
            output += '.';
          }
          output += currentCode;
          currentCode = '';
        }
        output += char;
      }
    }
    return output;
  }
};

function encodeTxt() {
  const messageInput = document.getElementById('message');
  const outputTextarea = document.getElementById('output');
  const encodedMessage = codeSequence.encode(messageInput.value);
  outputTextarea.value = encodedMessage;
}

function decodeTxt() {
  const messageInput = document.getElementById('message');
  const outputTextarea = document.getElementById('output');
  const decodedMessage = codeSequence.decode(messageInput.value);
  outputTextarea.value = decodedMessage;
}
