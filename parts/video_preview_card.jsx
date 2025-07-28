import { Tooltip } from "@heroui/tooltip"
import Button from './button'
import { Image } from "@heroui/image"
import Circle from './circle'
import { formatDuration, nFormatter } from '@/src/utils'
import { Badge } from "@heroui/react"

export default ({ big_poster, title, username, uid, visit_cnt, duration, create_date, profilePhoto, ...props }) => {
    return (
        <a href={`/watch/${uid}`} className='video-preview'>
            <div className={`w-full max-w-[400px] container @container min-h-[150px] rounded-lg ${props.className}`}>
                <div className="w-[400px] relative h-[180px] @[350px]:h-[230px] max-w-full poster">
                    <div className='absolute z-20 bottom-4 translate-x-[-2pc] origin-right'><Badge size='md' variant='light' showOutline={false} className='text-xs p-1 px-2 bg-black bg-opacity-30 backdrop-saturate-[4]' content={formatDuration(duration)}></Badge></div>
                    {/* <div className='w-full h-full rounded-lg bg-contain' style={{ 'background': `url(${big_poster}) no-repeat center center`, 'backgroundSize': '100% 100%' }}></div> */}
                    <Image loading='lazy' alt={title} title={title} src={big_poster} classNames={{wrapper: 'h-full !max-w-full'}} className='w-full h-full' style={{objectFit: 'cover', objectPosition: 'center center'}}  />
                </div>
                {/* <div className="w-full h-full">
                    <Image src={"https://i.ytimg.com/vi/k2DI6bnHRG8/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGhACGAYgATgBQAE=&rs=AOn4CLC-oJxMxr836Cp3TSnrjVoTYE6aNg"} />
                </div> */}
                <div className='py-3 flex items-start'>
                    <div>
                        <Circle size="md" src={profilePhoto} />
                    </div>
                    <div className='pr-2 relative grow'>
                        <Button className="absolute left-0 top-[-3px] " size="sm" variant="light" isIconOnly><i className='bx bx-sm bx-dots-horizontal-rounded'></i></Button>
                        <h3 className='max-w-[calc(100%_-_40px)] pt-[3px] !block'>{title}</h3>
                        <p className='text-slate-500 text-xs pt-1'>{username}</p>
                        <p className='text-slate-500 text-xs video-card-details'>{nFormatter(visit_cnt)}</p>
                        <p className='text-slate-500 text-xs video-card-details'>{create_date}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}