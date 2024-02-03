import MySelect from "./UI/select/MySelect"
import MyInput from "./UI/input/MyInput";

const PostsFilter = ({filter, setFilter}) => {
  return (
    <>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({...filter,sort:selectedSort})}
        defaultValue="Sort by "
        options={[
          { valye: 'by title', name: 'title' },
          { valye: 'by body', name: 'body' },
        ]}
      />
      <MyInput
        type="text"
        placeholder="Find..."
        value={filter.query}
        onChange={(e) => setFilter({...filter,query:e.target.value})}
      />
    </>
  );
}

export default PostsFilter