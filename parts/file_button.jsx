import $ from 'jquery'
import { getFiles, sendFiles } from "./utils"
import Button from './button'
import toast from 'react-hot-toast'

export default (props) => {
    let trigger = true
    if (props.trigger != undefined) {
        trigger = props.trigger
    }
    return <Button {...props} onClick={(e) => $(e.target).parents('div:eq(0)').find('input').click()}>
        <input name={props.inputName} data-size={props.maxSize} type="file" hidden onChange={(e) => {
            if (props.onChange)
            props.onChange(e)
            const file = getFiles(e, 1, props.maxSize ? props.maxSize : 3, props.accept?.replace(/\./g,'').split(',') || [])[0]
            props.getFileOnUpload?.(file)
            if (file){
                if (trigger){
                    sendFiles({url: '/api/upload', files: {'file': file}, ...(props.onProgress ? {onProgress:props.onProgress} : {}) , onSuccess: (r) => {
                        if (props.onSuccess) props.onSuccess(r.msg)
                        r['result'] ? toast.success('با موفقیت آپلود شد') : toast.error('مشکلی در آپلود بوجود اومد ...')
                    }})
                }
                else{
                    if (props.getName){
                        props.getName(file.name)
                    }
                }
            }
        }} accept={props.accept} />
        {props.children}
    </Button>
}