import { Helmet } from "react-helmet";
import ChefService from "../../components/ChefService";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import Contact from "./Contact/Contact";
import Feature from "./Feature/Feature";
import PopularMenu from "./PopularMenu/PopularMenu";
import Reviews from "./Reviews/Reviews";



const Home = () => {
    return (

        <div className="mb-6">
            <Helmet>
                <title>Bistro Boss - Home</title>
            </Helmet>


            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecommend></ChefRecommend>
            <Feature></Feature>
            <Reviews></Reviews>


        </div>
    );
};

export default Home;