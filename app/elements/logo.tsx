import Link from "next/link"
import styles from '../components/navbar/navbar.module.css';

import { Lobster } from 'next/font/google';

const logoFontConst = Lobster({
    subsets: ['latin'],
    weight: ['400']
});


function Logo() {
    return(
        <Link href="/" className={`${styles.logo} ${logoFontConst.className}`}>HEXASHOP</Link> 
    )
}
export default Logo;