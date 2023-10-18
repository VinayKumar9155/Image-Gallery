import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      console.log(res);
      console.log("size",res.length);
      console.log("user",res.data.results[0].user.name);
      setResponse(res.data.results);
    } catch(err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(param);
  }, [param])

  return {
    response,
    isLoading,
    error,
    fetchData: url => fetchData(url)
  }
}

export default useAxios



