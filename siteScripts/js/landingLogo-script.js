// listener - onLoad
document.getElementById('landing').addEventListener('click', function() {
  
  // variables
  let logo = document.getElementById('logo').querySelector('img'); // logo  
  let width = logo.scrollWidth; // width
  let height = logo.scrollHeight; // height
  let marginTop = 0; // margin-top
  let id = setInterval(frame, 1); // animation interval
 
  window.location.assign('/portfolio'); // link
  
  // animation
  function frame() { 
    
    if (width >= 600) {
        
      clearInterval(id); // stop animation
      console.log('cleared');

    } else {
 
      width = width + 0.8;
      height = height + 0.8;
      marginTop -= 0;
      
      logo.style.marginTop = `${marginTop}px`;
      logo.style.width = `${width}px`;
      logo.style.height = `${height}px`;      
    }
  }
}, {once: true});