import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import styles from './PostItem.module.scss';

const PostItem = ({ post, remove }) => {
  const router = useNavigate()
  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        <h2>
          {post.id}. {post.title}
        </h2>
        <p>{post.body}</p>
      </div>
      <div >
        <MyButton onClick={() => router(`/posts/${post.id}`) }>Open</MyButton>
        <MyButton onClick={() => remove(post) }>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
