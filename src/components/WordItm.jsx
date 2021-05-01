import React from 'react';

function WordItm({word, removeWord}) {

  const sayWord = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="WordItm">
      <a href="#say" className="WordLink" onClick={()=>sayWord()}>{word}</a><a href="#remove" onClick={()=>removeWord(word)} style={{float:'right'}}>X</a>
    </div>
  );
}

export default WordItm;
