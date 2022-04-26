

import '../styles/App.scss';
import quotesOfFriends from '../data/quotes.json'
import { useState } from 'react';

// Función principal.
function App() {
  const [quotes, setQuotes] = useState (quotesOfFriends);
  const [newQuote, setNewQuote] = useState ({
    quote: '',
    character: ''
  });
  const handleNewQuote = (event) => {
    setNewQuote ({
      ...newQuote,
      [event.target.id]: event.target.value,
    });
  }
  const handleClick = (event) => {
    event.preventDefault();
    setQuotes([...quotes, newQuote]);
    setNewQuote({
      quote: '',
      character: ''
    });
  };
  const quotesHtml = quotes
  
  .map((quote, index) => {
    return (
      <article className='quote' key={index}>
        <span className='quoteOfFriends'>{quote.quote}</span>
        <span className='character'>{quote.character}</span>
      </article>
    );
    
  });

  return (
    <>
    {/* Cabecera */}
    <header className="header">
      <h1 className="header__title">Frases de Friends</h1>
    </header>
    <section className="quotes">
      {quotesHtml}
    </section>
    <section className="addNewQuote">
      <p>Frase</p><input 
            type="text" 
            className="quotesInput" 
            id="quote" 
            onChange={handleNewQuote} 
            value={newQuote.quote}/> 
      <p>Personaje</p><input 
            type="text" 
            className="characterInput" 
            id="character" 
            onChange={handleNewQuote} 
            value={newQuote.character} />
      <input 
        className="searchButton" 
        type="submit" 
        value="Añadir una nueva frase" 
        onClick={handleClick}/>
    </section>
    </>
  );
}

export default App;
