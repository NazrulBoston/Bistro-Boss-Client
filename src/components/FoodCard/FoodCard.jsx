import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const[,refetch] = useCart();



    const handleAddToCart = food => {

        if (user && user.email) {
            // send cart to the database
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch cart to update the cart items count 
                      refetch();
                }
            })
        }
        else {
            Swal.fire({
                title: "Yor are not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })

                }
            });
        }
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="food" />
            </figure>
            <p className="absolute right-0 mr-5 p-2 rounded bg-slate-800 text-white">${price}</p>
            <div className="card-body text-center flex flex-col items-center justify-center">
                <h2 className="card-title ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-2">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-2"> <span className="text-red-500">Add to Cart</span></button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;