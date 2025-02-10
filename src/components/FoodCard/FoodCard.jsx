

const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
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
                    <button className="btn btn-outline border-0 border-b-2"> <span className="text-red-500">Add to Cart</span></button>
                </div>
            </div>
        </div> 
    );
};

export default FoodCard;