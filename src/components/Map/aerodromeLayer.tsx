import { Marker, Tooltip, Circle } from 'react-leaflet';
import L from 'leaflet';
import { useState } from 'react';

import { AerodromeModal } from './../AerodromeModal';


import { aerodromes } from './aerodromes.ts';

const aerodromeIcon = L.icon({
  iconUrl: 'https://res.cloudinary.com/ruyawm/image/upload/v1654136858/test/Frame_1_cf7fga.svg',

  iconSize: [12, 12], // size of the icon
  shadowSize: null, // size of the shadow
  iconAnchor: null, // point of the icon which will correspond to marker's location
  shadowAnchor: null,  // the same for the shadow
  popupAnchor: null // point from which the popup should open relative to the iconAnchor
});


export function AerodromeLayer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ aerodromeIcao, setAerodromeIcao ] = useState('');

  const filteredAerodromes = aerodromes.filter((aerodrome) => {
    return aerodrome.localidade_id.startsWith('SB');
  });

  function handleAerodromeClick(icao: string) {
    setAerodromeIcao(icao);

    if(aerodromeIcao === '') {
      return;
    }

    setModalIsOpen(true);
    
    console.log(icao);
    return;
  }

  return (
    filteredAerodromes.map(({latitude_dec, longitude_dec, FID, localidade_id, nome}) => {
      return (
        <>
          { modalIsOpen ? <AerodromeModal icao={aerodromeIcao} setModalIsOpen={setModalIsOpen} /> : null}

          <Circle 
            center={[latitude_dec, longitude_dec]} 
            radius={5000} 
            key={FID}
            eventHandlers={{
              click: () => handleAerodromeClick(localidade_id),
            }}
          />

        </>
      );
    })  
  );
}