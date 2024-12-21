import React from "react";
import { FaGithub, FaTelegram, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import prsian from "@/components/ui/images/pr.svg"
const Footer = () => {
    const footerLinks = {
        product: [
            { name: "محصولات ما", link: "/pricing" },
            { name: "قیمت", link: "#" },
            { name: "به زودی", link: "#" },
            { name: "به زودی", link: "#" }
        ],
        useCases: [
            { name: "مشتریان ما", link: "#" },
            { name: "تیم ما ", link: "#" },
            { name: "به زودی", link: "#" }
        ],
      
        company: [
            { name: "در مورد ما", link: "#" },
            { name: "کار های خفن ما", link: "#" },
            { name: "تماس با ما", link: "#" },
        
        ]
    };

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center mb-12">
                    <Image
                        src={prsian}
                        alt="Company Logo"
                        className="h-12 w-auto"
                        
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-right items-center">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">محصولات</h3>
                        <ul className="space-y-2">
                            {footerLinks.product.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="text-gray-400 hover:text-white transition duration-300">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">در دسترس</h3>
                        <ul className="space-y-2">
                            {footerLinks.useCases.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="text-gray-400 hover:text-white transition duration-300">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                   

                    <div>
                        <h3 className="text-lg font-semibold mb-4">کمپانی ما</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="text-gray-400 hover:text-white transition duration-300">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                <div className="border-t border-gray-800 pt-8 text-right">
                    <div className="flex flex-col md:flex-row  justify-between text-right">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0 text-right">
                            © {new Date().getFullYear()} تمامی حقوق برای پرشین استور محفوظ میباشد
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-right">
                                <FaGithub className="h-6 w-6" />
                            </a>
                            <a href="https://t.me/prsian_store" target="_blank" className="text-gray-400 hover:text-white transition duration-300 text-right">
                                <FaTelegram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-right">
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                            <a href="https://www.instagram.com/prsianstoree?igsh=bmY4OTRieXdqZTl5" target="_blank" className="text-gray-400 hover:text-white transition duration-300 text-right">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;