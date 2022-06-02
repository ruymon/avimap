import { Marker, Tooltip, Circle } from 'react-leaflet';
import { useState } from 'react';

import { AerodromeModal } from './../../AerodromeModal';

import { aerodromes } from './../../../data/aerodromes.ts';

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
            pathOptions={{ color: '#506574' }}
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