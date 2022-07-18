const img = document.querySelectorAll('.gallery img'),
    lightbox = document.querySelector('#lightbox-overlay'),
    lightboxImg = lightbox.querySelector('img');  

for(i=0; i<img.length; i++){
    img[i].addEventListener('click', function(e){
        e.preventDefault();
        let target = this.getAttribute('data-lightbox');

        lightboxImg.setAttribute('src',target);
        lightbox.classList.add('visible');
    });
}

lightbox.addEventListener('click',function(){
    lightbox.classList.remove('visible');
});