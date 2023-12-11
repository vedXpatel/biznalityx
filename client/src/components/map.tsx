import React from "react";
import GoogleMapReact from "google-map-react";
import { FaLocationDot } from "react-icons/fa6";

interface ReactComponent {
    text: string;
}

interface Map {
    pinData: Array<Array<number>>;
    ep?: Array<any> ;
    centreLat?: number;
    centreLong?: number;
    height?:string;
}

const AnyReactComponent = ({text}: ReactComponent) => <FaLocationDot style={{ color:'red'}}/>;
const EpiCenterComponent = ({text}: ReactComponent) => <FaLocationDot style={{ color:'blue'}}/>;

export default function SimpleMap({pinData, ep, height}: Map) {
    const defaultProps = {
        center: {
            lat: 40.7128,
            lng: -74.006,
        },
        zoom: 11,
    };
    console.log(ep);
    
    return (
        // Important! Always set the container height explicitly
        <div
            style={{
                height: height,
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
                                lat={40.7128}
                                lng={-74.006}
                                text="My Marker"
                            />
                {
                    pinData.map((data, index) => {
                        return (
                            <AnyReactComponent
                                key={index}
                                lat={data[0]}
                                lng={data[1]}
                                text="My Marker"
                            />
                        )
                    })
                }
                {
                   ep && ep.length>0 && ep.map((data,index)=>{
                    return(
                        <EpiCenterComponent
                        key={index}
                        lat={data[0]}
                        lng={data[1]}
                        text="My Marker"
                        />
                    )
                   })
                }
                </GoogleMapReact>
        </div>
    );
}
