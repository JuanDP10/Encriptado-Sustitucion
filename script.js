class SubstitutionCipher {
    constructor(key = 'default') {
        this.defaultAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.key = this.generateKey(key);
    }

    generateKey(customKey) {
        customKey = customKey.toUpperCase().replace(/[^A-Z]/g, '');
        const uniqueChars = [...new Set(customKey)];
        const remainingChars = this.defaultAlphabet.split('').filter(char => !uniqueChars.includes(char));
        
        return uniqueChars.concat(remainingChars).join('');
    }

    encrypt(text) {
        return this.transform(text, this.defaultAlphabet, this.key);
    }

    decrypt(text) {
        return this.transform(text, this.key, this.defaultAlphabet);
    }

    transform(text, sourceAlphabet, targetAlphabet) {
        return text.toUpperCase().split('').map(char => {
            const index = sourceAlphabet.indexOf(char);
            return index !== -1 ? targetAlphabet[index] : char;
        }).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const customKey = document.getElementById('customKey');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

    let cipher = new SubstitutionCipher();

    encryptBtn.addEventListener('click', () => {
        const key = customKey.value || 'default';
        cipher = new SubstitutionCipher(key);
        
        console.log('Clave generada:', cipher.key); // <-- Agrega este log para ver la clave
        outputText.value = cipher.encrypt(inputText.value);
    });

    decryptBtn.addEventListener('click', () => {
        const key = customKey.value || 'default';
        cipher = new SubstitutionCipher(key);
        outputText.value = cipher.decrypt(inputText.value);
    });

    copyBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
    });
});