import React from "react";

function Home() {
  return (
    <div>
      <style type="text/css">
        {`
        body {
          background-color: var(--back-ground-color);
          color: var(--primary-color);
        }
        h1 {
          font-family: var(--title-font);
        }
        `}
      </style>
      <h1>Home Page</h1>
      <p>
        Front end web developer.
      </p>
    </div>
  );
}

export default Home;
