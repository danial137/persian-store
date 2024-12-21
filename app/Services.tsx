'use client'

import { CardHoverEffectDemo } from "./snippets/CardHoverSnippets";

const Services = () => {
    return (<div className="max-w-5xl mx-auto py-38">

        <div className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20">
            با سرویس های پرشین استور به کسب و کارت روح ببخش         
        </div>
        <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
          از دیزاین وب سایتت گرفته تا سوشیال مدیات رو با سرویس های پرشین استور زیباترکن تا کمکی برای رشد کسب و کارت باشه 
        </p>

        <CardHoverEffectDemo   />

    </div>

    );
}

export default Services;