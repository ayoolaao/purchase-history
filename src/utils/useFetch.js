import { useEffect, useState } from 'react';
import MOCKDATA from './data.json';

const useFetch = (url) => {
  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url, { mode: 'no-cors' }) // TODO Resolve CORS error
      .then(res => {
        setIsLoading(false);
        setData(MOCKDATA); // TODO use data from response after CORS error resolved
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      })

  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;