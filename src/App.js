import React, { useState, useEffect } from 'react';
import axios from 'axios';



const App = () => {

  const [ quote, setQuote ] = useState({});



  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      // ...
      console.log(response.data[0].quote);
    }
    fetchData();
  }, [quote]);
  

  return (
    <div>
      
    </div>
  );
};

export default App;