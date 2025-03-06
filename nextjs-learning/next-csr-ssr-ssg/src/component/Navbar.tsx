"use client";

import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles[`navbar-title`]}>
        {/* <Image src="/kea-olive.png" alt="File icon" width={56} height={56} /> */}
        RENDERING TEST
        {/* <Image src="/kea-olive.png" alt="File icon" width={56} height={56} /> */}
      </Link>
      <div className={styles[`navbar-items`]}>
        <Link
          href="/csr2"
          className={`${styles[`navbar-item`]} ${
            pathname === "/csr2" ? styles.active : ""
          }`}
        >
          CSR2
        </Link>
        <Link
          href="/csr"
          className={`${styles[`navbar-item`]} ${
            pathname === "/csr" ? styles.active : ""
          }`}
        >
          CSR
        </Link>
        <Link
          href="/ssr"
          className={`${styles[`navbar-item`]} ${
            pathname === "/ssr" ? styles.active : ""
          }`}
        >
          SSR
        </Link>
        <Link
          href="/"
          className={`${styles[`navbar-item-test`]} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          RENDERING TEST
        </Link>
        <Link
          href="/ssg"
          className={`${styles[`navbar-item`]} ${
            pathname === "/ssg" ? styles.active : ""
          }`}
        >
          SSG
        </Link>
        <Link
          href="/isr"
          className={`${styles[`navbar-item`]} ${
            pathname === "/isr" ? styles.active : ""
          }`}
        >
          ISR
        </Link>
      </div>
      <Link href="/admin" className={styles[`navbar-admin`]}>
        admin
      </Link>
    </div>
  );
}
