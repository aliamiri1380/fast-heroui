import React from "react";
import Button from './button'
import Circle from "./circle";

export default (props) => {
  return (
    <div className="grid gap-3 w-full py-5 px-4" style={{'gridTemplateColumns': `repeat(auto-fit, minmax(120px, 1fr))`}}>
        {props.items.map(r => (
          <div className={`m-auto text-center`}>
              <a href={r.link} className={`${props.skew ? "skew-icon-wrap" : ''}`}>
                {props.button ? <Button {...r} style={{'background': r.bg, 'color': r.color, "width": '60px', 'height': '60px'}} isIconOnly size="lg" >{r.icon}</Button> : 
              <Circle {...r} />}
              {r.text ? <p className="text-center text-[12px] font-bold py-1.5">{r.text}</p> : ''}
            </a>
            </div>
        ) )}
    </div>
  );
}
