const tweet = document.querySelector('#tweetText');
const btn = document.querySelector('#codificador');
// const resultado = document.querySelector('#resultadotos');
const resultado = document.querySelector('#resultado');
const btncopiar = document.querySelector('#copiar');
const caracteres = document.querySelector('.caracteres');


btncopiar.style.display = "none";

// const copiar = `<br> <button class="btn btn-sm" id="copiar">Copiar!</div>`;

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
    caracteres.innerText = `Caracteres restantes: ${180-tweet.value.length}`
    
})

/*

$("#textarea").keyup(function(){
    $("#count").text($(this).val().length);
  });

*/


/*

function copiar (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);

    alert("Sua mensagem foi copiada!")
 }

*/

/*

const copiar = () => {
    let text = resultado;
    let range = document.createRange();

    range.selectNode(text);
    window.getSelection().addRange(range);
    document.execCommand('copy');
}
*/


/*


    const copiar = () => {
        const mensagem = resultado.innerHTML;
        mensagem.select();
        document.execCommand("copy");
        alert("Mensagem copiada!")
    }

  function copy() {
      var text = document.getElementById('text');
      var range = document.createRange();

      range.selectNode(text);
      window.getSelection().addRange(range);
      document.execCommand('copy');    
    }

*/


/*
btncopiar.addEventListener('click', event=> {

})




function myFunction() {
    var copyText = document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
  
    alert("Copiado!");
  }

  */