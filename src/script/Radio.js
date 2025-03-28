document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');
  const radioPlayer = document.getElementById('radio-player');
  const songTitleElement = document.getElementById('song-title');

  const songInfoApiUrl = 'https://api.radioking.io/widget/radio/radiotest27/track/current';

  // Función para obtener el título de la canción desde la API
  async function fetchSongTitle() {
    try {
      const response = await fetch(songInfoApiUrl);
      if (!response.ok) {
        throw new Error('Error getting song title');
      }
      const data = await response.json();
      const currentSongTitle = data.name || 'JAH BLESS - PLAYING';
      songTitleElement.textContent = currentSongTitle;
    } catch (error) {
      console.error('Error getting song title:', error);
      songTitleElement.textContent = 'RADIO - ERROR';
    }
  }

  // Actualizar el título de la canción periódicamente (cada 10 segundos)
  setInterval(fetchSongTitle, 10000);

  playButton.addEventListener('click', () => {
    radioPlayer.play();
    fetchSongTitle();
  });

  pauseButton.addEventListener('click', () => {
    radioPlayer.pause();
    songTitleElement.textContent = 'RADIO 24/7 - PAUSED';
  });

  radioPlayer.addEventListener('play', () => {
    fetchSongTitle();
  });

  radioPlayer.addEventListener('pause', () => {
    songTitleElement.textContent = 'RADIO - PAUSED';
  });
});