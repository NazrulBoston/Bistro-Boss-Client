

const MenuCard = ({menu}) => {
    const{name, image, description, price} = menu;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-2 "> <span className="text-red-400">Price ${price}</span></button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;