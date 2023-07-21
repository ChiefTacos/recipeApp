// import React from "react";
// import styles from "./footer.module.css";
// import Image from "next/image";
// import World from "public/favicon-32x32.png";
 
// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.footer}>2023 
//       <Image src={World} alt="" className={styles.img} />

//          Michael Murray. All rights reserved.</div>
    
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import World from "public/favicon-32x32.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <span>2023</span> {/* Wrap the text in a <span> element for better control */}
        <Image src={World} alt="" className={styles.img} />
        <span>Michael Murray. All rights reserved.</span> {/* Wrap the text in a <span> element for better control */}
      </div>
    </div>
  );
};

export default Footer;
