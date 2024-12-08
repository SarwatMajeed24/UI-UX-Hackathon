import { RxCross2 } from "react-icons/rx";
import Link from "next/link";


const Topbar = () => {
    return (
    
    
        <header className=" bg-white shadow-sm border-b mx-auto flex:hidden md:flex-col w-[1440]">
           <div>
            <div className="bg-black text-white py-2 text-sm flex justify-between items-center w-[1440] h-[38px] px-8">
                <div className="text-center flex-1">
                Sign up and get 20% off to your first order. 
                   <Link href="#" className="underline hover:text-blue-300">
                   Sign Up Now
                   </Link>
                </div>
                <div className="flex items-center gap[2px]">
                    <div className="text-white mr-9 font-normal leading-[21px]">
                    <RxCross2 className="text-white text-xl"/>
                    </div>              
                </div>
                </div>
            </div>
    </header>
    )
}
export default Topbar