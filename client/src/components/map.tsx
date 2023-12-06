import React from "react";
import GoogleMapReact from "google-map-react";

interface ReactComponent {
  text: string;
}

interface Map {
  lat: number;
  lng: number;
  centreLat?: number;
  centreLong?: number;
}

const AnyReactComponent = ({ text }: ReactComponent) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 40.7128,
      lng: -74.006,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: "63vh",
        position: "relative",
        // top: "35vh",
        margin: "10px",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
