import Button from './button'
import Icon from './icon';

export default (props) => {
  return (
    ! props.horizontal ? 
    <div className={`flex justify-between ${props.padding ? 'px-4' : ''} items-center`}>
      <h2 className={`text-${props.size ?? 'xl'} py-5 relative font-bold text-light-gradient ${props.className}`}>{props.icon ? <Icon className="text-light-gradient">{props.icon}</Icon> : ''} {props.children}</h2>
      {props.url ? <a href={props.url}><Button isIconOnly variant="bordered" size="sm"><i className="h-max bx-sm bx bx-dots-horizontal-rounded"></i></Button></a> : ''}
    </div> : <div className='w-full text-center horizontal-title-container my-8'><p className={`horizontal-title ` + props.className}>{props.children}</p></div>
  );
}