function openPresent(event) {
    const image = event.currentTarget;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
    
    const title = document.querySelector('h1');
    title.textContent = 'Hooray!';
    
    image.removeEventListener('click', openPresent);
  }
  
  const image = document.querySelector('img');
  image.addEventListener('click', openPresent);
  
  