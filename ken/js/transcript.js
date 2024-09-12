const audio = document.getElementById('audioPlayer');
const transcript = document.getElementById('transcript');
// Verificar si el navegador soporta Web Speech Recognition
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES'; // Ajusta el idioma según el audio
  // Iniciar el reconocimiento de voz cuando el audio comience a reproducirse
  audio.addEventListener('play', () => {
    recognition.start();
  });
  recognition.onresult = (event) => {
    const transcriptText = event.results[0][0].transcript;
    transcript.textContent = transcriptText;
  };
} else {
  // Mostrar un mensaje de error si no es compatible
  transcript.textContent = "Tu navegador no soporta reconocimiento de voz.";
}