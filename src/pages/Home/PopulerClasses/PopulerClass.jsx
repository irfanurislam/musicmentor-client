import React from "react";

const PopulerClass = ({ classItem}) => {
  const {_id,className,classImage,seats,price} = classItem
  return (
    <div>
      <div className="card card-compact min-h-full bg-base-400 shadow-xl">
        <figure>
          <img
            src={classImage}
            alt="Shoes"
            className="hover:scale-110 transition"
          />
        </figure>
        <div className="card-body flex justify-center items-center ">
          <h2 className="card-title text-center text-2xl">Learn: {className}</h2>
          <p className="text-lg font-medium">Seats: {seats}</p>
          <p className="text-lg font-medium"> Price: ${price}</p>
          <div className="card-actions justify-end">
            <h2 className="link link-secondary text-xl">Details</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerClass;
