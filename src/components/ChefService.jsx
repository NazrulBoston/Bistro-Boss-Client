import img from '../assets/home/chef-service.jpg'



const ChefService = () => {
    return (
        <section className='mb-20'>
            

            <div className="relative ">
                {/* Make image responsive */}
                <img src={img} alt="Chef Service" className="w-full h-auto" />

                {/* Centered card with responsive width */}
                <div className="bg-base-100 max-w-[90%] w-full md:w-6/12 mx-auto shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-6">
                    <div className="text-center">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla velit earum nostrum quae corporis ducimus aperiam neque voluptates eum itaque reprehenderit architecto saepe, error voluptatibus ipsa temporibus minus dolores tenetur.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ChefService;
