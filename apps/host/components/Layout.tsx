import { ReactElement } from "react";
import Menu from "./Menu";
import styles from './main.module.css'

export default function Layout({ children }: { children: ReactElement}) {
  return <div className={styles.container}>
    <Menu />
    <main>
      {children}
    </main>
  </div>
}