import {Card, CardFooter} from "@heroui/card";
import { Image } from "@heroui/react";
import Button from './button'

export default (props) => {
  return (
    <div className="max-w-fit">
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image alt="Woman listing to music" className="object-cover" height={200} src="https://nextui.org/images/hero-card.jpeg" width={props.width ?? 200} />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] right-1 shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{props.text}</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            {props.actionText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
