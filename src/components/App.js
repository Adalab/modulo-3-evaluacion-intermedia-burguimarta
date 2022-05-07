import { useEffect, useState } from 'react';

import quotesOfFriends from '../data/quotes.json'
import getQuotes from '../services/fetch';
import ls from '../services/localStorage'

import '../styles/App.scss';

// Función principal.
function App() {
  const [quotes, setQuotes] = useState(ls.get ("quotes", []));
  const [quote, setQuote] = useState("");
  const [character, setCharacter] = useState("");
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

  const handleQuote = (ev) => {
    setQuote(ev.target.value);
  }
  const handleCharacter = (ev) => {
    setCharacter(ev.target.value)
  }
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
            <select className="filter__select" value={filterCharacter} onChange={handleCharacter}>
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
            value={newQuote.quote}
            onChange={handleQuote}
          />
        </label>
        <label className="new-quote__label" htmlFor="character">
          <span className="new-quote__label-text">Personaje</span>
          <input
            className="new-quote__text"
            type="text"
            name="character"
            id="character"
            value={newQuote.character}
            onChange={handleQuote}


          />
        </label>
        <button onClick={handleNewQuote} className="new-quote__btn">Añadir un nueva frase</button>
      </form>
    </div>

  );
}

export default App;
