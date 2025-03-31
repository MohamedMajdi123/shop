import Link from "next/link";
import styles from './navbar.module.css'
import {links} from './data';
import Button from "../buttons/button";
import Logo from "@/app/elements/logo";
import DarkModeToggle from "@/app/components/DarkModeToggle/DarkModeToggle";



function Navbar() {
    const list = links.map(e => {
        return (
            <Link key={e.id} href={e.url}>{e.title}</Link>
        )
    })
    return(
        <div className={styles.container}>
            <Logo />
            <ul className={styles.links}>
                <DarkModeToggle />
                {list}
                <Button></Button>
            </ul>
        </div>
    )
}

export default Navbar;