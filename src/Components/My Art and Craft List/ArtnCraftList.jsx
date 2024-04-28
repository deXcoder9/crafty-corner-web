import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { FaStar } from "react-icons/fa6";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const ArtnCraftList = () => {
  const { userInfo } = useContext(AuthContext);
  // console.log(userInfo)
  const allDetails = useLoaderData();
  const [details, setDetails] = useState(allDetails);
  const [filterDetails,setfilterDetails] = useState(allDetails);
  // console.log(allDetails)
  const UserAddedThings = allDetails.filter(
    (sp) => sp.email === userInfo.email
  );
  console.log(UserAddedThings);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed");
        fetch(`http://localhost:5000/artncraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = details.filter((detail) => detail._id !== _id);
              setDetails(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleAffirmationCustomization = (value) =>{
    if(value === "all"){
        setfilterDetails(details)
    }
    else if(value === "yes"){
        const yesCustomizedDetails = details.filter(yes => yes.customization === "yes" )
        setfilterDetails(yesCustomizedDetails)
    }
    else if(value === "no"){
        const noCustomizedDetails = details.filter(no => no.customization === "no" )
        setfilterDetails(noCustomizedDetails)
    }
  }

  return (
    <div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Customization
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() =>handleAffirmationCustomization("all")} >All</a>
          </li>
          <li>
            <a onClick={() =>handleAffirmationCustomization("yes")} >Yess</a>
          </li>
          <li>
            <a onClick={() =>handleAffirmationCustomization("no")} >No</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 space-y-4 place-items-center ">
        {filterDetails.map((x) => (
          <div
            key={x._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={x.photo} className="w-[100%] h-[400px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{x.item_name}</h2>
              <div className="flex justify-between">
                <p className="text-left">Customizable: {x.customization}</p>
                <p className="flex justify-center">
                  {" "}
                  <FaStar /> {x.rating}
                </p>
              </div>
              <div className="flex justify-around">
                <p className="text-left ">{x.inStock}</p>
                <p>{x.price}</p>
              </div>
              <div>
                <Link to={`/update/${x._id}`} className="btn btn-primary">
                  Update{" "}
                </Link>
                <button
                  onClick={() => handleDelete(x._id)}
                  className="btn bg-red-500 ml-9"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtnCraftList;
