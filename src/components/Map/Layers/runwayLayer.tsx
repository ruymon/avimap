import { GeoJSON } from 'react-leaflet';

import * as runway from './../../../data/runway.json';

export function RunwayLayer() {
  const runwayStyle = { color: '#506574' };

  return (
    <GeoJSON 
      pathOptions={runwayStyle} 
      data={runway}
    />
  )
}