import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {
  const { newCreateUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(gmail)+(?:\.com)*$/.test(email)) {
      return setError("please valid email");
    }

    if (/^(?=.*[A-Z]).+$/.test(password)) {
      return setError("Password: No one least  UpperCase");
    }
    if (password.length < 6) {
      return setError("The password must be contain 6 Word");
    }
    console.log(name, photo, email, password);
    newCreateUser(email, password)
      .then((result) => {
        const logNewUser = result.user;
        console.log(logNewUser);
        updateUser(result?.user, name, photo);

        logOut();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });

    const updateUser = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("user name updated");
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    };
  };

  return (
    <div className="mt-10">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up!</h1>
          </div>
          <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="your Name "
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select name="gender" required className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile No</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="number"
                    placeholder="Number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    required
                    type="url"
                    name="photo"
                    placeholder="Photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="address"
                    placeholder="address"
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
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </div>
                <p className="text-end">
                  Already Have A Account{" "}
                  <Link to="/login" className="btn btn-link">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
