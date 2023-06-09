import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
  const { signInNew, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    console.log(email, password);

    signInNew(email, password)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSign = () => {

    googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })


  };

  return (
    <div className="mt-10 text-black">
       
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginSubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder=" your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                {<p className="text-error">{error}</p>}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary"
                  />
                </div>
                <p className="text-end">
                  Don't Have Any Account{" "}
                  <Link to="/signup" className="btn btn-link text-blue-500">
                    Sign Up
                  </Link>
                </p>

                <div className="divider">Another Social </div>
              </div>
            </form>
           <div className="mb-8 px-8">
           <button
              onClick={handleGoogleSign}
              className="btn btn-block btn-outline"
            >
              <FcGoogle className="text-2xl mr-12" />
              <span>Google Sign In</span>
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
