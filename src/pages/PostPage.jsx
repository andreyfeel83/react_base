import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);
  return (
    <>
      <div>PostPage {params.id}</div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
    </>
  );
};

export default PostPage;
