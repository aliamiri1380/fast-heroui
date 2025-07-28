import { Image } from "@heroui/react"
import Icon from "./icon"
export default ({ src, width=150, height=150, wrapperClassName='' }) => {
    return <div className={`w-full ${wrapperClassName}`}>
        <div className="w-full">
            <div className={`m-auto w-max w-[${width}px] h-[${height}px] text-center`}>
                {/* <img src={src ?? import.meta.env.VITE_EMPTY_IMG_URL} width={width} height={height} /> */}
                <Icon className="text-[50px] text-slate-500">zoom-question</Icon>
                <p className="w-full text-center pt-2 text-lg text-slate-500">چیزی پیدا نشد</p>
            </div>
        </div>
    </div>
}  