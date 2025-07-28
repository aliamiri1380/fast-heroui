export default ({ wrapperClassName = "", items = [], title }) => {
    return <div>
        {title && <h2 className="text-bold pb-4">{title}</h2>}
        <div className={`flex flex-col bg-default-100 px-4 gap-3 py-2 rounded-lg ${wrapperClassName}`}>
            {
                items.map(item => !item.hidden && (
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="text-sm min-w-fit">{item.title}</div>
                        <div className="text-sm settings_list_content max-h-max translate-y-[1px]">{item.content}</div>
                        {item.description && <div className="w-[calc(100%_-_3pc)] text-xs text-slate-500 py-2">{item.description}</div>}
                    </div>
                ))
            }
        </div>
    </div>
}