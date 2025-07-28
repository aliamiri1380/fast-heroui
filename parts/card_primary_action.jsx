import { filter_keys } from "./utils";
import {Card, CardFooter, CardBody} from "@heroui/card";
import { Image, Button as Button2 } from "@heroui/react";
import Button from "./button";
import Dropdown from "./dropdown";

export default (props) => {
  // console.log(encodeURIComponent(BgDoodle().props.children[0]));
  
  return (
    <Card shadow="sm" className={`w-[150px] ${props.className}`} isPressable={!props.disableRipple} dir="ltr" onPress={props.onClick}>
        <CardBody className="overflow-visible relative w-[150px] p-3 perspective-container">
          {props.topLeftContent ? <div className="absolute left-1 top-1 z-20">
            {props.topLeftContent}
          </div> : ''}
        <div className="absolute w-full h-full top-0 left-0"><div className="bg-fixed w-full h-full" style={{backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(props.bgDoodle?.())}")`,}}></div></div>
        <div className="min-w-[120px] flex justify-center m-auto perspective">
          {props?.icon || <Image
              shadow="sm"
              radius="lg"
              alt={props.title}
              className="w-full object-cover w-fit min-h-[120px] max-h-[140px]"
              src={props.src}
          /> }
        </div>
        </CardBody>
        <CardFooter className="text-small justify-between">
        <b className="block w-full">{props.title}</b>
        <p className="text-default-500">{props.price}</p>
        </CardFooter>
    </Card>
  );
}