import Toman from "./toman";
import AnimatedNumber from "animated-number-react";

export default (props) => {
    return <p className="text-center text-2xl my-3 text-green-500 font-bold tracking-widest"><AnimatedNumber duration={2000} value={props.value} formatValue={(x) => x.toLocaleString()} /> <Toman className="scale-[2.5]" color="#22c55e" /></p>
}