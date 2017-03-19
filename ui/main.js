console.log('Loaded!');

var element=document.getElementById('main');
element.innerHTML='New Stuff';

var img = document.getElementById('img');
img.onclick=function(){
    img.style.marginRight = '100px';
};