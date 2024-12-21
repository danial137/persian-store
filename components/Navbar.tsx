"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import DropDownMenu from './DropDownMenu'
import prsian from './ui/images/pr.svg'
interface Navbarprops{
    scrollToWebsiteDesign: () => void;
    scrollToGraphicDesign: () => void;
    scrollToShopifyStores: () => void;
    scrollToBrands: () => void;
    scrollToServices: () => void;
}
const Navbar: React.FC<Navbarprops> = ({
    scrollToGraphicDesign,
    scrollToShopifyStores,

    scrollToServices
}) => {



    const [isdropdown, setisdropdown] = useState(false)

    const toggledropdown = () => {
        setisdropdown(!isdropdown)
    }

    const closetoggle = () => {
        setisdropdown(false)
    }
    return (
        <div>
            <div className='p-6 md:p-10 flex items-center justify-between z-50'>
                <div>
                    <Link className='cursor-pointer' href="/">
                        <Image
                            priority
                            src={prsian}
                            alt='logo'
                            width={100}
                            height={100}
                            className='w-10 h-10 md:w-20 md:h-20 lg:w-40 sm:w-30'
                        />
                    </Link>
                </div>
                <div className='cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
                    <div onClick={scrollToShopifyStores} className='hover:text-gray-50 text-xl'>طراحی سایت</div>
                    <div onClick={scrollToGraphicDesign} className='hover:text-gray-50 text-xl'>طراحی دیجیتال </div>
                    <div onClick={scrollToServices} className='hover:text-gray-50 text-xl'>سرویس</div>
                    <Link href={'/'} className='hover:text-gray-50 text-xl'>خانه</Link>

                    <Link href="/pricing" className='hover:text-gray-50 text-xl'>
                        قیمت 
                    </Link>
                </div>
                <div className='flex md:hidden'>
                    {isdropdown ? (

                        <div onClick={toggledropdown}
                            className='w-8 h-8 text-slate-300 cursor-pointer'>
                            <X />
                            <DropDownMenu onClose={closetoggle} />
                        </div>
                    ) : (
                        <AlignJustify onClick={toggledropdown}
                            className='w-8 h-8 text-slate-300 cursor-pointer' />
                    )}
                </div>
                <div className='hidden md:flex'>
                    <Link href="/contact" className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50/*  */'>
                     تماس با ما
                    </Link>



                   



                </div>
            </div>
        </div>
    )
}


export default Navbar