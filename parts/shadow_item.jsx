import { Image } from "@heroui/react";

import ImageAvg from './image_avg'


export default (props) => {
  return (
    <div>
        <a href={props.link}>
            <div className={`relative item-perspective ${props.className}`}>
                <section className={`img rounded-xl ${props.rotateOff ? 'rotate-off' : ''}`}>
                    <Image src={props.url} />
                </section>
                {/* <div ></div> */}
                <ImageAvg src={props.url} />
            </div>
            {props.text ? <p className="text-sm mt-2">{props.text}</p> : ''}
        </a>
    </div>
    );
}
