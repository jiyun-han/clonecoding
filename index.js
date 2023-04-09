const clock = document.querySelector('.h1-clock');
function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    //clock.innerHTML = hour +":" + minutes + ":"+seconds;
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}
function init(){
    setInterval(getTime, 1000);
}

init();


function openclose(){
    if(document.getElementById('tocc2').style.display === 'block'){
        document.getElementById('tocc2').style.display = 'none';

    } else {
        document.getElementById('tocc2').style.display = 'block';
    }
}

function navigo (){
  const header = document.querySelector('#headerbox');
  const headerheight = header.clientHeight;
document.addEventListener('scroll', onScroll, { passive: true });
 function onScroll () {
     const scrollposition = scrollY;
   const nav = document.querySelector('#nav');
   if (headerheight<=scrollposition){
     nav.classList.add('fix')
   }
   else {
     nav.classList.remove('fix');
   }
 }

}
navigo()