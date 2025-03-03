import { Link, useNavigate } from "react-router";
import registerAnimatedImg from '../../assets/others/register.json';
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import SocialLogin from "./SocialLogin";
import { sendEmailVerification } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";






const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(authContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();


  const handleSignUp = e => {
    e.preventDefault();
    setError(""); // Reset error messages
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // **Email Validation Regex**
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }

    // **Password Validation Regex**
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      setError("Password must be at least 6 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    const user = { name, email, password, photoURL, terms };
    console.log(user);

    if (!terms) {
      setError("Please checked the term and condition")
      return;
    }

    createUser(email, password)
      .then(async (result) => {
        const loggedUser = result.user;
        console.log("User created successfully:", loggedUser);

        try {
          await updateUserProfile(name, photoURL);
          console.log("User profile updated");
          // console.log(name, photoURL)
          Swal.fire({
            title: "Successfully user created!",
            icon: "success",
            timer: 3000,
            draggable: true
          });
        } catch (error) {
          console.error("Error updating profile:", error);
        }

        e.target.reset();
        navigate('/');

        sendEmailVerification(result.user)
          .then(() => {
            alert('Please check your email and verify your account');
          });

      })
      .catch(err => {
        console.log("Signup error:", err.message);
        setError("User already has an account");
      });


  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss - SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div>
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-[500px]">
              <Lottie animationData={registerAnimatedImg} loop={true} />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-5xl font-bold my-5 text-center">Sign Up!</h1>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type={showPassword ? 'text' : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 inset-y-8">
                    {
                      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }

                  </button>
                </div>

                {/* Terms and Condition  */}
                <div className="form-control text-xs">
                  <label className="cursor-pointer label ">
                    <input type="checkbox" className="checkbox scale-75 " name="terms" />
                    <span className="label-text"><a href="">Accept terms and condition</a></span>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-block btn-primary">Sign Up</button>
                  <SocialLogin />
                </div>
              </form>
              <p className="text-center mb-4">Have an account? <Link to="/login" className="font-bold">Login</Link></p>
            </div>
          </div>
          <div className="text-center my-4">
            <Link to="/"> <button className="btn btn-outline border-0 border-b-2">Go Home</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
