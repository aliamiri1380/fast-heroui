import Button from './button'

export default (props) => {
  return (
    <div className="w-full min-w-[300px] h-44">
        <div className="w-full rounded-xl h-full overflow-hidden">
            <div className="w-full h-full relative" style={props.src ? {"background": `rgba(150,150,150,.5) url(${props.src}) no-repeat center center`, "backgroundSize": "cover"} : {}}>
                {
                    props.footer ? <div className="justify-between w-full h-12 flex flex-row items-center px-2 absolute bottom-0">
                    <div className='flex flex-row items-center'>
                        <Button size="sm" isIconOnly color={props.footer.iconColor}><i className={'bx-sm bx bxs-'+props.footer.icon}></i></Button><p className='align-middle text-xs pr-2'>{props.footer.text}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <Button size="sm" color={props.footer.buttonColor} variant="bordered">{props.footer.buttonText}</Button>
                    </div>
                </div> : ''
                }
            </div>
        </div>
    </div>
  );
}
