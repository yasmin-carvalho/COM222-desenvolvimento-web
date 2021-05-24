function openPresent(event) {
    const image = event.currentTarget;
    image.removeEventListener('click', openPresent);
    
    const giftOutside = document.querySelector('#gift-outside');
    const giftInside = document.querySelector('#gift-inside');
    giftOutside.classList.add('hidden');
    giftInside.classList.remove('hidden');
  }
  
  const image = document.querySelector('#gift-outside img');
  image.addEventListener('click', openPresent);
  
  
  
  