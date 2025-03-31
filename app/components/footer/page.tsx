import styles from './footer.module.css'
import Image from 'next/image';

import {social_media} from './data';

function Footer() {
    const socialList = social_media.map(e => {
        return(
            <Image 
        key={e.id}
        src={`/images/icon/${e.name}.png`}
        width={20}
        height={20}
        alt={`Hexashop ${e.name} Link`}
        className={styles.icon}
        />
        )
    })
    return(
        <div className={styles.container}>
            <div>&copy;2023 Hexashop. All rights reserved.</div>
            <div className={styles.social}>
                {socialList}
            </div>
        </div>
    )
}

export default Footer;