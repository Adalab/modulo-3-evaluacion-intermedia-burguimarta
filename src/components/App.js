

import '../styles/App.scss';
import quotesOfFriends from '../data/quotes.json'
import { useState } from 'react';

// Función principal.
function App() {
  const [quotes, setQuotes] = useState (quotesOfFriends);
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
      <p>Frase</p><input type="text" className="quotesInput" /> 
      <p>Personaje</p><input type="text" className="friendsInput" />
      <button>Añadir nueva frase</button>
    </section>
    </>
  );
}

export default App;
