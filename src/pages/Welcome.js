import { Link, Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <p>
        <Link to="/welcome/new-user">New User</Link>
      </p>
      <Route path="/welcome/new-user">
        <>
          <h3>We Welcomes you as a New User in our Application</h3>
          <p>
            <Link to="welcome">Close</Link>
          </p>
        </>
      </Route>
    </section>
  );
};

export default Welcome;
