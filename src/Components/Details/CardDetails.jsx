import { useLoaderData, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const CardDetails = () => {
  const artAndCrafttss = useLoaderData();
  const { id } = useParams();
  console.log(id);
  // console.log( artAndCrafttss._id)

  const artAndCraft = artAndCrafttss.find((ss) => ss._id == id);
  console.log(artAndCraft);
  const {
    subcategory,
    rating,
    processingTime,
    price,
    photo,
    name,
    item_name,
    inStock,
    email,
    description,
  } = artAndCraft;

  return (
    <div className="flex flex-col justify-center items-center mt-8 bg-orange-100 w-2/3 mx-auto py-6 rounded-lg">
        
      <img className="w-[500px] rounded-2xl  " src={photo} alt="" />
      <div className="w-[400px] space-y-2 text-left ">
      <h1 className="text-3xl font-bold pt-5">{item_name}</h1>
      <h4 className=""> <span className="underline"> Subcategory:</span> {subcategory}</h4>
      <p className="text-" >{description}</p>
      <div className="space-y-1">
        <h3 className="underline">Creator:</h3>
        <p>Name:{name}</p>
        <p>Email: {email}</p>
      </div>
      <div className="flex">
        <p>Processing Time: {processingTime}</p>
        <p className="ml-9 flex"> <CiStar />  {rating}</p>
      </div>
      <div className="flex text-base">
        <p className="bg-orange-200 p-3 rounded-xl">{inStock}</p>
        <p className="ml-9 p-3">{price}</p>
      </div>
      </div>
    </div>
  );
};

export default CardDetails;
