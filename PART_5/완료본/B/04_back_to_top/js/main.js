document.addEventListener('DOMContentLoaded', function(){   

    let btt = document.querySelector('#go-top'),
        docElem = document.documentElement,
        scrollAmount;

    window.addEventListener('scroll',function(){
        scrollAmount = docElem.scrollTop;          
        
        if(scrollAmount > 100){
            btt.className = 'active';
        } else{
            btt.classList.remove('active');
        }
    });

    btt.addEventListener('click', function(e){
        e.preventDefault();           
        
        /* IE 불가
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });                 
        */
        let scrollInterval = setInterval(function(){            
            if(scrollAmount != 0){
                window.scrollBy(0,-55);
            }else{
                clearInterval(scrollInterval);
            }
        }, 10);

    });

});