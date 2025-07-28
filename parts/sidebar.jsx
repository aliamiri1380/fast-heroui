

import { Badge, Card, Spacer, Tooltip, User } from "@heroui/react"
import GridStack from "../parts/grid_stack"
import Button from './button'
import Title from "./title"
import { Link, useNavigate } from "react-router-dom"

export default (props) => {
    const navigate = useNavigate()
    return <aside className={`h-[100vh] overflow-y-auto z-10 w-full bg-slate-100 dark:bg-slate-900 px-2 ${props.className}`}>
        <h1 className="text-xl text-center py-[2pc] relative">Unit<span className="font-bold text-3xl right-[80px] translate-y-[-3px] absolute">X</span></h1>
        <Card onClick={() => navigate('/dashboard')} dir="ltr" isPressable className="gap-4 mb-1 flex justify-end bg-transparent hover:bg-[rgba(0,0,0,.05)] dark:hover:bg-[rgba(255,255,255,.05)] flex-row px-4 shadow-none items-center rounded-lg w-full h-[60px]">
            <span>خانه</span>
            <i className="ti ti-home text-2xl pb-1"></i>
        </Card>
        <Card onClick={() => navigate('/dashboard/new-account')} dir="ltr" isPressable className="gap-4 mb-1 flex justify-end bg-transparent hover:bg-[rgba(0,0,0,.05)] dark:hover:bg-[rgba(255,255,255,.05)] flex-row px-4 shadow-none items-center rounded-lg w-full h-[60px]">
            <span>حساب ها</span>
            <i className="ti ti-home text-2xl pb-1"></i>
        </Card>
        <Card onClick={() => navigate('/dashboard/compose')} dir="ltr" isPressable className="gap-4 mb-1 flex justify-end bg-transparent hover:bg-[rgba(0,0,0,.05)] dark:hover:bg-[rgba(255,255,255,.05)] flex-row px-4 shadow-none items-center rounded-lg w-full h-[60px]">
            <span>مطلب</span>
            <i className="ti ti-home text-2xl pb-1"></i>
        </Card>
    </aside>
}