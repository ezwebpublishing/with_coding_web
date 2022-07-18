//document.addEventListener('DOMContentLoaded', function () {
    // document.getElementsByTagName('h1').style.color = 'blue';

    const title = document.getElementsByTagName('h1');

    title[0].style.color = 'blue';

    document.getElementById('list1').style.backgroundColor = '#ebebeb';

    const list = document.getElementsByClassName('list');
    console.log(list);

    /*
    list[0].style.listStyle = 'none';
    list[1].style.listStyle = 'none';
    list[2].style.listStyle = 'none';
    
    for(let i=0; i<list.length; i++){
        list[i].style.listStyle = 'none';
    }
    */
    for(item of list){
        item.style.listStyle = 'none';
    }

    const target = document.querySelector('#box > div > div');
    target.style.backgroundColor = '#3498db';

    // const paragraph = document.querySelector('article p');
    // paragraph.style.color = '#3498db';

    const paragraph = document.querySelectorAll('article p');
    
    paragraph.forEach(function(item){
        item.style.color = '#3498db';
    });

//});