import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

interface CardData {
  title?: string;
  data?: number;
  imageSrc?: string;
}

export default function Stats({title, data, imageSrc}: CardData) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
      style={{width:'18vw',minHeight:'22vh', marginRight:'20px',padding:'10px',background:''}}
    >
      <h1 style={{fontSize:'25px',marginTop:'1vh'}}>{title}</h1>
      <h1 style={{fontSize:'40px',fontWeight:'bold', position:"relative",top:'1.5vh',left:'10%'}}>{data}</h1>
    </Card>
  );
}
