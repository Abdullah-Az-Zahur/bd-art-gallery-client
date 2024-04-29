import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";



const Login = () => {
  const auth = getAuth(app);
  const [showPass, setShowPass] = useState(false);
  const { signInUser } = useContext(AuthContext)
  const navigate =useNavigate()

  const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

  const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: 'Success!',
                text: 'Login successful!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            navigate('/')
        })
        .catch(error => {
          console.error(error)
            Swal.fire({
                title: 'Error!',
                text: 'Please provide a registered email and password',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
            
    };

    const handleGoogleSignIn = (e) => {
      e.preventDefault()

      signInWithPopup(auth,googleProvider)
      .then(result =>{
          console.log(result.user)
          Swal.fire({
              title: 'Success!',
              text: 'User created successfully!',
              icon: 'success',
              confirmButtonText: 'Ok'
          });
          navigate('/')
      })
      .catch(error => console.error(error))
  }

  const handleGithubSignIn =(e)=>{
    e.preventDefault();
    signInWithPopup(auth,githubProvider)
    .then(result =>{
        console.log(result.user)
        Swal.fire({
            title: 'Success!',
            text: 'User created successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        navigate('/')
    })
    .catch(error => console.error(error))

}

  return (
    <div>
      <Helmet>
        <title>Sweet Home | Login </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <div className="flex gap-2 w-full  items-center justify-center">
              <div className="">
                <button onClick={handleGoogleSignIn} className="btn btn-outline">Google Login</button>
              </div>
              <div className="">
                <button onClick={handleGithubSignIn} className="btn btn-outline">Github Login</button>
              </div>
            </div>
            <p className="text-center mt-4">
              Do not have an account{" "}
              <Link className="text-blue-600 font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
