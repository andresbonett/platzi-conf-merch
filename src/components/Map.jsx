import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718706,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCSrPhhkdzlyrFtsZmiYs9WB_duLFtZoFs">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}
