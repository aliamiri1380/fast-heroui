"use client"

import { useMediaQuery } from 'usehooks-ts'

export default ({query, content}) => {
    const matches = useMediaQuery(`(${query})`)
    if (matches)
        return content
    return ''
  }