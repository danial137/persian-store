"use client"
import React from 'react'
import { motion } from "framer-motion"
import { ThreeDCardExample } from "@/app/snippets/3d-card-snippets"
import { CardDemo }  from "./ui/Card"
const GraphicDesighn = () => {
    return (
        <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">

            <div className="text-4xl pb-6 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">

                با تکیه بر دانش و خلاقیت<br /> سایتتون و طراحی میکنیم
            </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">
               سفارش سایت و برند سازی خودتون رو به ما بسپارید و از هر لحاظ, فنی و گرافیکی خیالتون رو آسوده کنید تیم پرشین استور آماده انجام هر گونه برند سازی برای کار شما میباشد
            </p>
            <div className='items-center md:flex justify-center md:mx-auto md:space-x-10'>



                <motion.div

                    initial={{ opacity: 0, y: '-80%' }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ paddingLeft: '2.5rem', paddingRight:'2.5rem' }}
                >
                    <ThreeDCardExample />
                </motion.div>
                <motion.div

                    initial={{ opacity: 0, y: '-80%' }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                   <CardDemo/>
                </motion.div>

            </div>


        </div>
    )
}

export default GraphicDesighn