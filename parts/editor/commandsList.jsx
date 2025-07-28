// DropdownMenu.jsx
import React, { useEffect, useState } from 'react'
// import './DropdownMenu.scss'
import ListItems from '../list_items'

const DropdownMenu = ({ items, command }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        setSelectedIndex(0)
    }, [items])

    const onKeyDown = (event) => {
        if (event.key === 'ArrowUp') {
            upHandler()
            return true
        }

        if (event.key === 'ArrowDown') {
            downHandler()
            return true
        }

        if (event.key === 'Enter') {
            enterHandler()
            return true
        }

        return false
    }

    const upHandler = () => {
        setSelectedIndex((prevIndex) => (prevIndex + items.length - 1) % items.length)
    }

    const downHandler = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length)
    }

    const enterHandler = () => {
        selectItem(selectedIndex)
    }

    const selectItem = (index) => {
        const item = items[index]
        if (item) {
            command(item)
        }
    }

    return (
        <div className='w-max' onKeyDown={onKeyDown} tabIndex={0}>
            {items.length > 0 ? (
                <ListItems wrapperClassName={'w-max shadow-xl'} items={[
                    {
                        'items': items.map((item, index) => ({ 'content': item.title, 'onClick': () => selectItem(index), 'icon': item.icon }))
                    },
                ]} />
            )
                : (
                    <div className="item">چیزی پیدا نشد</div>
                )}
        </div>
    )
}

export default DropdownMenu
