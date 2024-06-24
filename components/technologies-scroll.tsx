import {Button} from "@/components/ui/button";
import {robotoMono} from "@/app/ui/fonts";

export default function TechnologiesScroll({ technologies }: {technologies:string[]}) {


    return <div className="w-full h-[4vh] overflow-x-hidden relative hidden md:block pointer-events-none">
        <div className="marquee">
            <span >
               <div className={`flex gap-2 mx-1`}>
                    {technologies.map((technology:string, index) => (
                        <div key={index + 'technology'} className={` ${robotoMono.className} font-light px-3 py-1 rounded-full border border-slate-600 duration-200 cursor-pointer`}>{technology}</div>
                    ))}
               </div>
            </span>
        </div>
        <div className="marquee marquee2">
           <span>
               <div className={`flex gap-2 mx-1`}>
                    {technologies.map((technology: string, index) => (
                        <div key={index + 'technology2'}
                             className={` ${robotoMono.className} font-light px-3 py-1 rounded-full border border-slate-600 duration-200 cursor-pointer`}>{technology}</div>
                    ))}
               </div>
            </span>
        </div>
    </div>
}