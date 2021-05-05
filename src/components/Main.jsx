import React, { useEffect, useState } from 'react';
import WordItm from './WordItm';
import { Button } from 'react-bootstrap';
import Logo from '../logo.svg';
import Filter from 'bad-words';
const filter = new Filter();

function Main() {

  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState('');

  const save = (wordsArray) => {
    setWords(wordsArray);
    localStorage.setItem('words', JSON.stringify(wordsArray));
    document.getElementById('newWordId').focus();
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
    if (!newWord) { return; }
    let validWord = true;
    if (newWord.indexOf('*') !== -1) {
      validWord = false;
    }
    let cleanWord = filter.clean(newWord);
    if (cleanWord.indexOf('*') !== -1) {
      validWord = false;
    }
    setNewWord('');
    if (!validWord) {
      document.getElementById('newWordId').focus();
      return;
    }
    const wordsArray = [...words];
    wordsArray.push(cleanWord);
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
      <h1><img src={Logo} alt="logo" height="48px" /> Beespeller</h1>
      <div className="Controls">
        <div class="container">
          <div class="row">
            <div class="col">
              <input id="newWordId" className="form-control" type="text" value={newWord} onChange={e => setNewWord(e.target.value)} placeholder="Add new word" />
            </div>
            <div class="col-sm-auto">
              <Button variant="secondary" onClick={() => addWord()}>Add Word</Button>
            </div>
          </div>
        </div>


      </div>
      <hr />
      <Button variant="success" onClick={() => startGame()}>Start Game</Button>
      <br />
      {wordList}
    </div>
  );
}

export default Main;
