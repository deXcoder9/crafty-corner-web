import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtnCraftCategory = () => {
  
    const [craftsCategory, setCraftsCategory] = useState([])

    useEffect(()=>{
        fetch("https://server-side-eight-xi.vercel.app/artandcraftcategories")
        .then(res => res.json())
        .then(data => setCraftsCategory(data))
    },[])


    return (
        <div className="my-10">
            <h1 className="text-2xl mb-6">Art And Craft Category </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:space-x-9 space-y-5">

            {
                craftsCategory.map(craft => <Link to={`/ArtAndCartCategoryDetails/${craft._id}`} key={craft._id}>  <div   className="card text-left bg-base-100 shadow-xl border p-4">
                <figure><img className="rounded-lg"  src={craft.image} /></figure>
                <div className="card-body">
                  <h2 className="card-title">{craft.subcategory}</h2>
                  <p>{craft.description} </p>
                </div>
              </div>
              </Link>)
            }

            </div>
        </div>
    );
};

export default ArtnCraftCategory;