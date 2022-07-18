const btn = document.getElementById('submit'); 

 

btn.addEventListener('click', function(){ 

    alert('버튼이 클릭되었습니다.'); 

}); 

const container = document.querySelector('.container'); 

 

container.addEventListener('mouseover', function(){ 

    this.style.backgroundColor = '#ccc'; 

}); 

container.addEventListener('mouseout', function(){ 

    this.style.backgroundColor = ''; 

}); 