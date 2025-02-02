import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Update = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    processingTime,
    photo,
    rating,
    price,
    description,
    subcategory,
    item_name,
  } = details;
  let customization;
  let inStock;
  const handleRadioChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value == "yes" || e.target.value == "no") {
      customization = e.target.value;
    } else if (e.target.value == "madeToOrder" || e.target.value == "inStock") {
      inStock = e.target.value;
    }
  };
  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const item_name = form.item_name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const processingTime = form.processingTime.value;
    console.log(customization, inStock);
    const newArtCraftDetails = {
      item_name,
      subcategory,
      description,
      price,
      rating,
      photo,
      processingTime,
      customization,
      inStock,
    };
    console.log(newArtCraftDetails);

    fetch(`https://server-side-eight-xi.vercel.app/artncraft/${details._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtCraftDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount ) {
          Swal.fire({
            title: "Success!",
            text: "Art and Craft Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="tablet  md:border lg:border-none  w-[90%] mx-auto bg-[url('bgImage')]  rounded-xl p-4 md:p-12  ">
      <h2 className="lg:text-3xl text-xl font-extrabold text-center mb-9 underline">
        Modify Your Art & Craft
      </h2>
      <form onSubmit={handleUpdateCoffee} className="">
        {/* form supplier row */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold ">
                Photo URL:
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered lg:w-[400px] float-left"
                required
                defaultValue={photo}
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold ">
                Item Name:
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item_name"
                placeholder="Your Item"
                className="input input-bordered lg:w-[400px] float-left"
                required
                defaultValue={item_name}
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}

        {/* form category and details row */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold ">
                Short Description:
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered lg:w-[400px] float-left"
                required
                defaultValue={description}
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold ">
                Subcategory:
              </span>
            </label>
            <label className="input-group">
            <select
                className="select select-bordered w-full  rounded-full"
                name="subcategory"
              >
                
                <option>Wooden Furniture & Sculptures</option>
                <option> Wooden Home Decoration</option>
                <option>Wooden Utensils and Kitchenware</option>
                <option>Jute Home Decoration </option>
                <option>Jute Kitchenware & utensils</option>
                <option>Jute and wooden jewellery</option>
              </select>
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        {/* Rating */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold ">
                Rating
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered lg:w-[400px] float-left"
                required
                defaultValue={rating}
              />
            </label>
          </div>
          {/* Price */}
          <div className="form-control w-full md:w-1/2 lg:w-1/2">
            <label className="label">
              <span className="label-text text-base font-bold ">
                Price:
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered lg:w-[400px] float-left"
                required
                defaultValue={price}
              />
            </label>
          </div>
        </div>
        {/* Processing time */}
        <div className="flex flex-col md:flex-row lg:flex-row mb-8 gap-3">
          <div className="form-control w-full md:w-1/2 lg:w-1/2 mb-4">
            <label className="label">
              <span className="label-text text-base font-bold ">
                Processing Time:
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                className="input input-bordered lg:w-[400px] float-left"
                required
                defaultValue={processingTime}
              />
            </label>
          </div>
          <div className="flex flex-col md:w-1/2 p-5 md:flex-row lg:flex-row mb-4 gap-3  items-center bg-blur px-3 rounded-lg border shadow-xl">
            <div className="form-control w-full md:w-1/2 lg:w-1/2 ">
              <label className="label">
                <span className="label-text text-base font-bold ">
                  Customize Description
                </span>
              </label>
              <div className="flex gap-5">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    id="yes"
                    className="radio"
                    value="yes"
                    defaultValue="yes"
                    onChange={handleRadioChange}
                  />
                  <label
                    className=" cursor-pointer"
                    htmlFor="Yes"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-1"
                    id="no"
                    className="radio"
                    value="no"
                    onChange={handleRadioChange}
                  />
                  <label className=" cursor-pointer" htmlFor="No">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="form-control w-full md:w-1/2 lg:w-1/2 ">
              <label className="label">
                <span className="label-text text-base font-bold ">
                  Stock Status
                </span>
              </label>
              <div className="flex gap-5">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-stock"
                    id="inStock"
                    className="radio"
                    value="inStock"
                    onChange={handleRadioChange}
                  />
                  <label
                    className=" cursor-pointer"
                    htmlFor="inStock"
                  >
                    In Stock
                  </label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-stock"
                    id="madeToOrder"
                    className="radio"
                    value="madeToOrder"
                    defaultValue="madeToOrder"
                    onChange={handleRadioChange}
                  />
                  <label
                    className=" cursor-pointer"
                    htmlFor="madeToOrder"
                  >
                    Made to Order
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <input
          type="submit"
          value='Add'
          className="btn btn-block btn-ghost bg-gray-800 text-white text-lg h-[60px] font-bold">
          </input>
                  */}
        <button className="custom-btn-22 btn-22">
          <span className="text-white">Update the Art & Craft</span>
        </button>
      </form>
    </div>
  );
};

export default Update;
