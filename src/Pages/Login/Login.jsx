import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const [showPass, setShowPass] = useState(false)
    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate();

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
            Swal.fire({
                title: 'Error!',
                text: 'Please provide a registered email and password',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
            
    };

    return (
        <div>
            <Helmet>
                <title>BD Art Gallery | Login</title>
            </Helmet>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input type={showPass ? "text" : "password"}

                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <span className="absolute top-14 right-3" onClick={() => setShowPass(!showPass)}>

                                    {
                                        showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p>Don't Have an Account?<Link to="/register" className="text-blue-500 text-2xl">Register</Link></p>
                            </div>
                            <div className="flex items-center">
                                <hr className="w-full border-t-2 border-gray-300" />
                                <span className="mx-4 text-blue-500">Or</span>
                                <hr className="w-full border-t-2 border-gray-300" />

                            </div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline">Google sign In</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline">Github sign In</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;