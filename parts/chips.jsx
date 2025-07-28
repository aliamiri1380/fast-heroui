import {Chip} from "@heroui/chip";
import Circle from "./circle";
// import {ScrollShadow} from "@heroui/scroll-shadow";
import ScrollShadow from "./xscroll_shadow";
import Button from './button'


export default (props) => {
  return (
    <ScrollShadow hideScrollBar orientation="horizontal" className="w-full" dir="rtl">
        <div className="flex gap-3 items-center w-fit px-4" dir="rtl">
          {props.items.map((r,i) => (
              <div className="py-3 flex justify-start items-center">
                <a href={r.url}>
                  <Button radius={props.rounded ? 'full' : ''} size="sm" className={`bg-slate-200 bg-opacity-40 backdrop-saturate-200 ${props.rounded ? '' : ''} h-7 px-0`}><Chip className={`${props.color ?? 'bg-transparent'} ${props.xsText ? 'text-xs' : ''} ${props.rounded ? '' : ''} h-7 px-0`} variant="flat" avatar={r.src ? <Circle {...r} /> : ''}>{r.text}</Chip></Button>
                </a>
                {props.betweenContent && i+1 != props.items.length ? props.betweenContent : ''}
              </div>
          ))}
        </div>
    </ScrollShadow>
  );
}
