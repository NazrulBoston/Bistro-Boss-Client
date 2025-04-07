import { useContext } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../../providers/AuthProvider";
import googleImg from '../../assets/icon/google.png'
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useContext(authContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log("Google Sign-In successful:", result.user);
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Successfully signed in!",
                            icon: "success",
                            timer: 3000,
                            draggable: true
                            
                        });

                       
                        navigate("/");
                    })

            })
            .catch(error => {
                console.log("Google Sign-In Error:", error);
                Swal.fire({
                    title: "Sign-In Failed!",
                    text: error.message,
                    icon: "error",
                    timer: 3000,
                    draggable: true
                });
            });
    };

    return (
        <div className="text-center mb-5">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-block border-2 font-semibold">
                <span> <img className="w-6" src={googleImg} alt="" /></span>Sign In with Google
            </button>
        </div>
    );
};

export default SocialLogin;
