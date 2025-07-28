// import { Select, SelectItem } from "@heroui/react";
import { filter_keys } from "./utils";

// export default ({items=[], values, defaultValues, onChange, ...props}) => {
//     function get_indexes(x){
//         return x.map(r => parseInt(x.split('.')[1]))
//     }

//     return (
//         // <div>
//             <Select {...props} selectedKeys={} >
//                 {items.map((item) => (
//                     <SelectItem {...filter_keys(item, ['content'])}>{item.content}</SelectItem>
//                 ))}
//             </Select>
//         // </div>

//     );
// }

import React, { useEffect, useMemo } from "react";
import { Select, SelectItem } from "@heroui/react";


export default ({items=[], values=[], keysAsIndex, defaultSelectedKeys, onChange=()=>"", ...props}) => {
    items = typeof items[0] != 'object' ? items.map((r,j) => ({_NDID: j, content: r, value: String(r)})) : items.map((r,j) => ({_NDID: j, ...r, ...{'value': r.value == undefined && typeof r.content == "string" ? String(r.content) : String(r.value)}}))
    items = items.map((i,j) => ({_NDID: keysAsIndex ? j : i.content, ...i}))

    console.log(items);
    
    
    const [_values, setValues] = React.useState(new Set([]));
    
    const handleSelectionChange = (e) => {
        setValues(new Set(e.target.value.split(",")));
        onChange(e.target.value.split(","))
    };

    useEffect(() => {
        if (defaultSelectedKeys){
            console.log(defaultSelectedKeys);
            
            setValues(new Set(defaultSelectedKeys.map(r => items[parseInt(r)].value)));
        }
    }, [defaultSelectedKeys])
    
    useEffect(() => {
        
        if (items.length && values != undefined && values.length){
            let __values = !Array.isArray(values) && !(values instanceof Set) ? [values] : [...values]
            console.log('++',__values, values, items, new Set(__values.map(r => items.find(r2 => (r2.value ?? r2.content) == r).value)));
            setValues(new Set(__values.map(r => items.find(r2 => (r2.value ?? r2.content) == r).value)));
        }
        
    }, [values])


    // console.log(_values, items);
    

    

    return (
        <div className="flex w-full max-w-xs flex-col gap-2" >
            <Select
                {...props}
                selectedKeys={_values}
                onChange={handleSelectionChange}
            >
                {items.map((item) => (
                    // <SelectItem {...filter_keys(item, ['content', 'value'])} key={item.value}>{item.content ?? item.value}</SelectItem>
                    <SelectItem {...item.props} onClick={(e) => item.onClick(item.value ?? item.content)} key={item.value}>{item.content ?? item.value}</SelectItem>
                ))}
            </Select>
        </div>
    );
}

