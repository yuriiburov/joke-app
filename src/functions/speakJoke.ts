export const speakJoke = (joke: string, isMute: boolean) => {
  const utterance = new SpeechSynthesisUtterance(joke);
  const voices = speechSynthesis.getVoices();

  const englishVoices = voices.filter((voice) => voice.lang === 'en-US');
  const primaryVoice = englishVoices.find(
    (voice) => voice.voiceURI === 'com.apple.speech.synthesis.voice.Fred'
  );

  if (primaryVoice) {
    utterance.voice = primaryVoice;
  }
  if (englishVoices.length && !primaryVoice) {
    utterance.voice = englishVoices[0];
  }
  if ((primaryVoice || englishVoices.length) && !isMute) {
    speechSynthesis.speak(utterance);
  }
};
