import { FaUtensils } from "react-icons/fa";
import TitleSection from "../../../components/TitleSaction/TitleSection";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            //now send the menu item data to the server with image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    };

    return (
        <div>
            <TitleSection heading="add an item" subHeading="What'new"></TitleSection>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe Name*</legend>
                        <input {...register('name', { required: true })} type="text" className="input w-full " placeholder="Name" />

                    </fieldset>

                    <div className="flex gap-6">
                        {/* category */}
                        <div className="w-full">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Recipe Name*</legend>
                                <select {...register('category')} defaultValue="Server location" className="select select-neutral w-full" >
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
                                <input {...register('price')} type="number" className="input w-full " placeholder="$" />

                            </fieldset>

                        </div>



                    </div>

                    {/* text area */}
                    <div className="mt-6">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea {...register('recipe')} className="textarea textarea-bordered h-24 w-full" placeholder=""></textarea>

                        </label>
                    </div>
                    {/* file input */}
                    <div className=" my-6">
                        <input {...register('image')} type="file" className="file-input w-full max-w-xs " />
                    </div>
                    <button className="btn bg-black text-white">Add Items <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;