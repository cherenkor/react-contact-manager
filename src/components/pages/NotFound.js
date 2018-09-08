import React from "react";

export default props => {
  let seconds = 5;
  setTimeout(() => props.history.push("/"), seconds * 1000);
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Not Found
      </h1>
      <p className="lead">Sorry, this page does not exist.</p>
      <p className="lead">
        Auto-redirect to Home page after {seconds} seconds...
      </p>
    </div>
  );
};
