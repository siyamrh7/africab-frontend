import React from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>hello</div>;

const DetailsMapCon = ({post}) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 12
  };
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: { lat: post.location.coordinates[1], lng: post.location.coordinates[0] },
    map,
    title: 'Hello World!'
    });
    return marker;
   };
if (!post) return null
  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat:post.location.coordinates[1],lng:post.location.coordinates[0]}}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >

      </GoogleMapReact>
    </div>
  )
}

export default DetailsMapCon