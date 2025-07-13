// this router system we can't use loader for data loading we using useParams and did destructure

import { useParams } from "react-router";
import TitleSection from "../../../components/TitleSaction/TitleSection";
import useMenu from "../../../hooks/useMenu";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdatedItem = () => {
  const [menu] = useMenu(); // Get the full menu list
  const { id } = useParams();
   const { register, handleSubmit, reset } = useForm()

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
   const onSubmit = async (data) => {
  let imageUrl = image; // keep the original image if no new one is uploaded

  if (data.image && data.image[0]) {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      } else {
        console.error("Image upload failed", res.data);
        return; // stop if upload failed
      }
    } catch (err) {
      console.error("Upload error", err);
      return;
    }
  }

  const menuItem = {
    name: data.name,
    category: data.category,
    price: parseFloat(data.price),
    recipe: data.recipe,
    image: imageUrl,
  };

  try {
    const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
    if (menuRes.data.modifiedCount > 0) {
        reset()
      Swal.fire({
        position: "top-end",
        icon: "success", 
        title: `${data.name} is updated to the menu`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (err) {
    console.error("Update error", err);
  }
};


  // Find the item directly using the id
  const currentItem = menu.find(item => item._id === id);

  // Destructure safely
  const { name, price, category, recipe, image, _id } = currentItem || {};

  return (
    <div>
      <TitleSection heading="Update an Item" subHeading="Refresh Info" />
      <div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <fieldset className="fieldset">
                              <legend className="fieldset-legend">Recipe Name*</legend>
                              <input {...register('name', { required: true })} type="text" defaultValue={name} className="input w-full " placeholder="Name" />
      
                          </fieldset>
      
                          <div className="flex gap-6">
                              {/* category */}
                              <div className="w-full">
                                  <fieldset className="fieldset">
                                      <legend className="fieldset-legend">Recipe Name*</legend>
                                      <select {...register('category')} defaultValue={category} className="select select-neutral w-full" >
                                          <option disabled={true} value="salad">Select a Category</option>
                                          <option value="salad">Salad</option>
                                          <option value="pizza">Pizza</option>
                                          <option value="soups">Soups</option>
                                          <option value="dessert">Dessert</option>
                                          <option value="drinks">Drinks</option>
      
                                      </select>
      
                                  </fieldset>
                              </div>
      
                              {/* price */}
                              <div className="w-full">
                                  <fieldset className="fieldset">
                                      <legend className="fieldset-legend">Price*</legend>
                                      <input {...register('price')} defaultValue={price} type="number" className="input w-full " placeholder="$" />
      
                                  </fieldset>
      
                              </div>
      
      
      
                          </div>
      
                          {/* text area */}
                          <div className="mt-6">
                              <label className="form-control">
                                  <div className="label">
                                      <span className="label-text">Recipe Details</span>
                                  </div>
                                  <textarea {...register('recipe')} defaultValue={recipe} className="textarea textarea-bordered h-24 w-full" placeholder=""></textarea>
      
                              </label>
                          </div>
                          {/* file input */}
                          <div className=" my-6">
                              <input {...register('image')} type="file" className="file-input w-full max-w-xs " />
                          </div>
                          <button className="btn bg-black text-white">Update Menu Items </button>
                      </form>
                  </div>
      
     
    </div>
  );
};

export default UpdatedItem;












// destructure with declare state

// import { useParams } from "react-router";
// import TitleSection from "../../../components/TitleSaction/TitleSection";
// import { useEffect, useState } from "react";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";

// const UpdatedItem = () => {
//   const axiosPublic = useAxiosPublic();
//   const { id } = useParams();
//   const [item, setItem] = useState(null);

//   // Fetch the single menu item by ID
//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const res = await axiosPublic.get(`/menu/${id}`);
//         setItem(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchItem();
//   }, [id, axiosPublic]);

//   // Destructure safely
//   const { name, price, category, recipe, image } = item || {};

//   return (
//     <div>
//       <TitleSection heading="Update an Item" subHeading="Refresh Info" />
//       {item ? (
//         <form className="w-full">
//           <div>
//             <label>Name:</label>
//             <input type="text" defaultValue={name} />
//           </div>
//           <div>
//             <label>Price:</label>
//             <input type="number" defaultValue={price} />
//           </div>
//           <div>
//             <label>Category:</label>
//             <input type="text" defaultValue={category} />
//           </div>
//           <div>
//             <label>Recipe:</label>
//             <textarea defaultValue={recipe}></textarea>
//           </div>
//           <div>
//             <label>Image URL:</label>
//             <input type="text" defaultValue={image} />
//           </div>
//           {/* Update button logic goes here */}
//           <button type="submit">Update Item</button>
//         </form>
//       ) : (
//         <p>Loading item...</p>
//       )}
//     </div>
//   );
// };

// export default UpdatedItem;








//before destructing 

// import { useParams } from "react-router";
// import TitleSection from "../../../components/TitleSaction/TitleSection";
// import useMenu from "../../../hooks/useMenu";
// import { useEffect } from "react";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";



// const UpdatedItem = () => {
//      const [menu] = useMenu();
//      const axiosPublic = useAxiosPublic()
//      const {id}  = useParams()
//      console.log(id)


//      useEffect(()=> {
//         const singleData = async() => {
//             try {
//                 const res = await axiosPublic.get(`http://localhost:3005/menu/${id}`)
//                 console.log(res)
//             } catch (err) {
//                 console.log(err)
                
//             }
//         }
//         singleData()
//      }, [id])

//     return (
//         <div>
//             <TitleSection heading="Update an Item" subHeading="Refresh Info"></TitleSection>
            
//         </div>
//     );
// };

// export default UpdatedItem;