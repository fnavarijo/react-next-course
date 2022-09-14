import Image from "next/image";

import styles from "../../styles/layout/Auth.module.css";

import Profile from "../../assets/profile.png";

function AuthenticationLayout({ children }) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <Image
            src={Profile}
            width={182}
            height={182}
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthenticationLayout;
