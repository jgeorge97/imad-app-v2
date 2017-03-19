console.log('Loaded!');

var element=document.getElementById('main');
element.innerHTML='New Stuff';

var img = document.getElementById('madi');
img.onclick=function(){
    img.style.marginLeft = '100px';
};