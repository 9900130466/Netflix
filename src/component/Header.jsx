import React from "react";

function Header() {
  return (
    <header className="netflix-header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1920px-Netflix_logo.svg.png"
        alt="NETFLIX"
        className="logo"
      />
      <div className="header-buttons">
        <button className="join-now">Join now</button>
        <button className="sign-in">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
