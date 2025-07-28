import Button from './button'

export default (props) => {
  return (
    <div className='bg-slate-100 w-32 h-40 overflow-hidden relative rounded-2xl'>
        <Button size="sm" radius="full" className="absolute backdrop-blur-sm backdrop-saturate-50 right-2 bottom-2" isIconOnly><i className='bx bx-plus bx-xs'></i></Button>
    </div>
  );
}
