import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.warn("password length must be 6 characters ");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.warn("password must have an upperCase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.warn("you need to must type a lowerCase letter");
      return;
    }

    const user = { name, photo, email, password };
    console.log(user);

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "User created successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            Navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "User created successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "User created successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Helmet>
        <title>BD Art Gallery | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute top-14 right-3 "
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p className="text-center mt-4">
                  Do not have an account{" "}
                  <Link className="text-blue-600 font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="flex items-center">
                <hr className="w-full border-t-2 border-gray-300" />
                <span className="mx-4 text-blue-500">Or</span>
                <hr className="w-full border-t-2 border-gray-300" />
              </div>
              <button onClick={handleGoogleSignIn} className="btn btn-outline">
                Google sign In
              </button>
              <button onClick={handleGithubSignIn} className="btn btn-outline">
                Github sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
