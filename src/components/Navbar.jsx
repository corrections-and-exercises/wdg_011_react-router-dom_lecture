import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <NavLink
        to='/'
        style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}
      >
        Homepage
      </NavLink>
      <NavLink
        to='/users'
        style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}
      >
        Users
      </NavLink>
      <NavLink
        to='/users/me'
        style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}
      >
        Me
      </NavLink>
      <NavLink
        to='/posts'
        style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}
      >
        Posts
      </NavLink>
    </div>
  );
}

export default Navbar;
