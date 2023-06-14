import React from "react";

const PopulerClass = ({ classesImg, title, description }) => {
  return (
    <div>
      <div className="card card-compact min-h-full bg-base-400 shadow-xl">
        <figure>
          <img
            src={classesImg}
            alt="Shoes"
            className="hover:scale-110 transition"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">All Classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerClass;
