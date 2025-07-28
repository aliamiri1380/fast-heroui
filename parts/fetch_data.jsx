"use client"

import { useEffect, useState } from "react"

export default ({url, windowKey, body={}, method="POST"}) => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(url, {method: method, body: JSON.stringify(body)}).then(r => r.json()).then(r => {
            window[windowKey] = r
        })
    }, [])
    return ''
}