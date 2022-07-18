let mainMenu = document.querySelectorAll('.main_menu > li'),
    header = document.querySelector('body > header');
    

    mainMenu.forEach((item)=>{
        item.addEventListener('mouseover',function(){
            let submenuHeight = this.querySelector('.sub_menu').offsetHeight;
            header.style.height = `${submenuHeight+90}px`
        });
        item.addEventListener('mouseout',function(){
            header.style.height = '90px';
        });
    });