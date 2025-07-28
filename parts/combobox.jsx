"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Drawer } from 'vaul';

function Combobox({ items, value, setValue, setOpen }) {
    return (
        <Command>
            <CommandInput placeholder="انتخاب گزینه ..." className="h-9" />
            <CommandList>
                <CommandEmpty>چیزی پیدا نشد.</CommandEmpty>
                <CommandGroup>
                    {items.map((item) => (
                        <CommandItem
                        key={item}
                        value={item}
                        onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                        }}
                        >
                            {item}
                            <Check
                                className={cn(
                                    "ml-auto",
                                    value == item ? "opacity-100" : "opacity-0"
                                )}
                            />
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}

export default ({ items=[], autoResponsive, responsive, raw, onChange=()=>"", children }) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const setter = (e) => {
        setValue(e)
        onChange(e)
    }
    const width = window.innerWidth
    const desktop = <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                {value ? items.find((item) => item === value) : "انتخاب گزینه ..."}
                <ChevronsUpDown className="opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Combobox items={items} value={value} setValue={setter} setOpen={setOpen} />
        </PopoverContent>
    </Popover>

    const mobile = <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Trigger>
            {children ?? <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                {value ? items.find((item) => item === value) : "انتخاب گزینه ..."}
                <ChevronsUpDown className="opacity-50" />
            </Button>}
        </Drawer.Trigger>
        <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
                <Combobox items={items} value={value} setValue={setter} setOpen={setOpen} />
            </Drawer.Content>
        </Drawer.Portal>
    </Drawer.Root>

    return raw ? <Combobox items={items} value={value} setValue={setter} setOpen={setOpen} /> : autoResponsive ? (width > 768 ? desktop : mobile) : responsive ? mobile : desktop
}
