import React from "react";

function Header() {
  return (
    <nav>
    <div class="nav-wrapper grey darken-2">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Posts">Posts</a></li>
        <li><a href="/About">About</a></li>
      </ul>
    </div>
  </nav>
  );
}
export default Header;