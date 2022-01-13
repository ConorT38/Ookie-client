import { useEffect, useState } from 'react'
import axios from 'axios'

function useSearchApi(url) {
    const [searchResults, setSearchResult] = useState();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      axios.get(url).then(r => {
        setSearchResult(r.data.data);
        setLoading(false);
      });
    }, [url]);
  
    return [searchResults, loading];
  }

export default useSearchApi