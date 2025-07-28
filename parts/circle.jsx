import { Avatar } from "@heroui/avatar"
import { Image } from "@heroui/react"

export default (props) => {
    return <Avatar {...props} ImgComponent={Image} imgProps={{loading: 'lazy'}} style={{'background': props.bg, 'color': props.color}} size={props.size  ?? "lg"} />
}