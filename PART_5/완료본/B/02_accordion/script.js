const panelQuestion = document.querySelectorAll('.panel-question'),
    btnCollapse = document.getElementById('btn-collapse');

    
for(let q of panelQuestion){
    q.addEventListener('click',function(){
      hideAll();
      this.classList.add('active');
    });
}
   
function hideAll(){
    for(let q of panelQuestion){
        q.classList.remove('active');
    }
}

btnCollapse.addEventListener('click', function(){
    hideAll();
});