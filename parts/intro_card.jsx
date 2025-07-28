"use client"
import {Card, CardHeader, CardBody, Image} from "@heroui/react";
// import Animate from "../../../src/parts/animate"

export default function App(props) {
  return (
    <Card className="py-4 bg-transparent shadow-none">
      <CardBody className="overflow-visible py-2">
        <img src={props.src} />
        {/* <Animate json={props.src} height={props.height ?? 320} loop={true} loopDelay={3000} /> */}
      </CardBody>
      <CardHeader dir="rtl" className="pb-0 pt-2 px-4 flex-col items-center text-center">
        <h4 className="font-bold text-large pb-4">{props.title}</h4>
        <p className="text-tiny">{props.text}</p>
      </CardHeader>
    </Card>
  );
}
