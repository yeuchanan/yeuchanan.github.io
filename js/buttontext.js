const target = document.querySelector('.main');
const ak = document.querySelector('.ak');
const text = document.querySelector('.auto-type')

text.addEventListener('click', () => {
        target.style.opacity = '0';

    }
);
// If you want to remove it from the page after the fadeout
target.addEventListener('transitionend', () => {
    if(target.style.opacity == '0') {
        setTimeout(() => {
            setTimeout(() => {
                target.remove();
            }, 2200);
            ak.style.display = 'flex';
            setTimeout(() => {
                ak.style.opacity = '1';
            }, 1000);
        }, 100);   
    } 
});