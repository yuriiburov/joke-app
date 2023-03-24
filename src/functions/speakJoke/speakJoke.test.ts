import { speakJoke } from './speakJoke';

describe('speakJoke', () => {
  const mockJoke: string = 'Test joke';

  let spySpeechSynthesisSpeak: jest.SpyInstance<
    void,
    [utterance: SpeechSynthesisUtterance],
    any
  >;

  beforeEach(() => {
    spySpeechSynthesisSpeak = jest.spyOn(speechSynthesis, 'speak');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not speak if isMute true', () => {
    speakJoke(mockJoke, true);
    expect(spySpeechSynthesisSpeak).not.toBeCalled();
  });

  it('should speak if list of voices includes en-US lang', () => {
    const mockVoices = [
      {
        lang: 'en-US',
        voiceURI: 'com.apple.speech.synthesis.voice.Monica',
        default: false,
        localService: false,
        name: 'Monica',
      },
      {
        lang: 'en-CA',
        voiceURI: 'com.apple.speech.synthesis.voice.Samantha',
        default: false,
        localService: false,
        name: 'Samantha',
      },
    ];
    window.speechSynthesis.getVoices = jest.fn(() => mockVoices);
    speakJoke(mockJoke, false);
    expect(spySpeechSynthesisSpeak).toBeCalled();
  });

  it('should not speak if list of voices is empty', () => {
    window.speechSynthesis.getVoices = jest.fn(() => []);
    speakJoke(mockJoke, false);
    expect(spySpeechSynthesisSpeak).not.toBeCalled();
  });

  it('should not speak if list of voices without en-US voices', () => {
    const mockVoices = [
      {
        lang: 'fr',
        voiceURI: 'com.Monica',
        default: false,
        localService: false,
        name: 'Monica',
      },
      {
        lang: 'en-CA',
        voiceURI: 'com.apple.speech.synthesis.voice.Fred',
        default: false,
        localService: false,
        name: 'Fred',
      },
    ];
    window.speechSynthesis.getVoices = jest.fn(() => mockVoices);
    speakJoke(mockJoke, false);
    expect(spySpeechSynthesisSpeak).not.toBeCalled();
  });

  it('should speak using primaryVoice if available', () => {
    const primaryVoice = {
      lang: 'en-US',
      voiceURI: 'com.apple.speech.synthesis.voice.Fred',
      default: false,
      localService: false,
      name: 'Fred',
    };
    const mockVoices = [
      {
        lang: 'en-US',
        voiceURI: 'com.Monica',
        default: false,
        localService: false,
        name: 'Monica',
      },
      primaryVoice,
    ];
    window.speechSynthesis.getVoices = jest.fn(() => mockVoices);
    speakJoke(mockJoke, false);
    expect(spySpeechSynthesisSpeak).toHaveBeenCalledWith(
      expect.objectContaining({
        voice: primaryVoice,
      })
    );
  });
});
