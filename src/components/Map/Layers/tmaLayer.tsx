import { GeoJSON } from 'react-leaflet';

import * as tmaShapes from './../../../data/tma.json';

export function TmaLayer() {
  const tmaStyle = { color: '#FF3773' };

  function onEachTma(tma: any, layer: any) {  
    const { ident, nam } = tma.properties;
    layer.bindTooltip(`<code>${ident}</code> | <strong>${nam}</strong>`)
  }
  
  return (
    <GeoJSON 
      pathOptions={tmaStyle} 
      data={tmaShapes}
      onEachFeature={onEachTma}
    />
  )
}