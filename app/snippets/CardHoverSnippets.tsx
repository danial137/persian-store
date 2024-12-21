import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";
export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8 text-right">
            <HoverEffect items={projects.map(project => ({ ...project, isHovered: false }))} />
        </div>
    );
}
export const projects = [
    {
        icon: <div className="bg-blue-100 p-4 rounded-full text-right"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "طراحی سایت / webdevelopment",
        description:
            "  با تکیه بر تکنولوژی های روز دنیا و دانش فنی سفارش طراحی سایت شمارو انجام میدیم با نهایت دقت و با نازل ترین قیمت بین رقبا ",
    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "طراحی فروشگاه / ui/ux",
        description:
            "در ضمن جدا از طراحی سایت میتونید صفر تا صد تاسیس فروشگاه دیجیتال خودتون و بسپرید به ما,  چرا ؟  چون هم با طراحی رابط کاربری خفن به فروشگاهتون روح میبخشیم هم با دانش فنی بک اند براتون برنامه نویسیشو انجام میدیم تا بتونید یه سایت فروشگاهی خیلی خفن داشته باشید ",


    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "احراز هویت / authentication",
        description:
            "با سرویس احراز هویت پرشین استور این قابلیت و داشته باشید که تمامی کاربران خودتون و احراز کنید و از امنیت بالایی برخوردار باشید",
    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "شبکه های اجتماعی / media",
        description:
            "  یکی دیگه از خدمات اصلی پرشین استور راهنمایی و مشاوره جهت تبلیغات انبوه در شبکه های اجتماعی میباشد که با تیم متخصص ما میتوانید به بهترین نتیجه برسید با مشاورین ما تماس بگیرید و از راهنمایی های ما بهره مند شوید",
    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "توسعه اپلیکیشن / Application",
        description:
            "  جدا از ساختن سایت میتونیم براتون یه اپلیکیشن کراس پلتفرم بسازیم که هم قابلیت وب اپلیکشن داشته باشه و روی سیستم عامل مخاطبینتون نصب بشه و هم روی سایت قابل دسترسی باشه",
    },
    {
        icon: <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "پشتیبانی / supporting",
        description:
            "مهم ترین قسمت اینجاس  پشتیبانی واقعی24/7 فقط اینجا پیدا میشه",
    },
];
