import { Link } from 'react-router-dom';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>Test site to consolidate knowledge</h1>
      <Link to={'/'} className={styles.about} title='Main page'>
        Back to posts
      </Link>
    </div>
  );
};

export default About;
