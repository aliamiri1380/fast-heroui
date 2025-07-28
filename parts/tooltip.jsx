import { Button } from "@/components/ui/button"
import { Tooltip } from "@heroui/react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { filter_keys } from "./utils"

export default function App({ content, ...props }) {
    return (
        <Tooltip showArrow className="" {...filter_keys(props, ['children'])} content={content}>
            <span>
                {props.children}
            </span>
        </Tooltip>
    )
}
