import {useNavigate} from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const navigateToYou = () => {
    navigate('/users/you');
  };

  return (
    <>
      <div>Dashboard</div>
      <button onClick={handleClick}>Zurück</button>
      <button onClick={navigateToYou}>to you</button>
    </>
  );
}

export default Dashboard;
