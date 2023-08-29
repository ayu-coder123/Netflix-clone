import React from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const Recognator = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  
  return (
    <div className="section">
    <div>
      <h1>Speech Recognition App</h1>
      <p>This app converts speech into text by React hook.</p>
      <p style={{textAlign:"center"}}>Microphone: {listening ? 'on' : 'off'}</p>
      <div className="button">
      <p>{transcript}</p>
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      >Hold to talk</button>
       <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      </div>
      {/* <p>{transcript}</p> */}
    </div>
    </div>
  );
}

export default Recognator;