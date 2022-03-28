import React, { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";

function Landing() {
  const [regUser, setRegUser] = useState(true);

  return (
    <div className="main-container">
      <section className="section">
        <div className="heading">
          <h1>Welcome back!</h1>
          <p>You can sign in to acesss with your existing account.</p>
        </div>

        <div className="components">
          {regUser ? (
            <Login setRegUser={setRegUser} />
          ) : (
            <Register setRegUser={setRegUser} />
          )}
        </div>
      </section>
    </div>
  );
}

export default Landing;
