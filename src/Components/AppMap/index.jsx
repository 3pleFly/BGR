import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Environment } from "../../Core/constants";
import { useEffect, useRef, useState } from "react";

const center = {
  lat: Number(Environment.MAP_LATITUDE),
  lng: Number(Environment.MAP_LONGITUDE),
};

export const AppMap = ({ style }) => {
  const [map, setMap] = useState();
  const mapRef = useRef(null);

  useEffect(() => {
    if (map) {
      const map = mapRef.current;
      const advancedMarker = new window.google.maps.Marker({
        position: center,
        map: map,
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        label: "",
      });

      advancedMarker.setAnimation(window.google.maps.Animation.DROP);
    }
  }, [map]);

  return (
    <LoadScript googleMapsApiKey={`${Environment.MAP_API_KEY}&loading=async`} >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "40vh", ...style }}
        zoom={18}
        center={center}
        onLoad={(map) => {
          mapRef.current = map;
          setMap(map);
        }}
      ></GoogleMap>
    </LoadScript>
  );
};
