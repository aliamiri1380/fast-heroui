import ShadowItem from '@/parts/shadow_item'
import { API, copyToClipBoard, to_fa } from '@/utils'
import { Spacer } from "@heroui/spacer"
import Image from 'next/image'
import {Image as NImage} from "@heroui/image"
import Button from '@/parts/button'
import Swiper from '@/parts/swiper'
import Rating from '@/parts/rating';
import ShareButtons from '@/parts/share_buttons'
import { Badge } from "@heroui/badge"
import { Textarea } from "@heroui/input"
import Icon from '@/parts/icon'
import Chips from '@/parts/chips'
import BottomDetails from '@/parts/bottom_details'
import Comment from '@/parts/comment'
import Modal from '@/parts/modal'
import PurchaseBtns from '@/parts/purchase_buttons'
import { User } from "@heroui/react"
import { Input } from "@heroui/input"
import AsyncComponentStack from '@/parts/async_component_stack'
import Map from '@/parts/map'


export default function Page({ params, data, page_type }) {
    fetch('/api/count-views?type=content&id={{data.id}}')
    const author = data.author ?? data.creator
    const desc = data.data.info.text ?? data.data.info.desc
    const metadata = data.data.metadata ?? {}
    const previews = []
    if (data.previews)
        data.previews.map(r => r.urls.map(r2 => previews.push(r2)))

    return (
        <>
            {
                page_type == "content" ? 
                    <Swiper flat pagination disablePadding slidesPerView={1}>
                        <div className='flex max-w-mobile w-[calc(100vw_-_0.25pc)] pl-[.25pc] justify-center pt-8 pb-[100px]'>
                            <ShadowItem className="scale-150" url={`https://ups.nomreyar.com/uploads/users_content/books/${data.data.info.pic}`} />
                        </div>
                        {previews.map(r => <div className='w-[100vw] max-w-mobile pl-[2pc]'>
                            <Image className='m-auto' width={200} height={300} src={`https://ups.nomreyar.com/uploads/users_content/${r}`} />
                        </div>)}
                    </Swiper>
                : page_type == "school" ? 
                (
                    data.data.info.location[0] ? <Map lat={data.data.info.location[0]} long={data.data.info.location[1]} /> : <div className='w-full text-center'><Image className='m-auto' src="/static_assets/imgs/no-location.png" width={200} height={200} /></div>
                ) : page_type == "qa" ? 
                    <Spacer y={5} /> : ''
            }
            <p className='font-bold text-lg px-4 text-justify'>{data.data.info.title} {page_type == "content" && data.data.file_details.answers_status == "1" ? <Icon wrapperClassName="pr-1" size="xs" text="پاسخنامه دارد" className="pl-2 text-green-500">check-circle</Icon> : ''}</p>
            <div className='w-full pt-4 px-3 flex justify-between items-center'>
                <div className='translate-y-[-4px]'>
                    <BottomDetails items={[
                        { 'text': metadata.views, 'icon': <Icon size="">eye</Icon> },
                        { 'text': data.data.date_modified, 'icon': <Icon size="">arrows-rotate</Icon> },
                    ]} />
                </div>
                <div>
                    <Rating noCommentsText={['qa'].includes(page_type) ? "بدون پاسخ" : 'بدون نظر'} isNew={!data.rate} readOnly filled={3} size="1pc" />
                </div>
            </div>
            <div className='p-3 pt-5'>
                {
                    ["content","qa"].includes(page_type) ? <User name={author.personal.name + " " + author.personal.last_name} description={author.account.username ? (<span dir="ltr" href={process.env.USER_URL_PATH.replace("USERNAME", author.account.username)} size="sm" isExternal>@{author.account.username}</span>) : ''} avatarProps={{ src: `https://ups.nomreyar.com/uploads/users_content/${author.personal.pic}` }} /> :
                    <User name={"وبسایت نمره یار"} description={<span dir="ltr" href={process.env.USER_URL_PATH.replace("USERNAME", 'nomreyar')} size="sm" isExternal>@nomreyar</span>} avatarProps={{ src: `` }} />
                }
            </div>
            {/* <Chips betweenContent={<Icon wrapperClassName="pr-4 pt-1" size="xs">chevron-left</Icon>} items={(data.crumb ?? data.data.info.tags).map(r => ({ 'text': r.name, 'url': r.link }))} /> */}
            <Spacer y={5} />
            {desc ? <p className='px-4 leading-8 text-justify' dangerouslySetInnerHTML={{ __html: desc }}></p> : ''}
            {
                page_type == "content" ? 
                <Modal title={`خرید ${data.category_fa} | ${data.data.info.sub_category}`} content={<PurchaseBtns content_id={params.id} from_user={params.from_user} data={data} />}>
                    <Button size="lg" color="success" endContent={<i className='fa-regular fa-bag-shopping'></i>} className="text-white fixed z-50 w-[150px] right-[calc(50%_-_75px)] bottom-[70px]" variant="shadow">خرید + دانلود</Button>
                </Modal> :
                    page_type == "school" ? (data.data.info.location[0] ? <a href={`geo:${data.data.info.location[0]},${data.data.info.location[1]}`}>
                    <Button size="lg" color="primary" endContent={<Icon size="bx-sm">map-location-dot</Icon>} className="text-white fixed z-50 w-[150px] right-[calc(50%_-_75px)] bottom-[70px]" variant="shadow">مسیریابی</Button>
                </a> : '') : ''
            }
            <div className="fixed z-50 right-3 bottom-[70px]">
                <Badge content={data.comments_n} isInvisible={data.comments_n == 0} placement='top-left' color='primary'>
                    <Modal title={["qa"].includes(page_type) ? 'پاسخ ها' :"نظرات"} footer={<Textarea endContent={<Button color="primary" isIconOnly variant="flat" className="translate-y-[-50%] translate-x-[-8px] text-xs"><Icon className="bx-rotate-180" size="xs">paper-plane-top</Icon></Button>} label={['qa'].includes(page_type) ? `جوابت برای این سوال رو اینجا بنویس` : `نظرت درمورد این ${to_fa(page_type)} چیه ؟`} size='sm' />} content={<AsyncComponentStack asyncResultKey="data" result_map={{ 'text': 'children', 'date_added': 'date' }} async_from={`/api/get-comments?which=${page_type}&mobile=y&cid=${params.id}&pages=${0}&group_by=${"بهترین"}`} component={<Comment className='py-4' />} />}>
                        <Button size="lg" isIconOnly><i className='fa-regular bx-sm fa-comment-lines'></i></Button>
                    </Modal>
                </Badge>
            </div>
            <div className="fixed z-50 left-3 bottom-[70px]">
                <Modal title={'اشتراک گذاری'} content={<>
                    <ShareButtons data={data} page_type={page_type} params={params} />
                </>}>
                    <Button size="lg" isIconOnly><i className='fa-regular bx-sm fa-share-nodes'></i></Button>
                </Modal>
            </div>
            {
                page_type == "qa" ? <Swiper>
                    {data.data.info.appendices.map(r => (
                        <NImage src={`https://ups.nomreyar.com/uploads/users_content/${r}`} width={160} height={200} />
                    ))}
                </Swiper> : ''
            }
            <Swiper>
                {(data.similars ?? data.sample_questions ?? []).map(r => (
                    <ShadowItem url={`https://ups.nomreyar.com/uploads/users_content/${r.pic}`} text={r.title} />
                ))}
            </Swiper>
        </>
    )
}