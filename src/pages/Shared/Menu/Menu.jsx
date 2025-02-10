import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import imgMenu from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import TitleSection from '../../../components/TitleSaction/TitleSection';
import MenuCategory from './MenuCategory';


const Menu = () => {
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');


    return (

        <div>
            <Helmet>
                <title>Bistro Boss-Menu</title>
            </Helmet>

            {/* menu cover image */}
            <Cover
                img={imgMenu}
                title={'our menu'}
            ></Cover>

            {/* Section Title */}
            <TitleSection
            subHeading={"Don't miss"}
            heading={"Todays offer"}
            ></TitleSection>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts menu items */}
            <MenuCategory
            items={desserts}
            title="desserts"
            img={dessertImg}
            ></MenuCategory>


            {/* pizza menu items */}
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>

            {/* salad menu items */}
            <MenuCategory
            items={salad}
            title="salad"
            img={saladImg}
            ></MenuCategory>

            {/* soup menu items */}
            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;