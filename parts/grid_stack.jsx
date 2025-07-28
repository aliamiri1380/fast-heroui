import { cloneElement, useEffect, useRef, useState } from "react";
import { filter_keys, render_children } from "@/components/parts/utils";
export default ({fit, fill, gridTemp, width, className, ...props}) => {
  const fit_fill = fit ? 'fit' : fill ? 'fill' : 'fit'
  const ref = useRef()
  const [widthState, setWidthState] = useState(width)
  useEffect(() => {
    setWidthState(width ?? ref.current?.offsetWidth)
    
  }, [width, ref.current?.offsetWidth])
  return (
    <div className={`grid ${gridTemp ?? ''} gap-3 h-fit ${className ?? ''}`} style={!gridTemp ? {'gridTemplateColumns': `repeat(auto-${fit_fill}, minmax(${widthState}px, 1fr))`} : {}}>
        {/* {props.children.map((r,i) => i != 0 ? r : cloneElement(r, {ref: ref}))} */}
        {Array.isArray(props.children) ? props.children : [props.children].map((r,i) => r)}
    </div>
  );
}
