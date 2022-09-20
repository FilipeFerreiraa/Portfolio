const spanMessage = ['Filipe Ferreira'];
let textPosition = 0;

typeWriter = () => {
    document.querySelector('.home__span').innerHTML = spanMessage[0].substring(0, textPosition);
    if(textPosition++ != spanMessage[0].length) {
        setTimeout(typeWriter, 150);
    }
}

window.addEventListener('load', typeWriter);;