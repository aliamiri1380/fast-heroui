import ScrollShadow from "react-scroll-shadow";


export default function (props) {
    return <>
        <ScrollShadow shadowSize={10}>
            <div style={{ display: 'flex', direction: 'rtl', overflowX: 'auto' }}>
                {props.children}
            </div>
        </ScrollShadow>
    </>

}
