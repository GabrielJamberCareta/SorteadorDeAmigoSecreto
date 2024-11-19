function verificaPalindromo(palavra) {
    var separaLetras = palavra.split('');
    var palavraInvertida = separaLetras.reverse();
    palavraInvertida = palavraInvertida.join('');
    if (palavra === palavraInvertida) {
        console.log(`A palavra ${palavra} é um palindromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palindromo`);
    }
}

verificaPalindromo("radwar")