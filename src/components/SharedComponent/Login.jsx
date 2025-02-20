import { Link } from "react-router";
import loginAnimatedImg from '../../assets/others/signIn.json'
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const { signIn } = useContext(authContext)

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user)
        signIn(email, password)
            .then(result => {
                console.log("Successfully sign in", result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss - Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div>
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left w-[400px]">
                            {/* <img src={loginImg} alt="" /> */}
                            <Lottie animationData={loginAnimatedImg} loop={true}></Lottie>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex-1">
                            <form onSubmit={handleSignIn} className="card-body ">
                                <h1 className="text-5xl font-bold my-5 text-center">Login now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-block btn-primary font-semibold">Login</button>
                                <SocialLogin></SocialLogin>
                                </div>
                            </form>
                            <p className="text-center mb-4">New here? <Link to="/signup" className="font-bold">Sign Up</Link></p>
                        </div>


                    </div>
                    <div className="text-center my-4" >
                        <Link to="/"> <button className="btn btn-outline border-0 border-b-2">Go Home</button></Link>
                    </div>
                </div>


            </div>
        </>
    );

};

export default Login;   