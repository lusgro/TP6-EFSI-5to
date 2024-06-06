import Title from "@/components/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title title="Bienvenido a ReservORT" h1={true} />
    </main>
  );
}
