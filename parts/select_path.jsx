"use client"
import Select from "./select"
import { useEffect, useRef, useState } from "react"


export default function App(props) {
    function UpdateData(data,setter, onChange=() => ""){
        return (key,value) => {
            var l = {...data}
            if (!Object.keys(data).includes(key)){
                alert('wrong key')
            }
            l[key] = value
            setter(l)
            onChange()
            return [data[key],l[key]]
        }
    }
    const ref = useRef()
    const [value, setValue] = useState("")
    const [values, setValues] = useState({})
    const update_data = UpdateData(values, setValues)
    useEffect(() => {
        let _r = {}
        if (value.length){
            props.path[value].fields.map(r => r.name && (_r[r.name] = ""))
            setValues(_r)
        }
    }, [value])
    useEffect(() => {
        props.onChange(Object.assign(values,{"root": value}))
    }, [values])
    // const onChange = (e) => {
    //     console.log(e);
    //     let names, values
    //     if (e.target){
    //         names = [...$(e.target[0]).parents(".filters").find('div[aria-hidden] label select')].map(r => $(r).attr("name"))
    //         values = [...$(e.target[0]).parents(".filters").find('button label+div span')].map(r => $(r).text())
    //     }
    //     else{
    //         names = [...$(e.current).find('div[aria-hidden] label select')].map(r => $(r).attr("name"))
    //         values = [...$(e.current).find('button label+div span')].map(r => $(r).text())
    //     }
    //     console.log(names, values)
    //     let res = {}
    //     names.map((r,i) => res[r] = values[i])
    //     console.log(res);
    //     return res
    // }
    return <>
        <div ref={ref} className="filters grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Select items={Object.keys(props.path)} name="root" label={props.label} selectedKeys={[value]} onSelectionChange={(v) => setValue(Array.from(v)[0])} />
            {
                // (value.length ? Object.keys(props.path[value]) : []).map(r => 
                //     Object.keys(props.path[r].fields).length && Object.keys(props.path[r].fields).map(f => 
                //         <Select items={props.path[r].fields[f]} label={f} />)).filter(r => r)
                (value.length ? props.path[value].fields : []).map(field => field.name ? <Select value={values[field.name]} onSelectionChange={(e) => update_data(field.name, Array.from(e)[0])} name={field.name} items={field.value} label={field.label} /> : '')
            }
        </div>
    </>
}