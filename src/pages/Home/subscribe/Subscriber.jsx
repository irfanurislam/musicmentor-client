import React from "react";

const Subscriber = () => {
  return (
    <div className="mb-28">
      <div className="bg-[#091430] md:h-[450px] w-full">
        <div className="flex flex-col justify-center items-center w-1/2 m-auto">
          <div className="p-10 text-center">
            <h2 className="text-4xl text-white font-bold mb-6">
              Enjoy with subscribing us
            </h2>
            <p className="text-white text-lg text-start">
              Sit adipiscing maecenas nunc, rhoncus. Nunc massa donec morbi id
              diam iaculis. Eu, praesent a, sed facilisis et cras ultrices
              lacus. Adipiscing cras pulvinar in non. Velit adipiscing lobortis
              mi porttitor.
            </p>
          </div>
          <div className="form-control">
           
              <input
                type="text"
                placeholder="Your email"
                className="input input-bordered rounded-3xl focus:text-black"
              />
            
          </div>
          <button className="btn-secondary btn">subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
