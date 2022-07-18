//document.addEventListener('DOMContentLoaded', function(){
    /*
    id로 선택 document.getElementById('title')
    tag로 선택 document.getElementsByTagName('p')
    class로 선택 document.getElementsByClassName('클래스명')

    css 선택자 
        document.querySelector('css 선택자');  //단일요소 선택
        document.querySelectorAll('css 선택자'); //유사배열.
    */


   document.getElementById('title').style.color = 'red';

   console.log(document.getElementsByTagName('p'));

   var myP = document.getElementsByTagName('p');
   console.log(myP.length);

   //배열명[0]
   //HTMLCollection 유사배열
    /*
    myP[0].style.color = '#00f'
    myP[1].style.color = '#00f'
    myP[2].style.color = '#00f'
    */
   /*
   for(초기값;조건;증감){
       반복작업...
   }
   */
    for(i=0;i<myP.length;i++){
        myP[i].style.color = '#00f'
    } 
    
    var myList = document.getElementsByClassName('list');
    console.log(myList.length);

    for(var i=0; i<myList.length;i++){
        myList[i].style.backgroundColor = 'silver';
    }

    
    document.querySelector('.list .red').style.color = 'red';

    var myList2 = document.querySelectorAll('.list');
    //list-style:none;
    console.log(myList2);

    //myList2[0].style.listStyle = 'none';

    for(var i = 0; i< myList2.length; i++){
        myList2[i].style.listStyle = 'none';
    }

    var list1 = document.querySelectorAll('#list1');
    console.log(list1);

    list1[0].style.color = 'blue';

//});