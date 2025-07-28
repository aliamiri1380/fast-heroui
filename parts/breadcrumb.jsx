"use client"
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react"

export default ({items}) => {
    return <Breadcrumbs>
        {
            items.map((r,i) => <BreadcrumbItem href={r.link} key={i} isCurrent={items.length-1 == i}>{r.text}</BreadcrumbItem>)
        }
    </Breadcrumbs>
}