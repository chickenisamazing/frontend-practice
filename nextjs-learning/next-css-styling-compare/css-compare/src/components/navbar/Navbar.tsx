"use client";

import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      {/* <Link href="/" className={styles[`navbar-title`]}>

        RENDERING TEST
  
      </Link> */}
      <div className={styles[`navbar-items`]}>
        <Link
          href="/client-component"
          className={`${styles[`navbar-item`]} ${
            pathname === "/client-component" ? styles.active : ""
          }`}
        >
          CLIENT COMPONENT
        </Link>
        <Link
          href="/server-component"
          className={`${styles[`navbar-item`]} ${
            pathname === "/server-component" ? styles.active : ""
          }`}
        >
          SERVER COMPONENT
        </Link>
      </div>
      {/* <Link href="/admin" className={styles[`navbar-admin`]}>
        admin
      </Link> */}
    </div>
  );
}
