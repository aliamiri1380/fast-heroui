import Button from './button'

export default (props) => {
    
    return <div className='px-4'>
        <Button size="sm" color="primary" variant="light" {...props} ><i className="bx bx-plus bx-sm"></i> نمایش بیشتر</Button>
    </div>
}