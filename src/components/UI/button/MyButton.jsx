import styles from './MyButton.module.scss'

const MyButton = ({children, ...props}) => {
  return (
    <button className={styles.myBtn} {...props}>{children}</button>
  )
}

export default MyButton