import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Request failed');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <NavLink key={post.id} to={`/posts/${post.id}`}>
            <p>{post.title}</p>
          </NavLink>
        ))}
    </div>
  );
}

export default Posts;
