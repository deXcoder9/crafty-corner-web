import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { TfiMoney } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";

const ArtAndCartCategoryDetails = () => {
    const [allCrafts, setAllCrafts] = useState([])
    const data = useLoaderData()
    console.log(data)
    const {id} = useParams()

    const selectedItem = data.find(ss => ss._id === id )
    console.log(selectedItem)
    const selectedCategory = selectedItem.subcategory.split(' ').join('').toLowerCase();
    console.log(selectedCategory)
    useEffect(()=>{
        fetch("https://server-side-eight-xi.vercel.app/artncraft")
        .then(res => res.json())
        .then(data => setAllCrafts(data))
    },[])
console.log(allCrafts)
    const matchedCategory = allCrafts.filter(ss => ss.subcategory.split(' ').join('').toLowerCase() == selectedCategory)
    console.log("matched category",matchedCategory)




    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:space-x-10 space-y-6 ">

        {
            matchedCategory.map(single => <div key={single._id} className="card   shadow-xl">
            <figure><img src={single.photo}  /></figure>
            <div className=" text-left space-y-2 text-sm px-3">
              <h2 className="card-title py-3">{single.item_name}</h2>
              <p className="text-[12px]">{single.subcategory}  </p>
            <p className="text-gray-500">{single.description}</p>
            <div className="flex ">
                <p className="flex items-center"> <TfiMoney /> {single.price}</p>
                <p className="px-12 flex items-center space"><FaRegStar className="" />  {single.rating}</p>
                <p className="flex items-center"> <IoMdTime /> {single.processingTime}</p>
            </div>
              <div className="card-actions justify-start">
                <Link to={`/details/${single._id}`} className="btn bg-[#caabab] hover:bg-[#e2c0c0]  text-white px-3 py-2 rounded-lg" >View Details</Link>
              </div>
            </div>
          </div>)
        }
        
        </div>
    );
};

export default ArtAndCartCategoryDetails;