import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/saved">Saved Pokemon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
