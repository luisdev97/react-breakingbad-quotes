import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './components/Quote';



const App = () => {

  const [ quote, setQuote ] = useState({});

  const getQuotes = async() => {
    const res = await axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes'); 
    setQuote(res.data[0]);
  }

  useEffect(() => {
    getQuotes();
  }, []);
  

  return (
    <div className="contenedor">
      <Quote phrase={ quote}/>
    </div>
  );
};

export default App;