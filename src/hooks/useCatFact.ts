import { useState, useEffect } from 'react';

import { fetchRandomFact } from '../services';

const printError = (error: any) => console.log(' --- ERROR ---', error);

const useCatFact = () => {
  const [fact, setFact] = useState('');

  const refreshFact = () => {
    fetchRandomFact()
      .then(fact => setFact(fact))
      .catch(printError);
  };

  useEffect(() => {
    fetchRandomFact()
      .then(fact => setFact(fact))
      .catch(printError);
  }, []);

  return { fact, refreshFact };
};

export default useCatFact;