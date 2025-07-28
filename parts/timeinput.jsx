import { TimeInput } from "@heroui/react"
import {I18nProvider} from "@react-aria/i18n";

export default ({...props}) => {
    return <>
    <div dir="ltr">
        {/* <I18nProvider locale="fa-IR"> */}
            <TimeInput {...props} dir="ltr" />
        {/* </I18nProvider> */}
    </div>
    </>
}