import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error)); // Handle the error here if needed.
  }, []);
  return <div></div>;
};

export default Bookings;
