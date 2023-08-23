import { useState } from 'react';
import axios from 'axios';

function useAxios() {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(prevData => [...prevData, response.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return [data, fetchData];
}

export default useAxios;
