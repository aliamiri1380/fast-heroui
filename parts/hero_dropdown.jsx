import Popover from "./popover"
// import Tooltip from "./tooltip"
// import ListItems from "./list_items"
// import { Button } from "@heroui/react"

// export default () => {
//     return (
//         // <Popover content={<ListItems items={[
//         //     {'title': 'hello', 'items': [
//         //         {'content': 'hello'},
//         //         {'content': 'hello'},
//         //         {'content': 'hello'},
//         //         {'content': 'hello'},
//         //         {'content': 'hello'},
//         //         {'content': 'hello'},
//         //     ]}
//         // ]} />}>
//         <Popover placement="left" content={
//             <Popover placement="left" content={'hello'}>
//                 <Button>hello</Button>
//             </Popover>
//         }>
//             <Button>hello</Button>
//         </Popover>
//     )
// }


// 'use client'

// import {filter_keys} from "./utils";
// import {Dropdown, DropdownTrigger, DropdownItem, DropdownMenu} from '@heroui/react'
// import Icon from './icon'


// export default ({items=[], menuProps={}, ...props}) => {

//     return (
//         <Dropdown className='dropdown' placement={"auto"} {...filter_keys(props, ['children'])}>
//             <DropdownTrigger>
//                 {props.children}
//             </DropdownTrigger>
//             <DropdownMenu variant="flat" emptyContent="خالی ..." {...filter_keys(menuProps, ['children'])}>
//                 {(items ?? []).map(r => <DropdownItem {...filter_keys(r, ['content', 'iconProps'])} startContent={r.icon ? <><Icon {...r.iconProps}>{r.icon}</Icon>{r.startContent}</> : r.startContent}>{r.content}</DropdownItem>)}
//             </DropdownMenu>
//         </Dropdown>
//     )
// }




'use client'

import { callFunctionsSequentially, filter_keys } from "./utils";
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, ListboxItem, Input } from '@heroui/react'
import Icon from './icon'
import ListItems from './list_items'
import { cloneElement } from "react";
import { useState } from "react";


function SubList({ items, popHandlers, setDropOpenHandlers, combo, selectable, onSelect, subPlacement="left", ...props }) {
    return <div>
        {/* <Popover placement="left" isOpen={popHandlers[0]} content={ */}
        <ListItems wrapperClassName={'min-w-[200px]'} items={[{
            'items': items.map(item => {
                const [popOpen, setPopOpen] = useState(false)
                if (item == "combo") {
                    return { 'content': <Input fullWidth onChange={(e) => e.preventDefault() || combo.input[1](e.target.value)} value={combo.input[0]} endContent={<Icon>search</Icon>} placeholder="جستجو" size="sm" />, 'onClick': (e) => e.target.closest("li").querySelector("input").focus(), 'props': { 'className': '!p-0 mb-1 !bg-transparent' } }
                }
                else if (item.type == "item") {
                    const selected = selectable?.path?.concat([item.value ?? item.content])
                    console.log(selectable);
                    
                    return { 'content': item.content, ...item, 'onClick': (e) => item.onClick?.({ e: e }) || (selectable ? selectable.handler[1](selected) || onSelect(selected) : undefined) || callFunctionsSequentially(setDropOpenHandlers.concat(setPopOpen).reverse().map(r => () => r(false)), 50), 'endContent': selectable?.handler[0].includes(item.value ?? item.content) ? <Icon>check</Icon> : undefined, 'className': `${selectable?.handler[0].includes(item.value ?? item.content) ? '!text-blue-500 !bg-blue-500/20' : ''}` }
                }
                else if (item.type == "sub") {
                    console.log(selectable ? { ...selectable, 'path': selectable.path.concat([item.value ?? item.content]) } : undefined);

                    return {
                        // 'content': <SubList items={item.items} setDropOpenHandlers={setDropOpenHandlers.concat(setPopOpen)}>{item.content}</SubList>,
                        'content': <Popover placement={subPlacement} isOpen={popOpen} subPlacement={subPlacement} content={<SubList onSelect={onSelect} selectable={selectable ? { ...selectable, 'path': selectable.path.concat([item.value ?? item.content]) } : undefined} items={item.items} setDropOpenHandlers={setDropOpenHandlers.concat(setPopOpen)} />}>
                            {item.content}
                        </Popover>,
                        ...filter_keys(item, ['items', 'type', 'content']),
                        'className': `${selectable?.handler[0].includes(item.value ?? item.content) ? '!text-blue-500 !bg-blue-500/20' : ''}`,
                        'props': {
                            'endContent': <Icon size="lg">{"chevron-"+subPlacement}</Icon>,
                            'onMouseEnter': (e) => !document.querySelector("input:focus") ? setPopOpen(true) : '',
                            'onMouseLeave': (e) => !document.querySelector("input:focus") ? setPopOpen(false) : ''
                        }
                    }
                }
                else if (item.type == "combo") {
                    const [comboInput, setComboInput] = useState("")
                    return {
                        'content':
                            // <SubList items={['combo'].concat(item.items.filter(r => new RegExp(comboInput, "i").test(r.content)))} combo={{ 'input': [comboInput, setComboInput] }} popHandlers={[popOpen, setPopOpen]} setDropOpenHandlers={setDropOpenHandlers.concat(setPopOpen)}>{item.content}</SubList>
                            <Popover placement={subPlacement} isOpen={popOpen} content={<SubList subPlacement={subPlacement} onSelect={onSelect} items={['combo'].concat(item.items.filter(r => new RegExp(comboInput, "i").test(r.content)))} combo={{ 'input': [comboInput, setComboInput], 'selecteds': [] }} setDropOpenHandlers={setDropOpenHandlers.concat(setPopOpen)} />}>
                                {item.content}
                            </Popover>
                        ,
                        ...filter_keys(item, ['items', 'type', 'content']),
                        'props': {
                            'endContent': <Icon size="lg">{"chevron-"+subPlacement}</Icon>,
                            'onMouseEnter': (e) => !document.querySelector("input:focus") ? setPopOpen(true) : '',
                            'onMouseLeave': (e) => !document.querySelector("input:focus") ? setPopOpen(false) : ''
                        }
                    }
                }

            })
        }]} />
    </div>
}

function dropItemsParser({ items, setDropOpenHandlers = [], selectable, subPlacement, onSelect }) {
    return items.map(item => {
        const [selected, setSelected] = useState([])
        if (item.type == "item") {
            return <DropdownItem {...filter_keys(item, ['icon', 'iconProps', 'startContent'])} {...item.props} startContent={item.icon ? <><Icon {...item.iconProps}>{item.icon}</Icon>{item.startContent}</> : item.startContent} className={`${selected.includes(item.value ?? item.content) ? '!text-blue-500 !bg-blue-500/20' : ''}`}>{item.content}</DropdownItem>
        }
        else if (item.type == "label") {
            return <DropdownItem {...item.props} isReadOnly className="!bg-transparent !text-default-500"><span className="text-xs">{item.content}</span></DropdownItem>
        }
        else if (item.type == "element") {
            return <DropdownItem {...item.props} className="!bg-transparent">{item.content}</DropdownItem>
        }
        else if (item.type == "sub") {
            const [popOpen, setPopOpen] = useState(false)
            return <DropdownItem {...filter_keys(item, ['icon', 'iconProps', 'startContent'])} {...item.props} startContent={item.icon ? <Icon {...item.iconProps}>{item.icon}</Icon> : ''} onMouseEnter={() => setPopOpen(true)} onMouseLeave={() => !document.querySelector("input:focus") ? setPopOpen(false) : ''} endContent={<Icon size="lg">{"chevron-"+subPlacement}</Icon>} className={`${selected.includes(item.value ?? item.content) ? '!text-blue-500 !bg-blue-500/20' : ''}`} >
                {/* <SubList items={item.items} popHandlers={[popOpen, setPopOpen]} setDropOpenHandlers={setDropOpenHandlers.concat(setPopOpen)}>{item.content}</SubList> */}
                <Popover placement={subPlacement} isOpen={popOpen} content={<SubList subPlacement={subPlacement} selectable={selectable ? { 'path': [item.value ?? item.content], 'handler': [selected, setSelected] } : undefined} onSelect={onSelect} items={item.items} setDropOpenHandlers={setDropOpenHandlers.concat(setPopOpen)} />}>
                    {item.content}
                </Popover>
            </DropdownItem>
        }
    })
}


export default ({ items = [], menuProps = {}, selectable, onSelect = () => "", subPlacement="left", ...props }) => {
    const [dropOpen, setDropOpen] = useState(false)

    return (
        <Dropdown className='dropdown' isOpen={dropOpen} onClose={() => setDropOpen(false)} placement={"auto"} >
            <DropdownTrigger>
                {/* {cloneElement(props.children, { onClick: () => setDropOpen(true) })} */}
                <span onClick={(e) => setDropOpen(true)} className="dropdown-trigger">{cloneElement(props.children, { onClick: (e) => setDropOpen(true) })}</span>
            </DropdownTrigger>
            <DropdownMenu variant="flat" emptyContent="خالی ...">
                {
                    dropItemsParser({
                        items: items,
                        // items:
                        //     [
                        //         { 'type': 'item', 'content': '1' },
                        //         { 'type': 'item', 'content': '2' },
                        //         { 'type': 'item', 'content': '3' },
                        //         {
                        //             'type': 'sub', 'content': '4', 'items': [
                        //                 { 'type': 'item', 'content': '5' },
                        //                 { 'type': 'item', 'content': '6' },
                        //                 {
                        //                     'type': 'sub', 'content': '7', 'items': [
                        //                         { 'type': 'item', 'content': '8' },
                        //                         {
                        //                             'type': 'sub', 'content': '9', 'items': [
                        //                                 { 'type': 'item', 'content': '11' },
                        //                                 { 'type': 'item', 'content': '12' },
                        //                             ]
                        //                         },
                        //                         {
                        //                             'type': 'sub', 'content': '13', 'items': [
                        //                                 { 'type': 'item', 'content': '14' },
                        //                                 { 'type': 'item', 'content': '15' },
                        //                             ]
                        //                         },
                        //                     ]
                        //                 },
                        //             ]
                        //         },
                        //     ],
                        setDropOpenHandlers: [setDropOpen], selectable: selectable, onSelect: onSelect, subPlacement: subPlacement
                    })
                }
            </DropdownMenu>
        </Dropdown>
    )
}