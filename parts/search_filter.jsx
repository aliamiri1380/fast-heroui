"use client"

import { useEffect, useState } from 'react'
import SelectPath from './select_path'
import AvatarCard from './user_card'
import axios from "axios"
import { Divider } from "@heroui/divider"
// import {consultant_filter_path} from '../../../src/utils/utils'

export default function App(props) {
	const [users, setUsers] = useState({})
    const API = ({url, data, onProgress=() => "", onSuccess=() => "", onFail=() => ""}) => {
        axios.post(url, data, {
            onUploadProgress: (progressEvent) => {
                onProgress((progressEvent.loaded / progressEvent.total) * 100)
            }
        }).then((r) => onSuccess(r.data)).catch((r) => onFail(r.response.data))
    }
	useEffect(() => {
		API({url: '/api/search-consultants', data: {}, onSuccess: (r) => {
			setUsers(r)
		}})
	}, [])
    
    return (
        <>
            {/* <SelectPath path={consultant_filter_path()} onChange={(v) => API({url:`/api/search-consultants`, data:v, onSuccess: (e) => console.log(e)})} label="نوع مشاوره" />
            {
				Object.entries(users).map(r => r[1].length ? <>
					<div className="text-center text-md text-slate-400 pt-9">
						<h5>{r[0]}</h5>
					</div>
					<Divider className="my-4" />
					<div className="consults-info flex flex-row mt-4 flex-wrap justify-around">
						{r[1].map(r2 => <AvatarCard info={r2} />)}
					</div>
				</> : ''
				)
			} */}
        </>
    );
}