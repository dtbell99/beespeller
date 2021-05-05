import React from 'react';

function WordItm({ word, removeWord }) {

  const sayWord = () => {
    console.log(`sayWord:${word}`);
    try {
      const utterance = new SpeechSynthesisUtterance(word);
      speechSynthesis.speak(utterance);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="WordItm">
      <a href="#say" className="WordLink" onClick={() => sayWord()}>{word}</a><a href="#remove" onClick={() => removeWord(word)} style={{ float: 'right' }}>X</a>
    </div>
  );
}

export default WordItm;
