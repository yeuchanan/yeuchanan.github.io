const loader = document.querySelector('.loader')
const main = document.querySelector('.main')

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'flex'
        setTimeout(() => (main.stlye.opacity = 1), 50);
    }, 4000)
}

init();