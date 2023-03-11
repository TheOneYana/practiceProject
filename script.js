const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    btn.style.backgroundColor === 'bisque'? btn.style.backgroundColor = 'rgb(12, 113, 186)' : btn.style.backgroundColor = 'bisque';
    btn.style.backgroundColor === 'bisque'? btn.style.color = 'green' : btn.style.color = 'bisque';

})