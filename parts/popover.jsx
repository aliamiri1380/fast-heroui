// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//   } from "@/components/ui/popover"

// export default ({content, ...props}) => {
//     return (
//         <Popover>
//             <PopoverTrigger>{props.children}</PopoverTrigger>
//             <PopoverContent className={"w-max p-0" + (props.className ?? '')}>{content}</PopoverContent>
//         </Popover>
//     )
// }

import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { filter_keys } from "./utils";
import { useEffect, useRef, useState } from "react";

export default ({content, ...props}) => {
    const [sref, setSref] = useState()
    const ref = useRef()
    useEffect(() => {
        if (ref.current){
            setSref(ref.current)
        }
    }, [ref.current])
    
    return (
        <div ref={ref}>
            {sref && <Popover {...filter_keys(props, ['children'])} portalContainer={document.querySelector(".vaul-backdrop") && sref ? sref.closest('[data-vaul-drawer]') : document.querySelector('body')}>
                <PopoverTrigger>{props.children}</PopoverTrigger>
                <PopoverContent className={"w-max p-0" + (props.className ?? '')}>{content}</PopoverContent>
            </Popover>}
        </div>
    );
}
