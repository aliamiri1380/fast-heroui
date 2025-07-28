import React from "react";
import AnimatedToggle from "./animated_toggle";

export default ({ items = [], padding = '30px', defaultOpen, wrapperClassName }) => {
    const isFlex = wrapperClassName?.includes("flex")
    padding = isFlex ? '15px' : padding
    const counter = { value: 0 };
    // console.log('-', items);
    
    function renderTree(items, isSub = false) {
        return items.map((item,j) => {
                counter.value ++
                const uid = item.uid != undefined ? item.uid : counter.value;
                return <div style={{ paddingRight: isSub ? padding : '0' }} className={`${isFlex ? 'flex-none min-w-[300px] w-auto' : ''}`}>
                    {!item.sub ? <span><div className={`pr-4`}>{React.cloneElement(item.content, { uid: uid })}</div></span> : <AnimatedToggle defaultOpen={item.defaultOpen != undefined ? item.defaultOpen : defaultOpen} content={renderTree(item.sub, true)}><span><div className={`pr-4`}>{React.cloneElement(item.content, { uid: uid })}</div></span></AnimatedToggle>}
                </div>
            })
    }
    return <div className={`${wrapperClassName} ${isFlex ? 'px-4 gap-4' : ''}`}>
        {renderTree(items)}
    </div>
}

// import React from "react";
// import AnimatedToggle from "./animated_toggle";

// export default ({ items = [], padding = '30px' }) => {
//     const counter = { value: 0 };

//     function renderTree(items, isSub = false) {
//         return <div className="tree-wrapper">
//             {items.map((item) => {
//                 counter.value++;
//                 const uid = counter.value;
//                 return <div style={{ paddingRight: isSub ? padding : '0' }}>
//                     {!item.sub ? <span>{React.cloneElement(item.content, { uid })}</span> : <AnimatedToggle content={renderTree(item.sub, true)}><span>{React.cloneElement(item.content, { uid })}</span></AnimatedToggle>}
//                 </div>
//             })}
//         </div>
//     }

//     return <div>{renderTree(items)}</div>;
// };







// import Accordion from "./accordion";

// export default () => {

//     function renderTree(items) {
//         return <Accordion variant="light" showDivider={false} denseIndicator isCompact items={
//             items.map((item) => {
//                 return { 'title': item.title, 'content': !Array.isArray(item.content) ? item.content : <div className="pr-3">{renderTree(item.content)}</div> }
//             })
//         } />
//     }
//     const items = [
//         {
//             'title': 'امروز', 'content': [
//                 { 'title': 'امروز', 'content': 'امروز' },
//                 { 'title': 'امروز', 'content': [
//                     { 'title': 'امروز', 'content': 'امروز' },
//                     { 'title': 'امروز', 'content': 'امروز' },
//                     { 'title': 'امروز', 'content': 'امروز' },
//                 ]},
//                 { 'title': 'امروز', 'content': 'امروز' },
//             ]
//         },
//         {
//             'title': 'امروز', 'content': 'امروز'
//         },
//         {
//             'title': 'امروز', 'content': 'امروز'
//         },
//     ]
//     return renderTree(items)
// }