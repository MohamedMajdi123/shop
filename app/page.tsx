'use client'
import styles from "./page.module.css";
import Image from "next/image";
import Hero from '/public/images/hero.png';
function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.col}>
          <h1 className={styles.title}>Your Best Online Shop Destination!</h1>
          <p className={styles.description}>
            Descover a world of endless shopping possibilties at our online store.
            Browse,choose, and order your favorite product from comfort of your Home
            </p>
          <button className={styles.button}>Shop Now</button>
        </div>
        <div className={styles.col}>
          <Image 
          src={Hero}
          width={200}
          height={200}
          alt=''
          className={styles.img}
          />
        </div>
      </div>
  );
}
export default Home;
