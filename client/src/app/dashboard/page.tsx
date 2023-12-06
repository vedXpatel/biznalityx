"use client";
import Map from "../../components/map";
import Stats from "../../components/stats";
import {Input} from "@nextui-org/react";

export default function Dashboard() {
  return (
    <>
      <div className="" style={{ display: "flex", flexDirection: "row" }}>
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
        ></div>
          <div className="" style={{display:"flex",flexDirection:'column', width:'100%',paddingBottom:'20px'}}>
              <Input style={{margin:'10px'}} color={"primary"}/>
        <Stats />
        <Map />
          </div>
      </div>
    </>
  );
}
