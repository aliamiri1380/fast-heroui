import React, { useEffect } from "react";
import { Calendar, Radio, RadioGroup, Button, ButtonGroup, cn } from "@heroui/react";
import { today, getLocalTimeZone, startOfWeek, startOfMonth, fromDate } from "@internationalized/date";
// import { useLocale } from "@react-aria/i18n";
import { I18nProvider } from "@react-aria/i18n";

export default ({ value, ...props }) => {
    let defaultDate = today(getLocalTimeZone());
    let [date, setDate] = React.useState(defaultDate);
    // let { locale } = useLocale();

    let now = today(getLocalTimeZone());
    let tomorrow = now.add({ days: 1 })
    let nextWeek = now.add({ weeks: 1 })
    let nextMonth = now.add({ months: 1 })

    const setter = (x) => {
        const jsDate = x.toDate
            ? x.toDate(getLocalTimeZone()) // works for CalendarDate and CalendarDateTime
            : new Date(x.toInstant().epochMilliseconds); // if it's a ZonedDateTime

        const timestamp = jsDate.getTime() / 1000;
        const year = jsDate.getUTCFullYear();

        props.onChange?.({ timestamp });
    }

    useEffect(() => {
        if (value){
            console.log('++',value);
            const dateObj = new Date(value * 1000)
            console.log('++',dateObj, fromDate(dateObj, getLocalTimeZone()));
            setDate(fromDate(dateObj, getLocalTimeZone()))
        }
    }, [value])

    const CustomRadio = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Radio
                {...otherProps}
                classNames={{
                    base: cn(
                        "flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between",
                        "cursor-pointer rounded-full border-2 border-default-200/60",
                        "data-[selected=true]:border-primary",
                    ),
                    label: "text-tiny text-default-500",
                    labelWrapper: "px-1 m-0",
                    wrapper: "hidden",
                }}
            >
                {children}
            </Radio>
        );
    };

    return (
        <I18nProvider locale="fa-IR">
            <div className="flex flex-col gap-4">
                <Calendar
                    color="primary"
                    showMonthAndYearPickers
                    buttonPickerProps={{
                        variant: "bordered",
                        disableRipple: true,
                    }}
                    firstDayOfWeek="sat"
                    showShadow

                    classNames={{
                        content: "w-full",
                    }}
                    focusedValue={date}
                    nextButtonProps={{
                        variant: "bordered",
                        disableRipple: true,
                    }}
                    prevButtonProps={{
                        variant: "bordered",
                        disableRipple: true,
                    }}
                    topContent={
                        <ButtonGroup
                            fullWidth
                            className="px-3 pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
                            radius="full"
                            size="sm"
                            variant="bordered"
                        >
                            <Button disableRipple onPress={() => setDate(now) && setter(now)}>امروز</Button>
                            <Button disableRipple onPress={() => setDate(tomorrow) && setter(tomorrow)}>فردا</Button>
                            <Button disableRipple onPress={() => setDate(nextWeek) && setter(nextWeek)}>هفته بعد</Button>
                            <Button disableRipple onPress={() => setDate(nextMonth) && setter(nextMonth)}>ماه بعد</Button>
                        </ButtonGroup>
                    }
                    {...props}
                    value={date}
                    onChange={(v) => setDate(v) && setter(v)}
                    onFocusChange={(v) => setDate(v) && setter(v)}
                />
            </div>
        </I18nProvider>
    );
}
