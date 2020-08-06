const tweet = document.querySelector('#tweetText');
const btn = document.querySelector('#codificador');
// const resultado = document.querySelector('#resultadotos');
const resultado = document.querySelector('#resultado');
const btncopiar = document.querySelector('#copiar');
const caracteres = document.querySelector('.caracteres');


btncopiar.style.display = "none";

const codificar = (string) => {
    resultado.value = string.replace(/\S/g, '*');
    btncopiar.style.display = "block";
}

btn.addEventListener('click', event => {
    codificar(tweet.value);
})

btncopiar.addEventListener('click', event=> {
    copiar(resultado.value);
})

const copiar = (str) => {
    let el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert("Sua mensagem foi copiada!")
}

tweet.addEventListener('keyup', event=> {
    caracteres.innerText = `Caracteres restantes: ${280-tweet.value.length}`
    
})
