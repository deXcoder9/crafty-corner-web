import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
        fetch("http://localhost:5000/artncraft")
        .then(res => res.json())
        .then(data => setAllCrafts(data))
    },[])
console.log(allCrafts)
    const matchedCategory = allCrafts.filter(ss => ss.subcategory.split(' ').join('').toLowerCase() == selectedCategory)
    console.log("matched category",matchedCategory)




    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:space-x-10 space-y-6 ">

        {
            matchedCategory.map(single =>  <div className="flip-card-container" style={{ '--hue': 220 }}>
            <div className="flip-card">
              <div className="card-front">
                <figure>
                  <div className="img-bg"></div>
                  <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                  <figcaption>Brohm Lake</figcaption>
                </figure>
                <ul>
                  <li>Detail 1</li>
                  <li>Detail 2</li>
                  <li>Detail 3</li>
                  <li>Detail 4</li>
                  <li>Detail 5</li>
                </ul>
              </div>
              <div className="card-back">
                <figure>
                  <div className="img-bg"></div>
                  <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                </figure>
                <button>Book</button>
                <div className="design-container">
                  <span className="design design--1"></span>
                  <span className="design design--2"></span>
                  <span className="design design--3"></span>
                  <span className="design design--4"></span>
                  <span className="design design--5"></span>
                  <span className="design design--6"></span>
                  <span className="design design--7"></span>
                  <span className="design design--8"></span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        </div>
    );
};

export default ArtAndCartCategoryDetails;

{/* 

 <div key={single._id} className="card   shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
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
                <button className="btn bg-[#caabab] hover:bg-[#e2c0c0]  text-white px-3 py-2 rounded-lg">View Details</button>
              </div>
            </div>
          </div>)

*/}