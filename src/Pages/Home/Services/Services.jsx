import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error:", error)); // handle the error here if you want to show a message instead of a console error.
  }, []);
  return (
    <div className="mb-36">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#FF3811]">Services</h3>
        <h2 className="text-5xl font-bold">Our Services</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
