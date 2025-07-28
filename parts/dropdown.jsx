import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
// import Combobox from '@/components/parts/combobox'

// import { DropDrawer, DropDrawerContent , DropDrawerItem, DropDrawerTrigger } from "@/components/ui/dropdrawer";

import { filter_keys } from "./utils"
import Icon from "./icon"
import { useEffect, useState } from "react"
import { Input } from "@heroui/react"
import Popover from "./popover"

// function Combo(){

// }

function itemsParser({items, comboData, comboState=[[], ()=>""], id}) {
    return items.map((item, index) => {
        if (item.type === 'label') {
            return <DropdownMenuLabel {...filter_keys(item, ['type', 'content'])}>{item.content}</DropdownMenuLabel>
        } else if (item.type === 'divider') {
            return <DropdownMenuSeparator />
        } else if (item.type === 'item') {
            // console.log(comboState);

            id.n ++
            return (
                <DropdownMenuItem  className={`rounded-lg transition-all py-2 ${comboState[0]?.includes(item.value ?? item.content) ? '!bg-primary/20 !text-primary' : ''}`} onClick={() => {
                    const data = {id: id.n, value: item.value ?? item.content,  'combo_path': comboData?.concat(item.value ?? item.content) }
                    item.onClick && item.onClick(data)
                    comboState[1](data.combo_path)
                }} {...(item.props ?? {})}>
                    {item.icon && <Icon  {...(item.iconProps ?? {})}>{item.icon}</Icon>}
                    {item.content}
                </DropdownMenuItem>
            )
        } else if (item.type === 'sub') {
            return <SubMenu idObj={id} comboData={comboData?.concat(item.value ?? item.content)} comboState={comboState} items={item.items} icon={item.icon}>{item.content}</SubMenu>
        } else if (item.type === 'combo') {
            return <SubMenu idObj={id} comboState={item.comboState} items={item.items} combo icon={item.icon}>{item.content}</SubMenu>
        }
    })
}

function SubMenu({ items, icon, combo, comboData, comboState, idObj, ...props }) {
    const [comboValue, setComboValue] = useState("")
    // const [comboSelected, setComboSelected] = useState("")
    // useEffect(() => setComboValue(props.children), props.children)

    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger dir="auto" className={`flex items-center justify-between w-full rtl:flex-row-reverse gap-2 [&>svg]:hidden ${comboState[0].includes(props.children) ? '!bg-primary/20 !text-primary' : ''}`}>
                <Icon>chevron-left</Icon>
                <div className={`flex items-center gap-2`}>
                    {icon && <Icon>{icon}</Icon>}
                    {props.children}
                </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className={'p-2'}>
                {
                    combo ? (
                        <>
                            <Input size="sm" placeholder="جتسجو" className="mb-1" startContent={<Icon size="sm" className="opacity-50">search</Icon>} onChange={(e) => setComboValue(e.target.value)} />
                            {itemsParser({items: items.filter(r => {
                                return new RegExp(comboValue, "i").test(r.content)
                            }), comboData: [props.children], id: idObj, comboState: comboState})}
                        </>
                ) : itemsParser({items: items, comboData: comboData, id: idObj, comboState: comboState})
                }
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    )
}

export default function App({ items = [], fullWidth=false, ...props }) {
    const id = {n: 0}
    if (typeof items[0] != 'object'){
        items = items.map(r => ({'type': 'item', 'content': r}))
    }
    return (
        <DropdownMenu >
            <DropdownMenuTrigger className={fullWidth ? "w-full" : ''} {...filter_keys(props, ['children'])}>
                {props.children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit p-2" align="start">
                {
                    itemsParser({items: items, id: id})
                    // itemsParser([
                    //     { type: 'label', content: 'My Account' },
                    //     { type: 'item', content: 'Profile', icon: 'user' },
                    //     { type: 'item', content: 'Billing', icon: 'user' },
                    //     { type: 'item', content: 'Settings', icon: 'user' },
                    //     { type: 'item', content: 'Keyboard shortcuts', icon: 'user' },
                    //     { type: 'divider' },
                    //     {
                    //         type: 'sub', content: 'Invite users', icon: 'user', items: [
                    //             { type: 'item', content: 'Invite users', icon: 'user' },
                    //             { type: 'item', content: 'Manage team', icon: 'user' },
                    //             { type: 'divider' },
                    //             {
                    //                 type: 'sub', content: 'More...', icon: 'user', items: [
                    //                     { type: 'item', content: 'Invite by email', icon: 'user' },
                    //                     { type: 'item', content: 'Invite by link', icon: 'user' },
                    //                     { type: 'item', content: 'Import from CSV', icon: 'user' }
                    //                 ]
                    //             }
                    //         ]
                    //     },
                    //     { type: 'divider' },
                    //     { type: 'item', content: 'GitHub', icon: 'user' },
                    //     { type: 'item', content: 'Support', icon: 'user' },
                    //     { type: 'item', content: 'API', disabled: true, icon: 'user' },
                    //     { type: 'divider' },
                    //     { type: 'item', content: 'Log out', icon: 'user' }
                    // ])
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

