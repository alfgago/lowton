'use client';
import Cursor from "@/components/Cursor";
import { useState } from 'react';

export default function HeroTitle({ title }) {
    const [isActive, setIsActive] = useState(false);

    return (
    <div className="hidden lg:flex">
        <h4 onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className="text-2xl sm:text-3xl md:text-5xl font-medium uppercase text-white">{title}</h4>
        <Cursor isActive={isActive}/>
    </div>
    )
}