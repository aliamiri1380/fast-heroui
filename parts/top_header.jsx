import Logo from "./logo"

export default () => {
    return <div className='w-full flex justify-center py-4 my-4 rounded-xl'>
        <div className='blob'></div>
        <div className='blob'></div>
        <Logo showText size="large" />
    </div>
}