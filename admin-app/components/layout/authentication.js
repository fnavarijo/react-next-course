import Image from 'next/image';
import styles from '../../styles/Authentication.module.css';

import Profile from '../../assets/profile.png';

function AuthenticationLayout ({ children }) {
  return (<div className={styles.authLayout}>
    <div className={styles.authContainer}>
      <Image className={styles.authImage} src={Profile} width={182} height={182} alt="" />
      {children}
    </div>
  </div>)
}

export default AuthenticationLayout;
