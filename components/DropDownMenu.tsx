import { motion } from "framer-motion"
import Link from "next/link";


interface DropDownMenuProps {
    onClose: () => void
}
const DropDownMenu: React.FC<DropDownMenuProps> = ({}) => {
    return (

        <motion.div
       

            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'absolute', right: "0", left: "0", top: "7rem", zIndex: 50, padding: "1.5rem", marginTop: '1rem', borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem", width: "100vw", height: "100vh", backgroundColor:"rgb(250 250 250 / var(--tw-bg-opacity, 1))"
}}

        >

      

            <div className="flex-col flex space-y-10">
                <Link href="/pricing" className='text-black text-2xl'>
                    قیمت
                </Link>
                <Link href="/" className='text-black text-2xl'>
                    طراحی سایت
                </Link>
                <Link href="/contact" className='text-black text-2xl'>
                    تماس با ما
                </Link>
            </div>

        </motion.div>
    )
}

export default DropDownMenu;
