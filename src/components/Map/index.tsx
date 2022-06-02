import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';

import { AerodromeLayer } from './Layers/aerodromeLayer';
import { AirwayLayer } from './Layers/airwayLayer';
import { RunwayLayer } from './Layers/runwayLayer';
import { TmaLayer } from './Layers/tmaLayer';
import { WeatherLayer } from './Layers/weatherLayer';

import styles from './styles.module.css';

export function Map() {
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
      <AerodromeLayer />
      <TmaLayer />
      <RunwayLayer />
      <AirwayLayer />

    </MapContainer>
  )
}
