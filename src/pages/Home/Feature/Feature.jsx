import TitleSection from "../../../components/TitleSaction/TitleSection";
import imgFeature from '../../../assets/home/featured.jpg'
import './Feature.css'



const Feature = () => {
    return (
        <section className="mt-16 pt-6 featured-item bg-fixed">
            <div>
                
            </div>
            <TitleSection
                subHeading={"Check it out"}
                heading={"from our menu"}
            ></TitleSection>

            <div className="flex sm:flex-col md:flex-row justify-center items-center gap-10 pt-12 pb-40 px-40 bg-slate-800 opacity-60">
                <div className="flex-1 " >
                    <img className="" src={imgFeature} alt="" />
                </div>
                <div className="flex-1 text-white p-14">
                    <h2 className="text-3xl font-bold">March 20, 2025</h2>
                    <h3 className="uppercase text-2xl font-semibold">WHERE CAN I GET SOME?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci aspernatur hic laboriosam recusandae delectus.</p>
                    <button className=" btn btn-outline border-0 border-b-2 mt-4">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Feature;