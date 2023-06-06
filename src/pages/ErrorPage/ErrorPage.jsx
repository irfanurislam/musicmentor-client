import React from 'react';

import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error,status}= useRouteError()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <h1 className="text-3xl font-bold mb-4">Error  {status || 404}</h1>
      <img
        src="https://i.ibb.co/cXFV9Mz/error.png" // Replace with the path to your error image
        alt="Error"
        className="w-64 h-64 mb-4"
      />
      <p className="text-xl text-gray-500">Page not found {error?.message}</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
