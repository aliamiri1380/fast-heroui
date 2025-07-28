"use client"

import { Checkbox, CheckboxGroup, ScrollShadow } from "@heroui/react"
import { useEffect, useRef, useState } from "react"
import $ from 'jquery'
import { useMemo } from "react"


export default (props) => {
    const [selected, setSelected] = useState(['همه'])
    const ref = useRef()
    useMemo(() => {
        $(ref.current).parents("[data-open='true']").find('button div span:eq(1)').text(selected[0] ?? 'همه')
        if ($(ref.current).parents("[data-open='true']").length)
            props.onChange(selected[0] ?? 'همه')
    }, [selected])
    return <CheckboxGroup ref={ref} onValueChange={(v) => setSelected([v.at(-1)])} value={selected}>
    <ScrollShadow orientation='vertical' className='max-h-[400px] overflow-y-auto'>
        {props.items.map(r => <div className='w-full'><Checkbox value={r} className='py-6'>{r}</Checkbox></div>)}
    </ScrollShadow>
</CheckboxGroup>
}