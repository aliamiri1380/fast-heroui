import { Avatar } from "@heroui/avatar";
import { Image } from "@heroui/image";

export default (props) => {
    return (
      <>
            <div className="flex flex-row flex-start items-center px-2">
                <div className="py-2 px-4" style={{"maxHeight": "160px","height": "calc(80px + 15vw)","maxWidth": "140px", 'width': "calc(120px + 20vw)"}}>
                    <div className="h-full w-full rounded-xl flex items-center justify-center">
                        {
                            !props.circle ? <Image className="h-full w-full" src={props.img} /> : 
                            <Image className="h-[80px] w-[80px] rounded-full" src={props.img} />
                        }
                    </div>
                </div>
                {/* {style={{'fontSize': "calc(10px + 0.8vw)"}}} */}
                <div className="w-full py-3 pl-3 text-sm max-md:text-md font-bold">  
                    <p>{props.title}</p>
                    <div className="w-full pt-2 flex flex-row items-center">
                        <Avatar className="scale-75 translate-x-2" size="sm" src="https://ups.nomreyar.com/uploads/users_content/bmw.jpeg" />
                        <span className="text-xs translate-x-1 text-slate-400">{props.author}</span>
                    </div>
                    <p className={`w-full pt-2 text-left font-bold text-${props.bottomColor}-500`}>
                        {props.bottom}
                    </p>
                </div>
            </div>
      </>
      );
  }  