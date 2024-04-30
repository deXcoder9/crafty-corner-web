import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const CraftIteams = () => {
const [cardDetails, setCardDetails] = useState([])
const [showAll, setShowAll] = useState(true);
const showMore = () => {
    setShowAll(!showAll);
    console.log(showAll);
  };

useEffect(()=>{
    fetch("http://localhost:5000/artncraft")
    .then(res => res.json())
    .then(data => setCardDetails(data))
} ,[])



    return (
        <div>
            <Fade direction="up">
            <h1 className="mt-16 text-3xl  ">Crafted Wonders: Unleash Your Creativity </h1>
            </Fade>
          
         

            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center  mt-7 space-y-4 lg:w-[1000px] mx-auto ">

            {
               showAll ?
               cardDetails.slice(0, 6).map(ss => <div  key={ss._id} className="lg:w-[430px] border p-2 rounded-xl">
               <div>
                   <img src={ss.photo} alt="" className="rounded-lg h-[300px] w-[100%]" />
               </div>
               <div className="grid grid-cols-3 text-base py-4 ">
                   <p className="">{ss.inStock}</p>
                   <p> <Link to={`/details/${ss._id}`} className="bg-[#caabab] hover:bg-[#e2c0c0]  text-white px-3 py-2 rounded-lg">View Details</Link>  </p>
                   <p>{ss.price}</p>
               </div>
           </div> )
               :
               cardDetails.map(ss => <div  key={ss._id} className="lg:w-[430px] border p-2 rounded-xl">
               <div>
                   <img src={ss.photo} alt="" className="rounded-lg h-[300px] w-[100%]" />
               </div>
               <div className="grid grid-cols-3 text-base py-4 ">
                   <p className="">{ss.inStock}</p>
                   <p> <Link to={`/details/${ss._id}`} className="bg-[#caabab] hover:bg-[#e2c0c0]  text-white px-3 py-2 rounded-lg">View Details</Link>  </p>
                   <p>{ss.price}</p>
               </div>
           </div> )

            }
            
            </div>
            <div className=" flex justify-center mt-5">
          <button className="btn outline " onClick={showMore}>
            {showAll ? "Show more" : "Show less"}
          </button>
        </div>
        </div>
    );
};

export default CraftIteams;