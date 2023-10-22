let bx = document.querySelector('.bx');
let btn = document.querySelector('.btn');
let bix = document.querySelector('.bix');

btn.addEventListener('click', function(){
    if(btn.classList.contains('btn2')){
        btn.classList.remove('btn2')
        bix.classList.remove('bx2')
    } else {
        btn.classList.add('btn2')
        bix.classList.add('bx2')
    }
});