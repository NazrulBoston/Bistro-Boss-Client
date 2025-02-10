

const MenuItem = ({item}) => {
    const{name, image, recipe, price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[104px]" src={image} alt="" />
            <div>
                <h1 className="uppercase text-yellow-500">{name}.........</h1>
                <p>{recipe}</p>
                <p className="text-red-400">Price: ${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;