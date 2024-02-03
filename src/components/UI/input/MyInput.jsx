import styles from './MyInput.module.scss';

const MyInput = ({ ...props }) => {
  return <input {...props} className={styles.myInput} />;
};

export default MyInput;
