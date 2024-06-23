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