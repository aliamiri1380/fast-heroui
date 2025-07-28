import { IconButton } from "@mui/material"
import $ from 'jquery'
import { Snack, getFiles, sendFiles } from "../utils/utils"

export default (props) => {
    let trigger = true
    if (props.trigger != undefined) {
        trigger = props.trigger
    }
    const is_private = props.isPrivate
    return <IconButton icon={<i className={"fa-dutone fa-"+props.icon}></i>} {...props} onClick={(e) => $(e.target).parents('div:eq(0)').find('input').click()}>
        <input name={props.inputName} data-size={props.maxSize} type="file" hidden onInput={(e) => {
            if (props.onChange)
            props.onChange(e)
            const file = getFiles(e, 1, props.maxSize ? props.maxSize : 3, props.accept.replace(/\./g,'').split(','))[0]
            if (file){
                if (trigger){
                    sendFiles(props, '/api/dashboard/upload-file', file, file.name.split('.').at(-1), is_private, "", (r) => {
                        const fname = r['desc'].split(',')[1]
                        r['desc'] = r['desc'].split(',')[0]
                        if (props.onSuccess) props.onSuccess(r,fname)
                        Snack(r['desc'], r['result'])
                    })
                }
                else{
                    if (props.getName){
                        props.getName(file.name)
                    }
                }
            }
        }} accept={props.accept} />
        {props.children}
    </IconButton>
}