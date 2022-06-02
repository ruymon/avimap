import { Marker } from 'react-leaflet';
import { aerodromes } from './aerodromes.ts';

import L from 'leaflet';

const helipointIcon = L.icon({
  iconUrl: 'https://res.cloudinary.com/ruyawm/image/upload/v1654137557/test/Frame_2_1_cgsax6.svg',

  iconSize: [12, 12], // size of the icon
  shadowSize: null, // size of the shadow
  iconAnchor: null, // point of the icon which will correspond to marker's location
  shadowAnchor: null,  // the same for the shadow
  popupAnchor: null // point from which the popup should open relative to the iconAnchor
});

export function HelipointLayer() {
  const filteredHelipoint = aerodromes.filter((aerodrome) => {
    return aerodrome.tipo.startsWith('HP');
  });

  console.log(filteredHelipoint);
  
  return (
    filteredHelipoint.map(({latitude_dec, longitude_dec, FID}) => {
      return <Marker position={[latitude_dec, longitude_dec]} icon={helipointIcon} key={FID}/>
    })  
  );
}