import { MapContainer, GeoJSON, TileLayer, Marker } from 'react-leaflet';
import { WeatherLayer } from './weatherLayer';
import { AerodromeLayer } from './aerodromeLayer';

import { aerodromes } from './aerodromes.ts';

import * as tmaShapes from './../../data/tma.json';
import * as airway from './../../data/airway.json';
import * as runway from './../../data/runway.json';


import styles from './styles.module.css';

export function Map() {

  const tmaStyle = { color: '#1ce8d8' };
  const airwayStyle = { color: '#fff', weight: 1, opacity: 0.4 };
  const runwayStyle = { color: '#F8CB02' };



  function onEachTma(tma: any, layer: any) {  
    const { ident, nam } = tma.properties;
    layer.bindTooltip(`<code>${ident}</code> | <strong>${nam}</strong>`)
  }

  return (
    <MapContainer 
      className={styles.leafletContainer} 
      center={[-15.7870, -47.7579]} 
      zoom={4} 
      scrollWheelZoom={true}
      attributionControl={false}
    >

      <TileLayer url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"/>

      <WeatherLayer />

    
      <GeoJSON 
        pathOptions={tmaStyle} 
        data={tmaShapes}
        onEachFeature={onEachTma}
      />

      <GeoJSON 
        pathOptions={runwayStyle} 
        data={runway}
      />

      <GeoJSON 
        pathOptions={airwayStyle} 
        data={airway}
      />

      <AerodromeLayer />
    </MapContainer>
  )
}

 
