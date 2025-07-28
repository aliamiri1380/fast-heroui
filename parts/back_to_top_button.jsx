"use client"

import Button from "./button"
import Icon from "./icon"
import $ from 'jquery'

export default () => {
    return <Button isIconOnly onClick={() => $('html').animate({scrollTop: 0,}, 'slow')} className="rounded-full"><Icon className="text-[20px] ">chevron-up</Icon></Button>
}