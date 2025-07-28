import Tabs from './tabs'
import IconPicker from './icon_picker'
import EmojiPicker from './emoji_picker'
import Popover from './popover'
import Swiper from './swiper'
import Circle from './circle'
import { Input } from '@heroui/react'

export default () => {
    return <>
        <Popover content={
            <div className='p-2'><Tabs fullWidth items={[
                { 'title': 'ایکن', 'content': <IconPicker /> },
                { 'title': 'شکلک', 'content': <EmojiPicker /> },
                {
                    'title': 'متن', 'content': <div className='p-4'>
                        <Input placeholder='متن' size='sm' />
                        <div className='grid grid-cols-[auto_1fr] items-center gap-3 pt-3'>
                            <div>رنگ</div>
                            <div className='flex gap-3'>
                                <div className='w-4 h-4 rounded-full cursor-pointer bg-red-500'></div>
                                <div className='w-4 h-4 rounded-full cursor-pointer bg-green-500'></div>
                                <div className='w-4 h-4 rounded-full cursor-pointer bg-blue-500'></div>
                                <div className='w-4 h-4 rounded-full cursor-pointer bg-yellow-500'></div>
                                <div className='w-4 h-4 rounded-full cursor-pointer bg-pink-500'></div>
                                <div className='w-4 h-4 rounded-full cursor-pointer bg-amber-500'></div>
                                <div className='w-4 h-4 rounded-full cursor-pointer bg-violet-500'></div>
                            </div>
                        </div>
                    </div>
                },
            ]} /></div>
        }>
            <Circle size="sm" />
        </Popover>
    </>
}