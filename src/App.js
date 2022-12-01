import { useState, useEffect } from 'react';

import './App.css';

const App = () => {
    /* Set to '' since the field should be empty st the start */
    const [text, setText] = useState('');

    /* word count */
    const [wordCount, setWordCount] = useState(0);
  
    /* character counting */
    const [charCount, setCharCount] = useState(0);

    // ***fn to listen when words are being typed in the input field
    const changeHandler = (event) => {
      setText(event.target.value);
    };

    useEffect(() => {
      // !!array of word
      const words = text.split(' ');

      // !**update word count
      let wordCount = 0;
      words.forEach((word) => {
        if (word.trim() !== '') {
          wordCount++;
        }
      });

      setWordCount(wordCount);

      // **update the character count (including white spaces)
      setCharCount(text.length);
    },  [text]);


  return (
    <div className="App">
      <div>
        <textarea
          onChange={changeHandler}
          value={text}
          placeholder="Type text here..."
        ></textarea>

        <div>
          <p className='word-count'>Typed words: {wordCount}</p>
          <p className='char-count'>
            Characters typed (including white spaces): {charCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
