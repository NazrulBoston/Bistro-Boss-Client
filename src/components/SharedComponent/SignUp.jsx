import { Link } from "react-router";
import registerAnimatedImg from '../../assets/others/register.json'
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import SocialLogin from "./SocialLogin";



const SignUp = () => {
  const{createUser} = useContext(authContext)

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password }
    console.log(user)

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
      })

  }

  return (
    <>
      <Helmet>
        <title>Bistro Boss - SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-[500px]">
              {/* <img src={signUpImg} alt="" /> */}

                <Lottie animationData={registerAnimatedImg}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-5xl font-bold my-5 text-center">Sign Up!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
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
                  <button className="btn btn-block btn-primary">Sign Up</button>
                  <SocialLogin></SocialLogin>
                </div>
              </form>
              <p className="text-center mb-4">Have an account? <Link to="/login" className="font-bold">Login</Link></p>

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

export default SignUp;