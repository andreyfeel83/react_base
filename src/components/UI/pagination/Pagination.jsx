import { getPagesArray } from "../../../utils/pages";
import styles from './Pagination.module.scss'

const Pagination = ({ totalPages, page, changePage }) => {
     let pagesArray = getPagesArray(totalPages);
  return (
    <div className={styles.pageWrapper}>
      {pagesArray.map((el) => (
        <span
          key={el}
          onClick={() => changePage(el)}
          className={page === el ? styles.pageActive : styles.pageButton}
        >
          {el}
        </span>
      ))}
    </div>
  );
}

export default Pagination