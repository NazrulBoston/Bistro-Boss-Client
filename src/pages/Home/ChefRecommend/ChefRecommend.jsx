import { useEffect, useState } from "react";
import TitleSection from "../../../components/TitleSaction/TitleSection";
import MenuCard from "../../../components/MenuCard/MenuCard";


const ChefRecommend = () => {
    const[chefMenu, setChefMenu] = useState([])
    useEffect(()=> {
        fetch('chefRecommends.json')
        .then(res=> res.json())
        .then(data => setChefMenu(data))
    },[])
    return (

        <section className="mt-12">
            <TitleSection
            subHeading={"Should Try"}
            heading={"Chef recommends"}
            ></TitleSection>

            <div className="grid md:grid-cols-3 gap-20">
                {
                    chefMenu.map(menu=> <MenuCard
                    key={menu._id}
                    menu={menu}
                    ></MenuCard>)
                }
            </div>
            
        </section>
    );
};

export default ChefRecommend;