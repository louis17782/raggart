document.addEventListener('scroll', () => {
    const radioContainer = document.querySelector('.radio-container');
    const triggerPoint = 800;
  
    if (window.matchMedia('(max-width: 800px)').matches) {
      if (window.scrollY > triggerPoint) {
        radioContainer.style.position = 'static'; 
      } else {
        radioContainer.style.position = 'fixed'; 
        radioContainer.style.bottom = '0'; 
        radioContainer.style.left = '0';
      }
    }
  });
