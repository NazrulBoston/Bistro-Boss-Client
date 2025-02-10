import { Link } from "react-router";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem";



const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="my-16 ">
            {title && <Cover
                img={img}
                title={title}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-14 ">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-2"> <span className="text-red-400">Order here</span></button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;