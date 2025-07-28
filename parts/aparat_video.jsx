"use client"

import { useEffect, useRef } from "react";
import $ from 'jquery'


export default ({ uuid }) => {
    const div = useRef()
    const src = `https://www.aparat.com/embed/${uuid}?data[rnddiv]=45801538492&data[responsive]=yes`
    useEffect(() => {
        $(div.current).html(`<script type="text/JavaScript" src="${src}"></script>`)
    }, [uuid, div.current])
    console.log(`https://www.aparat.com/embed/${uuid}?data[rnddiv]=45801538492&data[responsive]=yes`);

    return <div id="45801538492" ref={div}></div>
}