import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { newCreateUser, logOut } = useContext(AuthContext);
  const [error,setError] = useState('')
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const handleSignUp = (event) => {
  //     event.preventDefault();

  //     const form = event.target;
  //     const name = form.name.value;
  //     const photo = form.photo.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     setError("");

  //     if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(gmail)+(?:\.com)*$/.test(email)) {
  //       return setError("please valid email");
  //     }

  //     if (/^(?=.*[A-Z]).+$/.test(password)) {
  //       return setError("Password: No one least  UpperCase");
  //     }
  //     if (password.length < 6) {
  //       return setError("The password must be contain 6 Word");
  //     }
  //     console.log(name, photo, email, password);
  //     newCreateUser(email, password)
  //       .then((result) => {
  //         const logNewUser = result.user;
  //         console.log(logNewUser);
  //         updateUser(result?.user, name, photo);

  //         logOut();
  //         navigate("/login");
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //         setError(error.message);
  //       });

  //     const updateUser = (user, name, photo) => {
  //       updateProfile(user, {
  //         displayName: name,
  //         photoURL: photo,
  //       })
  //         .then(() => {
  //           console.log("user name updated");
  //         })
  //         .catch((error) => {
  //           console.log(error.message);
  //           setError(error.message);
  //         });
  //     };
  //   };

  // react hook apply

  const onSubmit = (data) => {
    console.log(data);
    const {name,email,gender,photo,address,password,number,confirmPassword} = data
    
    setError('')
    if(password.length !== confirmPassword.length){
     return setError('password didnot match confirm password')
    }
    newCreateUser(email, password)
        .then((result) => {
          const logNewUser = result.user;
          console.log(logNewUser);
          updateUser(result?.user, name, photo,number,gender,address);

          logOut();
          navigate("/login");
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message)
        });


        const updateUser = (user, name, photo,gender,number,address) => {
                updateProfile(user, {
                  displayName: name,
                  gender: gender,
                  number: number,
                  photoURL: photo,
                  address: address
                })
                  .then(() => {
                    console.log("user name updated");
                  })
                  .catch((error) => {
                    console.log(error.message);
                    setError(error.message)
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="your Name "
                    className="input input-bordered"
                  />
                   {errors.name && (
                    <span className="text-error">Name Must Be required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    {...register("gender", { required: true })}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                   {errors.gender && (
                    <span className="text-error">Gender its required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile No</span>
                  </label>
                  <input
                    type="text"
                    {...register("number", { required: true })}
                    placeholder="Number"
                    className="input input-bordered"
                  />
                   {errors.number && (
                    <span className="text-error">Number is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-error">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                  {errors.photo && (
                    <span className="text-error">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    placeholder="address"
                    className="input input-bordered"
                  />
                  {errors.address && (
                    <span className="text-error">address is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-error">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-error">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-error">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-error">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    {...register("confirmPassword", { required: true })}
                    placeholder="address"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword && (
                    <span className="text-error">address is required</span>
                  )}
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
                    Sign Up
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
