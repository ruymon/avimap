import { GeoJSON } from 'react-leaflet';

import * as airway from './../../../data/airway.json';

export function AirwayLayer() {
  const airwayStyle = { color: '#fff', weight: 1, opacity: 0.4 };

  return (
    <GeoJSON 
      pathOptions={airwayStyle} 
      data={airway}
    />
  )
}