import React from "react";

function Header(props) {
  const { logo, title } = props;
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{title}</h1>
    </header>
  );
}

export default Header;
