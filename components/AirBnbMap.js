import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function AirBnbMap({ searchResults }) {
  const [selectedLocation, setSeletectLocation] = useState({});

  //Transform the search results objects in to
  //{ latitude: 52.516272, longitude: 13.377722 },
  //object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //The latitude and longitude of the center of locations coordinates

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mirzazohaib/cleguogid002p01lkyiv5kfoo"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSeletectLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* The popup that should show if we click on a Marker */}

          {selectedLocation.long === result.long && (
            <Popup
              onClose={() => setSeletectLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </Map>
  );
}
export default AirBnbMap;
