
export function timeDifference(date1, date2) {
    var difference = Math.abs(date1 - date2)

    var daysDifference = Math.floor(difference / 60 / 60 / 24);
    difference -= daysDifference * 60 * 60 * 24

    var hoursDifference = Math.floor(difference / 60 / 60);
    difference -= hoursDifference * 60 * 60

    var minutesDifference = Math.floor(difference / 60);
    difference -= minutesDifference * 60

    var secondsDifference = Math.floor(difference);

    return [daysDifference, hoursDifference, minutesDifference, secondsDifference]
}

export function setPrimaryColor(tailwindBgColorClass) {
    const tempDiv = document.createElement('div');
    tempDiv.className = `${tailwindBgColorClass} invisible absolute`;
    document.body.appendChild(tempDiv);

    const computedColor = window.getComputedStyle(tempDiv).backgroundColor;
    document.body.removeChild(tempDiv);

    document.documentElement.style.setProperty('--primary', computedColor);
    return { 'twcolor': computedColor, 'hex': chroma(computedColor).hex() }
}

export function getPrimaryColor() {
    const tempDiv = document.createElement('div');
    tempDiv.className = `bg-primary invisible absolute`;
    document.body.appendChild(tempDiv);

    const computedColor = window.getComputedStyle(tempDiv).backgroundColor;
    document.body.removeChild(tempDiv);

    document.documentElement.style.setProperty('--primary', computedColor);
    return computedColor
}

export function toInnerText(html) {
    return html?.replace(/<[^>]*>/g, '')
}

export function timeDifferenceText(date1, date2) {
    var text = ""

    const [daysDifference, hoursDifference, minutesDifference, secondsDifference] = timeDifference(date1, date2)

    if (daysDifference) {
        text += String(daysDifference) + ' روز و '
    }
    if (hoursDifference) {
        text += String(hoursDifference) + ' ساعت و '
    }
    if (minutesDifference) {
        text += String(minutesDifference) + ' دقیقه و '
    }
    if (secondsDifference) {
        text += String(secondsDifference) + ' ثانیه '
    }
    if (text.substr(-3, 3) == " و ") {
        text = text.substr(0, text.length - 3)
    }

    return text.trim()
}

export function prettyDate(time = false) {
    const now = new Date();
    let diff;

    if (typeof time === 'number' || (!isNaN(time) && !isNaN(parseFloat(time)))) {
        diff = now - new Date(parseFloat(time) * 1000);
    } else if (typeof time === 'string') {
        const parsedDate = new Date(time.replace(' ', 'T')); // Ensure the string is ISO-8601 compatible
        if (!isNaN(parsedDate)) {
            diff = now - parsedDate;
        } else {
            return '';
        }
    } else if (time instanceof Date) {
        diff = now - time;
    } else if (!time) {
        diff = 0;
    } else {
        return '';
    }


    const secondDiff = Math.floor(diff / 1000);
    const dayDiff = Math.floor(secondDiff / 86400);

    if (dayDiff < 0) {
        return '111';
    }

    if (dayDiff === 0) {
        if (secondDiff < 10) {
            return "همین الان";
        }
        if (secondDiff < 60) {
            return `${secondDiff} ثانیه قبل`;
        }
        if (secondDiff < 120) {
            return "یک دقیقه پیش";
        }
        if (secondDiff < 3600) {
            return `${Math.floor(secondDiff / 60)} دقیقه پیش`;
        }
        if (secondDiff < 7200) {
            return "یک ساعت پیش";
        }
        if (secondDiff < 86400) {
            return `${Math.floor(secondDiff / 3600)} ساعت پیش`;
        }
    }

    if (dayDiff === 1) {
        return "دیروز";
    }
    if (dayDiff < 7) {
        return `${dayDiff} روز پیش`;
    }
    if (dayDiff < 31) {
        return `${Math.floor(dayDiff / 7)} هفته پیش`;
    }
    if (dayDiff < 365) {
        return `${Math.floor(dayDiff / 30)} ماه پیش`;
    }
    return `${Math.floor(dayDiff / 365)} سال پیش`;
}

export function render_max_text(x, max = 50) {
    return x.length > max ? x.substr(0, 50) + ' ...' : x
}

export const render_children = (x, flat = false) => {
    x = x.length ? x : [x]
    return flat ? x.flat() : x
}

export function callFunctionsSequentially(functions, delay) {
    let index = 0;

    function runNext() {
        if (index < functions.length) {
            functions[index](); // Execute current function
            index++;
            setTimeout(runNext, delay); // Schedule next after `delay` sec
        }
    }

    runNext(); // Start execution
}

export function UpdateData(data, setter, onChange = () => "") {
    return (key, value) => {
        var l = { ...data }
        if (!Object.keys(data).includes(key)) {
            alert('wrong key')
        }
        l[key] = value
        setter(l)
        onChange()
        return [data[key], l[key]]
    }
}

export const RenameObj = (x, prevk, newk) => {
    x = { ...x }
    if (x[prevk]) {
        delete Object.assign(x, { [newk]: x[prevk] })[prevk]
    }
    return x
}

export const limit_text = (x, max) => {
    return x.length > max ? x.substr(0, max) + ' ...' : x
}

export const filter_keys = (x, exceptions = []) => {
    let d = {}
    Object.keys(x).map(r => {
        if (!exceptions.includes(r)) {
            d[r] = x[r]
        }
    })
    return d
}

export const component_render = (l) => {
    return l.map(r => {
        return <div className={`grid p-3 gap-3`} style={{ 'gridTemplateColumns': `repeat(auto-fit, minmax(${r.width}, 1fr))` }}>
            {r.content.map(r2 => {
                return r2
            })}
        </div>
    })
}

export const LazyAPI = ({ url, data = {}, method = "POST", el = undefined, isFataFetch = false, onSuccess = () => "", onFail = () => "", successText = null, failText = 'مشکلی پیش اومد ...' }) => {
    const Progress = (status) => {
        if (document.querySelector("#progress-bar"))
            if (status == "show") {
                document.querySelector("#progress-bar").classList.remove("hidden")
            }
            else if (status == "hide") {
                store.dispatch(setProgress(100))
                setTimeout(() => {
                    document.querySelector("#progress-bar").classList.add("hidden")
                    store.dispatch(setProgress(0))
                }, 750)
            }
    }
    Progress('show')
    if (!isFataFetch) {
        el.target.disabled = true
    }
    url = url.startsWith('/') ? url : url
    method = method.toLowerCase() == "post" ? axios.post : axios.get

    method(url, data, {
        onUploadProgress: (progressEvent) => {
            // onProgress((progressEvent.loaded / progressEvent.total) * 100)
            const val = Math.min(Math.max(0, (progressEvent.loaded / progressEvent.total) * 100), 100)
            store.dispatch(setProgress(val))
            console.log(val);

        }
    }).then(r => {
        Progress('hide')
        if (!isFataFetch) {
            (successText ?? r.data) ? toast.success(successText ?? r.data) : ''
            el.target.disabled = false
        }
        const ok_res = onSuccess(r.data)
        ok_res ? toast.success(ok_res) : ''
    }).catch(r => {
        Progress('hide')
        if (!isFataFetch) {
            (r.response.data.detail ?? failText) ? toast.error(r.response.data.detail ?? failText) : ''
            el.target.disabled = false
        }
        const nok_res = onFail(r.response.data)
        nok_res ? toast.error(nok_res) : ''
    })
}

export async function copyToClipBoard(text, textName) {
    await navigator.clipboard.writeText(text);
    toast.success(`${textName} کپی شد`)
};

export const renderAppDetails = (appName) => {
    appName = appName.replace("rubika", 'robika')
    let bg = {
        'eitaa': 'bg-orange-600',
        'aparat': 'bg-pink-600',
        'bale': 'bg-green-600',
        'robika': 'bg-amber-600',
        'gap': 'bg-purple-600',
        'youtube': 'bg-red-600',
        'pinterest': 'bg-red-500',
        'telegram': 'bg-blue-600',
        'virasty': 'bg-blue-500',
        'fars': 'bg-yellow-300',
    }
    let icon = ""
    if (['eitaa', 'aparat', 'bale', 'robika', 'gap'].includes(appName)) {
        icon = <i className={'xf xf-' + appName}></i>
    }
    else if (['virasty'].includes(appName)) {
        icon = <div className='h-fit py-4 bg-slate-100 w-[100px] invert' style={{ background: `url(https://ups.nomreyar.com/${appName}.svg) no-repeat center center`, backgroundSize: '13px 13px' }}></div>
    }
    else if (['fars'].includes(appName)) {
        icon = <div className='h-fit py-4 bg-slate-100 w-[100px] invert grayscale scale-[1.5] translate-x-[-1px] translate-y-[-4px]' style={{ background: `url(https://ups.nomreyar.com/${appName}.svg) no-repeat center center`, backgroundSize: '38px 38px' }}></div>
    }
    else {
        icon = <i className={'ti ti-brand-' + appName}></i>
    }
    return { icon: icon, bg: bg[appName] }

}

export const API = async ({ url, method = "post", data = {}, onSuccess = () => "", onFail = () => "", onProgress = () => "" }) => {
    url = url.startsWith('/') ? process.env.URL + url : url
    try {
        method = method.toLowerCase() == "post" ? axios.post : axios.get
        const result = await method(url, data, {
            onUploadProgress: (progressEvent) => {
                onProgress((progressEvent.loaded / progressEvent.total) * 100)
            }
        })
        onSuccess(result.data)
        return result.data
    }
    catch (e) {
        try {
            onFail(e.response.data)
            return e.response.data
        }
        catch {
            console.error(e)
        }
    }
    // const result = await fetch(url.startsWith('/') ? process.env.URL + url : url)
    // return await result.json()


}


export function getFiles(e, maxLen = 1, maxSize = 1, types = []) {
    function dropHandler(ev) {
        let files = []
        ev.preventDefault();
        return ev.dataTransfer.files
    }
    let files = []
    if (e.dataTransfer) {
        files = dropHandler(e)
    }
    else {
        if (e.files) {
            files = e.files
        }
        else {
            files = e.target.files
        }
    }
    let l = []
    if (files.length <= maxLen) {
        for (let i = 0; i < files.length; i++) {
            if (!types.length || types.includes(files[i].name.split('.').at(-1))) {
                const size = files[i].size / 1024 / 1024
                if (size <= maxSize) {
                    l.push(files[i])
                }
                else {
                    toast.error('حجم فایل خیلی زیاده')
                }
            }
            else {
                toast.error('فرمت مجاز نیست')
            }
        }
    }
    else {
        toast.error('تعداد فایل ها بیشتر از حد مجازه')
    }
    return l
}

export const sendFiles = ({ url, files = {}, dispatch = undefined, onSuccess = () => "", onFail = () => "", onProgress = () => "" }) => {
    let formData = new FormData()
    Object.entries(files).map(r => {
        formData.append(r[0], r[1])
    })
    document.querySelector("#progress-bar").classList.remove("hidden")
    console.log(axios.post(url, formData, {
        onUploadProgress: (progressEvent) => {
            // dispatch && dispatch(setProgress(((progressEvent.loaded / progressEvent.total) * 100)))
            onProgress(((progressEvent.loaded / progressEvent.total) * 100))
        }
    }).then((r) => {
        document.querySelector("#progress-bar").classList.add("hidden")
        onSuccess(r.data)
    }).catch((r) => {
        document.querySelector("#progress-bar").classList.add("hidden")
        onFail(r.response.data)
    }))
}







