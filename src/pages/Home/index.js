import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main>
        <h1>Welcome to React Router!</h1>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Home;