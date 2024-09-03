const femininos = document.querySelector('#femininos');
const masculinos = document.querySelector('#masculinos');

femininos.addEventListener('click', (event) => {
    event.preventDefault(); // Evita bug de comportamento padrão do link
    const section = document.querySelector('#femininos');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' // deixa a rolagem pra baixo mais suave, tava muito brusca
    });
});

masculinos.addEventListener('click', (event) => {
    event.preventDefault(); 
    const section = document.querySelector('#masculinos');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' 
    });
});
