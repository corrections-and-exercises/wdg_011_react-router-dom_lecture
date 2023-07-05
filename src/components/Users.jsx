import {Outlet, useParams} from 'react-router-dom';

function Users({users}) {
  const {id} = useParams();
  return (
    <>
      <div>Users {id && users[id]}</div>
      <Outlet />
    </>
  );
}

export default Users;
