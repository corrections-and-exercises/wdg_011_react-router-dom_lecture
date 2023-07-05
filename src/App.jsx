import {Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Users from './components/Users.jsx';
import Dashboard from './components/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import You from './components/You.jsx';
import Posts from './components/Posts.jsx';
import Post from './components/Post.jsx';

function App() {
  const users = ['tim', 'karla', 'lydia', 'sam'];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Basics */}
        {/* <Route path='users'>
          <Route index element={<Users />} />
          <Route path='me' element={<Dashboard />} />
          <Route path='you' element={<You />} />
          <Route path=':id' element={<Users users={users} />} />
        </Route>  */}
        {/* Praktisches Beispiel */}
        <Route path='posts'>
          <Route index element={<Posts />} />
          <Route path=':id' element={<Post />} />
        </Route>
      </Routes>
    </>

    // Alternative Art zur Verschachtelung von Routen mittles <Outlet/> Komponente
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='users' element={<Users />}>
    //     <Route path='me' element={<Dashboard />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
