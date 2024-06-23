document.getElementById("cv-download-button").addEventListener('click',(() => {

  const link = document.createElement('a');


    link.href = 'files/VAVLIARAS-CHARISIOS-CV.pdf'; // Replace with the path to your PDF file
    link.download = 'vavliaras-charisios-cv.pdf'; // The name of the downloaded file
    link.click();
    window.open('files/VAVLIARAS-CHARISIOS-CV.pdf', '_blank');
}));



document.querySelectorAll('.grid-item').forEach((item) => {

item.addEventListener('mouseover',()=> {

    item.style.padding=0;



});
item.addEventListener('mouseleave',()=> {

    item.style.padding='10px';

 

});

})







document.getElementById("cv-download-button").addEventListener('mouseover', (() => {




  
document.querySelector('.pop-up').removeAttribute('hidden');

}))


document.getElementById("cv-download-button").addEventListener('mouseleave', (() => {


  document.querySelector('.pop-up').setAttribute('hidden', true);


  
  }))


  function toggleNightMode() {
    let day=true;
    document.querySelector('.nightmode-button').addEventListener('click',() => {
    if (day) {
    document.documentElement.style.setProperty('--White', 'hsl(0, 0%, 30%)');
    document.documentElement.style.setProperty('--gray', 'gray');
    document.documentElement.style.setProperty('--Grey', '#D3D3D3');
    document.documentElement.style.setProperty('--Dark-Grey', '#FFFFFF');
    document.documentElement.style.setProperty('--Off-Black', 'hsl(0, 0%, 20%)');
    document.querySelector('.nightmode-button').innerHTML='<img src ="images/day-forecast-hot-svgrepo-com.svg" alt="">';

  day=false;
}

else  if(!day){
  document.documentElement.style.setProperty('--White', '#D6D6D6');
  document.documentElement.style.setProperty('--gray', 'gray');
  document.documentElement.style.setProperty('--Grey', 'hsl(0, 0%, 20%)');
  document.documentElement.style.setProperty('--Dark-Grey', 'hsl(0, 0%, 12%)');
  document.documentElement.style.setProperty('--Off-Black', 'hsl(0, 0%, 8%)');
   document.querySelector('.nightmode-button').innerHTML='<img src ="images/night-mode-svgrepo-com.svg" alt="">'
  day=true;
}

})
}

toggleNightMode();