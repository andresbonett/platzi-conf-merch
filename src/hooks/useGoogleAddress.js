import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGoogleAddress(address) {
  const [map, setMap] = useState({});
  const api_key = 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw';
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api_key}`;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(API);
      setMap(data.results[0].geometry.location);
    };
    fetchData();
  }, [API]);
  return map;
}
