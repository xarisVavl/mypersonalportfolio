document.getElementById("cv-download-button").addEventListener('click',(() => {

  const link = document.createElement('a');

  console.log(link);
    link.href = 'files/VAVLIARAS-CHARISIOS-CV.pdf'; // Replace with the path to your PDF file
    link.download = 'vavliaras-charisios-cv.pdf'; // The name of the downloaded file
    link.click();
    window.open('files/VAVLIARAS-CHARISIOS-CV.pdf', '_blank');
}));

