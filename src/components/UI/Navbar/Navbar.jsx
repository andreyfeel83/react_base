import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={'/'} className={styles.about} title="Main page">
        Back to posts
      </Link>
      <Link to={'about'} className="link-about" title="About this progect">
        About
      </Link>
    </div>
  );
}

export default Navbar