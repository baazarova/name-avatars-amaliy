import "../home-page/home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function HomePage() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => setUser(response.data.data));
  });
  console.log(user);

  return (
    <ul className="user-list">
      {user?.map((el) => (
        <li className="user-item">
         <div className="item-wrapper">
         <h3 className="first-name">{el.first_name}</h3>
          <h4 className="last-name">{el.last_name}</h4>
          <p className="email">{el.email}</p>
         </div>
          <img className="avatar" src={el.avatar} alt="img" />
        </li>
      ))}
    </ul>
  );
}
