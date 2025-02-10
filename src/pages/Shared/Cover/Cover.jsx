import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (


<Parallax
        blur={{ min: -45, max: 45 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div
            className="hero h-[550px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus atque possimus numquam ducimus dicta corrupti accusamus error voluptatem, asperiores labore!</p>
                    
                </div>
            </div>
        </div>     
        
    </Parallax>
  





       
    );
};

export default Cover;