export const speakJoke = (joke: string, isMute: boolean): void => {
  if (isMute) return;

  const utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(
    joke
  );
  const voices: SpeechSynthesisVoice[] = speechSynthesis.getVoices();

  const englishVoices: SpeechSynthesisVoice[] = voices.filter(
    (voice) => voice.lang === 'en-US'
  );
  const primaryVoice: SpeechSynthesisVoice | undefined = englishVoices.find(
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
