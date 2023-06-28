"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Recipes",
    url: "/recipes",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  const session = useSession();
  const [isVerticalList, setIsVerticalList] = useState(false);

  const toggleListDisplay = () => {
    setIsVerticalList(!isVerticalList);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        sirmur
      </Link>
      <div className={`${styles.links} ${isVerticalList ? styles.vertical : ''}`}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
      <button className={styles.toggleButton} onClick={toggleListDisplay}>
        Toggle List
      </button>
    </div>
  );
};

export default Navbar;

// old navbar


// const Navbar = () => {
//   const session = useSession();

//   return (
//     <div className={styles.container}>
//       <Link href="/" className={styles.logo}>
//         sirmur
//       </Link>
//       <div className={styles.links}>
//         <DarkModeToggle />
//         {links.map((link) => (
//           <Link key={link.id} href={link.url} className={styles.link}>
//             {link.title}
//           </Link>
//         ))}
//         {session.status === "authenticated" && (
//           <button className={styles.logout} onClick={signOut}>
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
