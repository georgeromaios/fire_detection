import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

// Define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              description: ev.description, // Add description
              geometries: ev.geometries, // Add geometries (date and coordinates)
            })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC2yl0ZMhKwww51i9u5l57fTDWsNAAw3Gc' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 40.6401,
    lng: 22.9444,
  },
  zoom: 6,
};

export default Map;
