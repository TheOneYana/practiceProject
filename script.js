const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    btn.style.backgroundColor === 'bisque'? btn.style.backgroundColor = 'red' : btn.style.backgroundColor = 'bisque';
})