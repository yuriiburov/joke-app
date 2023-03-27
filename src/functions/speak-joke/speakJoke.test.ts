import { speakJoke } from './speakJoke';

describe('speakJoke()', () => {
  let spySpeechSynthesisSpeak: jest.SpyInstance;
  global.SpeechSynthesisUtterance = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'speechSynthesis', {
      value: {
        getVoices: jest.fn(),
        speak: jest.fn(),
      },
      writable: true,
    });

    spySpeechSynthesisSpeak = jest.spyOn(window.speechSynthesis, 'speak');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should not speak if isMute is true', () => {
    speakJoke('test', true);
    expect(spySpeechSynthesisSpeak).not.toBeCalled();
  });

  it('should not speak if no suitable voice is found', () => {
    window.speechSynthesis.getVoices = jest.fn(() => []);
    speakJoke('test', false);
    expect(spySpeechSynthesisSpeak).not.toBeCalled();
  });

  it('should speak using primary voice if available', () => {
    const mockVoices = [
      {
        voiceURI: 'com.apple.speech.synthesis.voice.Fred',
        lang: 'en-US',
        default: true,
        localService: true,
        name: 'Fred',
      },
      {
        voiceURI: 'com.apple.speech.synthesis.voice.Samantha',
        lang: 'en-US',
        default: true,
        localService: true,
        name: 'Samantha',
      },
    ];
    window.speechSynthesis.getVoices = jest.fn(() => mockVoices);
    speakJoke('test', false);
    expect(spySpeechSynthesisSpeak).toBeCalledWith(expect.anything());
    expect(spySpeechSynthesisSpeak.mock.calls[0][0].voice?.voiceURI).toEqual(
      'com.apple.speech.synthesis.voice.Fred'
    );
  });

  it('should speak using the first available English voice if primary voice is not available', () => {
    const mockVoices = [
      {
        voiceURI: 'com.apple.speech.synthesis.voice.Alex',
        lang: 'en-US',
        default: true,
        localService: true,
        name: 'Alex',
      },
      {
        voiceURI: 'com.apple.speech.synthesis.voice.Samantha',
        lang: 'en-US',
        default: true,
        localService: true,
        name: 'Samantha',
      },
    ];
    window.speechSynthesis.getVoices = jest.fn(() => mockVoices);
    speakJoke('test', false);
    expect(spySpeechSynthesisSpeak).toBeCalledWith(expect.anything());
    expect(spySpeechSynthesisSpeak.mock.calls[0][0].voice?.voiceURI).toEqual(
      'com.apple.speech.synthesis.voice.Alex'
    );
  });
});
