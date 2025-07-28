"use client"

import { Tabs, Tab } from "@heroui/react";
import { useMemo, useRef, useState } from "react";
import Swiper from "./swiper";
import $ from 'jquery'
import Icon from "./icon";
// import { useSearchParams } from "next/navigation";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default ({ items, ...props }) => {
    if (typeof window == "undefined") {
        return ''
    }
    // const searchParams = useSearchParams()
    let [searchParams, setSearchParams] = useSearchParams();
    const [swiper, setSwiper] = useState();
    const [selected, setSelected] = useState();
    const tab = useRef();

    const clickTab = (el, i) => {
        el = $(el)
        i = parseInt(i)
        const t = $(el).find(`button:eq(${i})`)

        console.log(t[0]);


        if (t[0]) {
            var tabWidth = t.outerWidth()
            var tabPosition = t.position().left
            var containerScrollLeft = el.scrollLeft()
            var newScrollLeft = tabPosition + containerScrollLeft - ($('body').width() / 2) + (tabWidth / 2)

            el.animate({ scrollLeft: newScrollLeft }, 300);
            t[0].click()
            props.onChange && props.onChange({ index: i, 'name': items[i].name })
        }
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-slot="tabList"] button')) {
                setSelected($(e.target.closest('[data-slot="tabList"] button')).index())
            }
        })
        window.addEventListener('load', () => {
            if (searchParams.get("which")) {
                setTimeout(() => clickTab(tab.current, searchParams.get("which")), 350)
            }
        })
    }, [$('[data-slot="tabList"]').length])

    useMemo(() => {
        if (swiper) {
            swiper.slideTo(selected)
            props.onChange && props.onChange({ index: selected, 'name': items[selected].name })
        }
    }, [selected])


    return (
        <div className="w-auto flex flex-warp min-w-0 flex-col items-center">
            <Tabs classNames={{ 'tabWrapper': 'w-min' }} onSelectionChange={(i) => setSelected(i)} ref={tab} {...props} defaultSelectedKey={0}>
                {
                    items.map((r, i) => <Tab key={i} title={<div className="flex items-center justify-around space-x-2">{r.icon ? <Icon center size="xs">{r.icon}</Icon> : ''}<span>{r.title}</span></div>}></Tab>)
                }
            </Tabs>
            <Swiper onSwiper={setSwiper} onSlideChange={(i) => clickTab(tab.current, i)} autoWidth disablePaddingContainer className="flex" {...props.swiperProps}>
                {
                    items.map((r, i) => r.content)
                }
            </Swiper>
        </div>
    );
}