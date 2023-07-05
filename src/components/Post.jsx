import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Post() {
  const [post, setPost] = useState();

  const {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!res.ok) throw new Error('Request failed');
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <p>Title</p>
          <p>{post.title}</p>
          <p>Body</p>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default Post;
