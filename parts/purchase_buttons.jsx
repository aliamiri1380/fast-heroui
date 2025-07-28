"use client"

import GridStack from "@/parts/grid_stack"
import Button from "@/parts/button"
import { LazyAPI } from "@/utils"
import Icon from "@/parts/icon"
import Toman from "@/parts/toman"

export default ({data, content_id, from_user}) => {
    const colors = {
        'pdf':'bg-orange-50 text-orange-500',
        'word':'bg-blue-50 text-blue-500',
        'ppt':'bg-amber-50 text-amber-500',
        'video':'bg-purple-50 text-purple-500',
        'audio':'bg-green-50 text-green-500',
    }
    return <>
        <GridStack className="buy-btns" width="150px" component={<Button></Button>} items={
            data.buy_btns.map(r => ({'onClick': (e) => LazyAPI({el:e, url: `/api/add-content-to-shopping-bag?which=${content_id}&which_link=${r.btn_index}&from-user=${from_user ?? ''}`}),'className': 'w-full '+colors[r.icon.split('-')[1]], 'endContent': <Icon wrapperClassName="pt-[5px]" size="xs">{r.icon}</Icon>, 'children': <><Toman className="scale-[1.5]" color={r.price.color} />{r.price.amount} {r.text}</>}))
        } />
    </>
}