// import * as Sortable from "@/components/ui/sortable";
// import React, { useEffect, useState } from "react";

// export default function SortableDynamicOverlayDemo({Component, values, orientation, wrapperClassName="", ...props}) {
//     const [tricks, setTricks] = useState([]);
//     useEffect(() => {
//         if (values && Array.isArray(values)) {
//             setTricks(values.map((r,i) => ({cid: i, ...r})));
//         } else {
//             setTricks([]);
//         }
//     }, [])

//     console.log("tricks", tricks);


//     return (
//         <Sortable.Root value={tricks} onValueChange={setTricks} getItemValue={(item) => item.cid} orientation={orientation} {...props}>
//             <Sortable.Content className={wrapperClassName}>
//                 {tricks.map((trick) => (
//                     <Item trick={trick} asHandle>{<Component {...trick} />}</Item>
//                 ))}
//             </Sortable.Content>
//             <Sortable.Overlay>
//                 {(activeItem) => {
//                     const trick = tricks.find((trick) => trick.cid === activeItem.value);
//                     if (!trick) return null;
//                     return <Component {...trick} />
//                 }}
//             </Sortable.Overlay>
//         </Sortable.Root>
//     );
// }

// function Item({trick, ...props }) {
//     return (
//         <Sortable.Item value={trick.cid} {...props}>
//             {props.children}
//         </Sortable.Item>
//     );
// }




"use client";

import * as Sortable from "@/components/ui/sortable";
import { Button } from "@/components/ui/button";
import * as React from "react";

export default function SortableDemo({ Component, values, orientation, wrapperClassName = "", ...props }) {
    const [tricks, setTricks] = React.useState([]);
    React.useEffect(() => {
        if (values && Array.isArray(values)) {
            setTricks(values.map((r, i) => ({ cid: i, ...r })));
        } else {
            setTricks([]);
        }
    }, [])

    return (
        <Sortable.Root
            value={tricks}
            onValueChange={setTricks}
            getItemValue={(item) => item.cid}
            orientation={orientation}
        >
            <Sortable.Content className="">
                {tricks.map((trick) => (
                    <Sortable.Item key={trick.cid} value={trick.cid} asHandle>
                        <Component {...trick} />
                    </Sortable.Item>
                ))}
            </Sortable.Content>
            <Sortable.Overlay>
                {(activeItem) => {
                    const trick = tricks.find((trick) => trick.cid === activeItem.value);
                    if (!trick) return null;
                    return <Component {...trick} />
                }}
            </Sortable.Overlay>
        </Sortable.Root>
    );
}