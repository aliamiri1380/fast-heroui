import ComponentStack from "./component_stack";
import { RenameObj, LazyAPI } from "@/utils";
import EmptyResult from "./empty_result";
import { useEffect, useState } from "preact/hooks";

export default ({ component, async_from, asyncResultKey, result_map={}, divide = false }) => {
    const [res, setRes] = useState([])

    result_map = Object.entries(result_map)

    const ResultMap = (x) => {
        x = {...x}
        result_map.map(r => x = RenameObj(x, r[0], r[1]))
        return x
    }
    useEffect(() => {
        LazyAPI({isDataFetch: true,url: async_from, method: 'get', onSuccess: r => {
            r = asyncResultKey ? r[asyncResultKey] : r
            setRes(r)
        }})
    }, [])
    

    return res.length ? <ComponentStack component={component} items={res.map(r => ResultMap(r))} divide={divide} /> : <EmptyResult />
}  