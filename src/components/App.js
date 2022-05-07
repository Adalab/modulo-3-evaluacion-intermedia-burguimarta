import { useEffect, useState } from 'react';

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

  const [filterQuote, setFilterQuote] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("all");

  useEffect(() => {
    if (quotes.length === 0) {
      getQuotes().then(datafromAPI => {
        ls.set("quotes", datafromAPI);
        setQuotes(datafromAPI);
      });
    }
  }, []);

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
    <div className="page">
    {/* Cabecera */}
    <header className="header">
      <h1 className="header__title">Frases de Friends</h1>
    
      <form action="">
        <label className="quotes">
        {quotesHtml}
        </label>
        <label className="addNewQuote">
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
        </label>
        <label className="filter__label" htmlFor="character">
            Filtrar por personaje
            <select className="filter__select" value={filterCharacter} onChange={handleFilterCharacter}>
              <option value="all">Todos</option>
              <option value="Ross">Ross</option>
              <option value="Monica">Monica</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Chandler">Chandler</option>
              <option value="Rachel">Rachel</option>
            </select>
          </label>
      </form>
    </header>
    <ul className="quotes__list">
        {quotesHtml}
      </ul>

      <form className="new-quote__form" >
        <h2 className="new-quote__title">Añadir una nueva frase</h2>
        <label className="new-quote__label" htmlFor="quote">
          <span className="new-quote__label-text">Frase</span>
          <input
            className="new-quote__text"
            type="text"
            name="quote"
            id="quote"
            value={quoteObject.quote}
            onChange={handleInputs}
          />
        </label>
        <label className="new-quote__label" htmlFor="character">
          <span className="new-quote__label-text">Personaje</span>
          <input
            className="new-quote__text"
            type="text"
            name="character"
            id="character"
            value={quoteObject.character}
            onChange={handleInputs}


          />
        </label>
        <button onClick={handleNewQuote} className="new-quote__btn">Añadir un nueva frase</button>
      </form>
    </div>

  );
}

export default App;
