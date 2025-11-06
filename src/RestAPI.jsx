import { useState, useEffect } from "react";
import axios from "axios";

const RestAPI = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      {users.map(({ name, id }) => (
        <div
          key={id}
          className="bg-red-300 border border-black rounded-xl m-4 p-2"
        >
          {name}
        </div>
      ))}
    </>
  );
};

export default RestAPI;
