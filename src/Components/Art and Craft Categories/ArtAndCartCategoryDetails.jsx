import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


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
        <div>
            <h1>Hi im ArtAndCartCategoryDetails {matchedCategory.length}</h1>
        </div>
    );
};

export default ArtAndCartCategoryDetails;