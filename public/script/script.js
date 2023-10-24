const container = document.querySelector('.container');


container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        console.log(e.target);
    }
});
