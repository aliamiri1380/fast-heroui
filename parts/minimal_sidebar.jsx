import { Tooltip } from "@heroui/tooltip"
import Button from './button'
import { ScrollShadow } from "@heroui/scroll-shadow"

export default (props) => {
    return (
        <div id="sidebar" className="max-sm:hidden bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-30 backdrop-blur backdrop-saturate-200 flex flex-col items-center justify-around rounded-3xl">
            <ScrollShadow hideScrollBar className='flex flex-wrap items-center justify-around' orientation='vertical'>
                {
                    props.items.map(r =>(
                    <Tooltip placement='left' content={r.name}>
                        <Button variant="light" isIconOnly className="my-2"><i className={`bx ${!r.prefix ? ("bx-"+r.icon) : r.prefix+r.icon} bx-sm`}></i></Button>
                    </Tooltip>
                ))
                }
            </ScrollShadow>
        </div>
    )
}