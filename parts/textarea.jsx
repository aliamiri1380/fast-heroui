import { Button as HButton, Textarea } from '@heroui/react'
import { useState } from 'react'
import Popover from './popover'
import Icon from './icon'
import Emoji_picker from './emoji_picker'

export default ({value, onValueChange=()=>"", endContent, emojiPicker, ...props}) => {
    const [comment, setComment] = useState("")
    let handlers = [comment, setComment]
    if (value){
        handlers = [value, ()=>""]
    }
    return (
        <Textarea  value={handlers[0]} {...props} onValueChange={(r) => {handlers[1](r);onValueChange(r)}} endContent={
            <div className='flex'>
                {emojiPicker && <Popover content={<Emoji_picker onSelect={(r, el) => handlers[1](handlers[0] + r.native)} />}><HButton size="sm" isIconOnly variant="light" className="!scale-75"><Icon>mood-smile</Icon></HButton></Popover>}
                {endContent}
            </div>
        } />
    )
}