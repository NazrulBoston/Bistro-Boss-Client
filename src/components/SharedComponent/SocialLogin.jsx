import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import googleImg from '../../assets/icon/google.png'


const SocialLogin = () => {
    const {googleSignIn} = useContext(authContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className="text-center mb-5">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-block border-2 font-semibold"> <span> <img className="w-6" src={googleImg} alt="" /></span>Sign In with Google</button>
        </div>
    );
};

export default SocialLogin;