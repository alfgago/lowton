'use client';
import Cursor from "@/components/Cursor";
import { useState } from 'react';

export default function HeroTitle() {
    const [isActive, setIsActive] = useState(false);

    return (
    <div>
        <h1 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="flex flex-col text-[8vw] uppercase font-medium leading-tight text-white"><span>HI, Let's increase </span>the value of<span></span><span
              >your brand.</span></h1>
                <Cursor isActive={isActive}/>
    </div>
    )
}