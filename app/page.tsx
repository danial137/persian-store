"use client"
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/SliderOne";
import GraphicDesighn from "@/components/GraphicDesign";
import ShopifyStore from "./ShopifyStores";
import Services from "./Services";
// import Faqs from "./Faqs"
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import Footer from "./Footer"
import { useRef } from "react";


export default function Home() {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);
 

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center bg-black/[0.96] md:justify-center antialiased bg-grid-white/[0.2] relative overflow-hidden ">

      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToShopifyStores={scrollToShopifyStores}
        scrollToBrands={scrollToBrands}
        scrollToServices={scrollToServices} />
      <Spotlight
        className=" md:flex md:-top-80 left-80"
        fill="white"
      />


      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-14 px-2">

        <div className="text-4xl pb-6 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">

          <h1>کسب و کارت رو با ما  <br />به روز کن </h1>

        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          فروش خود را با ما چند برابر کنید! با استفاده از محصولات و نظرات راهبردی ما و با استفاده از تجربه چندین ساله تیم پرشین استور راه دشوار برند سازی را برای خود راحت کنید
        </p>


        <Link href="/contact" className='cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white'>
          مشاوره با تیم ما
        </Link>

        <div className="w-full">
          <SliderOne />

          <div ref={graphicDesignRef}>
            <GraphicDesighn />
          </div>

          <div ref={shopifyStoresRef}>
            <ShopifyStore />
          </div>


          <div ref={servicesRef}>
            <Services />
          </div>
          <div>
            <InfiniteMovingCardsDemo />
          </div>
          {/* <Faqs /> */}
        </div>

        <div>
          <Footer/>
        </div>



      </div>
    </div>
  );
}
