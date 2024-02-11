import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import styles from './PostPages.module.scss';

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, errorComments] = useFetching(
    async () => {
      const response = await PostService.getsCommentsByPostId(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div className={styles.wrapper}>
      <h1>PostPage {params.id}</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>{post.id}</h2> <h3>{post.title}</h3>
        </div>
      )}
      <h1>Comments:</h1>
      {isCommentsLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} className={styles.comments}>
              <h4>{comm.email}</h4>
              <h3>{comm.body}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPage;
