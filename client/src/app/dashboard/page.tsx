'use client';
import Map from '../../components/map';


export default function Dashboard() {
  return (
    <>
      <div
        style={{
          width: "20vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          position: "relative",
          left: 0,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,  
        }}
      >
        <Map/>
      </div>
    </>
  );
}
