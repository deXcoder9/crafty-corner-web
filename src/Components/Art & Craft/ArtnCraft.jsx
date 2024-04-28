import { Link, useLoaderData } from "react-router-dom";



const ArtnCraft = () => {
    const artAndCarts = useLoaderData()
    // const {_id} = artAndCarts;
    console.log(artAndCarts)
    
    return (
        <div className="mt-10">
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
                artAndCarts.map((xs, idx )=>  <tr key={idx}>
                    <th>{idx +1}</th>
                    <td>{xs.item_name}</td>
                    <td>{xs.subcategory}</td>
                    <td>{xs.rating}</td>
                    <td>{xs.price}</td>
                    <td> <Link to={`/details/${xs._id}`} className="bg-[#caabab] px-6 py-2 rounded-lg hover:outline hover:outline-[#caabab] hover:bg-transparent text-black">View Details</Link>  </td>
                  </tr> )
            }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ArtnCraft;