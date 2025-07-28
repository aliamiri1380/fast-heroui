"use client"

import Button from "@/parts/button"
import Icon from "@/parts/icon"
import { copyToClipBoard } from "@/utils"
import { Toaster } from "react-hot-toast"

export default function ShareButtons({ data, page_type, params }) {
    "use client"
    
    const copyToClipBoardMyInviteLink = async () => {
        await copyToClipBoard(`${window.location.host}/${page_type}/${params.id}/${params.slug}?from-user=${data.current_user.account.invite_link}`, 'لینک')
        window.history.back()
    }

    const copyToClipBoardInviteLink = async () => {
        await copyToClipBoard(`${window.location.host}/${page_type}/${params.id}/${params.slug}`, 'لینک')
        window.history.back()
    }

    const copyToClipBoardShortLink = async () => {
        await copyToClipBoard(`${window.location.host}/${page_type}/${params.id}`, 'لینک')
        window.history.back()
    }
    return <>
        {
            page_type == "content" ?
                <>
                    <Button className="w-full mb-2" onClick={copyToClipBoardMyInviteLink} color="primary" endContent={<Icon center size="xs">share-nodes</Icon>}>لینک اشتراک گذاری شخصی + کسب درآمد</Button>
                    <Button className="w-full mb-2" onClick={copyToClipBoardInviteLink} endContent={<Icon center size="xs">share-nodes</Icon>}>لینک اشتراک گذاری عمومی</Button>
                </>
            : 
                <Button className="w-full mb-2" onClick={copyToClipBoardShortLink} endContent={<Icon center size="xs">share-nodes</Icon>}>لینک اشتراک گذاری</Button>


        }
    </>
}