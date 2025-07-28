import {DatePicker} from "@heroui/react";
import { I18nProvider } from "@react-aria/i18n";

export default ({...props}) => {
    <I18nProvider locale="fa-IR">
        return <DatePicker className="max-w-[284px]" firstDayOfWeek="sat" {...props} />;
    </I18nProvider>
}
