import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";

const Login = () => {

    const { signIn, popUpSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    popUpSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Login success");
      })
      .catch((error) => {
        console.error(error.message);
        toast(error.message);
      });
  };

  const handleGithubSignIn = () => {
    popUpSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Login success");
      })
      .catch((error) => {
        console.error(error.message);
        toast(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Login success");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast(error.message);
      });
  };

  return (
    <div>
      <h2 className="text-3xl my-10  font-bold text-center">Please Login</h2>
      <form
        onSubmit={handleLogin}
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
      >
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
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
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
          <button onClick={handleGoogleSignIn} className="btn ">
            Google Login
          </button>
        </div>
        <div className="">
          <button onClick={handleGithubSignIn} className="btn">
            Github Login
          </button>
        </div>
      </div>
      <p className="text-center mt-4">
        Do not have an account{" "}
        <Link className="text-blue-600 font-bold" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
