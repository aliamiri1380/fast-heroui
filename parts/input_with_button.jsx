"use client"

import { Input } from "@heroui/input"
import Button from "./button"
import Icon from "./icon"

export default ({icon, onClick=()=>"", buttonProps={}, ...props}) => {
    return <div className="w-full">
        <Input {...props} endContent={<div className="h-full relative"><Button onClick={onClick} style={{"left": (-5) + (parseInt(props.btnLeft ?? 0)), 'top': 3 + (parseInt(props.btnTop ?? 0))}} className={`absolute top-[${3 + (parseInt(props.btnTop ?? 0))}px]`} isIconOnly {...buttonProps}>{typeof icon == "string" ? <Icon>{icon}</Icon> : icon}</Button></div>}  />
    </div>
}