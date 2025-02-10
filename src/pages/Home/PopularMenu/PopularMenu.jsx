
import TitleSection from "../../../components/TitleSaction/TitleSection";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu]= useMenu()
    const popularItem = menu.filter(item => item.category ==='popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(food => food.category === 'popular')
    //             setMenu(popularItem)
    //         })
    // }, [])

    return (
        <section className="mb-12">
            <TitleSection
                heading={"From our menu"}
                subHeading={"Popular Items"}
            ></TitleSection>
            <div className="grid md:grid-cols-2 gap-4 ">
                {
                    popularItem.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-2 mt-6">View Full Menu</button>
            </div>


        </section>
    );
};

export default PopularMenu;