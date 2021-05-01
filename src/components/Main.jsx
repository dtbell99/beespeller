import React, { useEffect, useState } from 'react';
import WordItm from './WordItm';
import { Button, Form } from 'react-bootstrap';
import Logo from '../logo.svg';

function Main() {

  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState();

  const save = (wordsArray) => {
    setWords(wordsArray);
    localStorage.setItem('words', JSON.stringify(wordsArray));
  }

  const removeWord = (word) => {
    const wordsArray = [];
    words.forEach((w) => {
      if (w !== word) {
        wordsArray.push(w);
      }
    });
    save(wordsArray);
  }

  const addWord = () => {
    if (!newWord) {return; }
    const wordsArray = [...words];
    wordsArray.push(newWord);
    setNewWord('');
    save(wordsArray);
  }

  const wordList = words.map((word, indx) => {
    const k = `${word}_${indx}`;
    return (
      <WordItm word={word} key={k} removeWord={removeWord} />
    )
  });

  const startGame = () => {
    alert('starting');
  }

  useEffect(() => {
    if (localStorage.getItem('words')) {
      setWords(JSON.parse(localStorage.getItem('words')));
    }
  }, []);

  return (
    <div className="Main">
      <h1><img src={Logo} alt="logo" height="48px"/> Beespeller</h1>
      <div className="Controls">
        <Form.Control type="text" value={newWord} onChange={e => setNewWord(e.target.value)} placeholder="Add new word"/>
      <br/>
      <Button variant="secondary" onClick={() => addWord()}>Add Word</Button>
        &nbsp;&nbsp;
        <Button variant="success" onClick={() => startGame()}>Start Game</Button>
      </div>
      <hr />
      {wordList}
    </div>
  );
}

export default Main;
