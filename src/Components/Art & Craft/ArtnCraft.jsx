import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from 'react-tooltip'


const ArtnCraft = () => {
    const artAndCarts = useLoaderData()
    // const {_id} = artAndCarts;
    console.log(artAndCarts)
    
    return (
        <div className="mt-10 min-h-[100vh]">
            <div className="overflow-x-auto">
  <table className="table w-4/5 mx-auto ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Category</th>
        <th>Rating</th>
        <th>Price</th>
        <th> {}</th>
      </tr>
    </thead>
    <tbody>
    {
                artAndCarts.map((xs, idx )=>  <tr key={idx} data-tooltip-id="my-tooltip" data-tooltip-content={`user: ${xs.name}`} data-tooltip-place="top" >
                    <th>{idx +1}</th>
                    <td>{xs.item_name}</td>
                    <td>{xs.subcategory}</td>
                    <td>{xs.rating}</td>
                    <td>{xs.price}</td>
                    <td> <Link to={`/details/${xs._id}`} className=" px-6 py-2 rounded-lg outline outline-[#caabab] bg-transparent  hover:bg-[#caabab] hover:text-white ">View Details</Link>  </td>
                  </tr> )

            }
     <Tooltip id="my-tooltip" />
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ArtnCraft;