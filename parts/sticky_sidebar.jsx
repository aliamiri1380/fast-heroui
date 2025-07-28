'use client'
import Sidebar from "./sidebar"
import $ from 'jquery'

export default () => {
    return <div onClick={(e) => {
        if ($(e.target).hasClass("sidebar-overlay")){
            $(e.target).fadeOut('fast')
            e.target.querySelector('aside').classList.toggle('sticy-sidebar-hide')
        }
    }} className='sidebar-overlay fixed top-0 right-0 w-full h-full bg-slate-900 bg-opacity-50 z-[999]'>
        <Sidebar className="sticy-sidebar-hide" />
    </div>
}