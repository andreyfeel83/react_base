import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { Link } from 'react-router-dom';
import PostsList from '../components/PostsList';
import PostForm from '../components/PostForm';
import PostsFilter from '../components/PostsFilter';
import MyModal from '../components/UI/MyModal/MyModal.jsx';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const serchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalIsVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Get Posts</MyButton>
      <MyButton onClick={() => setModalIsVisible(true)}>Create post</MyButton>
      <Link to={'about'} className='link-about' title='About this progect'>About</Link>
      <MyModal visible={modalIsVisible} setVisible={setModalIsVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr />
      <PostsFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error: ${postError}</h1>}
      {isPostsLoading ? (
        <h1>Loading...</h1>
      ) : (
        <PostsList
          posts={serchedAndSortedPosts}
          title={'Posts list'}
          remove={removePost}
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
