import { useEffect, useState } from 'react';
import { TileLayer } from 'react-leaflet';

export function WeatherLayer() {
  const [ radarPath, setRadarPath ] = useState('');

  useEffect(() => {
    const url = "https://api.rainviewer.com/public/weather-maps.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const { radar: { nowcast: [,, last] }} = json;
        setRadarPath(last.path);
        
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [radarPath]);

  if(!radarPath) return null;
  const tileUrl = `https://tilecache.rainviewer.com${radarPath}/512/{z}/{x}/{y}/3/1_1.png`;

  return (
    <TileLayer url={tileUrl}/>
  )
};