import { Input } from "@heroui/input"
import Button from './button'

export default (props) => {
    return <div className="px-4">
        <Input size={props.size} label="دنبال چی میگردی ؟ ..." endContent={<Button  color="primary" className={props.size != 'sm' ? "translate-y-[3px]" : 'translate-y-[4px] translate-x-[-6px]'} isIconOnly><i className="bx bx-search-alt bx-sm"></i></Button>} />
    </div>
}