let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river =document.getElementById('river');
let boat6=document.getElementById('boat6');
let ALkafeel =document.querySelector('.ALkafeel');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    ALkafeel.style.fontsize = value + 'px';
    if(scrollY >= 67){
        ALkafeel.style.fontsize = 136 + 'px';
        ALkafeel.style.position = 'fixed';
        if(scrollY >= 478){
            ALkafeel.style.display = 'none';
        }else{
            ALkafeel.style.display = '';
        }
        if(scrollY >= 178){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#00181f)'
            document.querySelector('.main').style.background = 'linear-gradient(hsl(236, 100%, 6%),#00011f)'

        }else{
            
        }
    }
}