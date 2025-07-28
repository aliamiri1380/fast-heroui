import { Autocomplete, AutocompleteItem, Avatar } from "@heroui/react";

export default ({value, items=[], keysAsIndex, onChange, ...props}) => {
    // items = typeof items[0] != 'object' ? items.map((r,j) => ({_NDID: j, value: r})) : items.map((r,j) => ({_NDID: j, ...r}))
    items = typeof items[0] != 'object' ? items.map((r,j) => ({_NDID: j, content: r, value: String(r)})) : items.map((r,j) => ({_NDID: j, ...r, ...{'value': r.value == undefined && typeof r.content == "string" ? String(r.content) : String(r.value)}}))
    items = items.map((i,j) => ({_NDID: keysAsIndex ? j : i.content, ...i}))
    // console.log('++++',value, items);
    
    return (
        <Autocomplete
            className="max-w-xs"
            defaultItems={items}
            {...props}
            selectedKey={value}
            onSelectionChange={onChange}
            
        >
            {(item) => (
                <AutocompleteItem key={item.value} textValue={item.value} {...item.props}>
                    <div className="flex gap-2 items-center">
                        {item.content ?? item.value}
                    </div>
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
}
