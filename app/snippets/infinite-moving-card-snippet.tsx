"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            " !همکاری با پرشین استور بهترین تجربه زندگیم بود",
        name: "علی عزیزی",
        title: "پشتیبانی 24 ساعته فقط اینجا پیدا میشه",
    },
    {
        quote:
            "به لطف تیم پرشین استور تونستم محصولاتمو به فروش حداکثری برسونم",
        name: "حسین خدامی",
        title: "مهندسان فروش یعنی تیم پرشین استور",
    },
    {
        quote: "   با کمک خلاقیت تیم هوشمند پرشین استور تونستم انلاین شاپمو راه بندازم و فروش چند برابری محصولاتمو تجربه کنم",
        name: "زهرا محمدی",
        title: "فروشگاه بزرگمو مدیون تیم قوی پرشین هستم",
    },
    {
        quote:
            "   اولش فکر نمیکردم که بتونم با پلن های راهبردی پرشین استور بتونم کسب و کار نابود شده امو بازسازی کنم اما به لطف بچه های این تیم تونستم دوباره به دوران قدیم برگردم",
        name: "امیر ساعی",
        title: "تیم خلاق و خوش منش ",
    },
    {
        quote:
            " با تفکر خلاقانه این  بچه ها تونستم رویایی که چند سال تو ذهنم بود و به واقعیت تبدیل کنم",
        name: "ملیکا اشرفی",
        title: "تا ابد با پرشین استور",
    },
];
