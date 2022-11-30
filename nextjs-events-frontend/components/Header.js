import Link from "next/link"
import styles from "@/styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/' legacyBehavior>
          <a>DJ EVENTS</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/events' legacyBehavior>
              <a>Eventos</a>
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
