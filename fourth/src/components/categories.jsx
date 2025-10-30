import "./Categories.css"

const Categories = () =>{
    const productData=[
        {title:"Womens",
        imageurl:"https://m.media-amazon.com/images/I/61v9gjjx+KL._SY741_.jpg"} ,
        {title:"ACCESSORIES'S",
        imageurl:"https://m.media-amazon.com/images/I/41buefb6NjL._SY300_SX300_QL70_FMwebp_.jpg"},
        {title:"MEN'S",
        imageurl:"https://m.media-amazon.com/images/I/61NVTARMyoL._SY879_.jpg"}
    ];
    return (
        <div className="main-productdata-container">
            {productData.map((element,index)=> <div key = {index} className="child-container">
                <img src={element.imageurl} alt="" width="120px" />
                <p>{element.title}</p>
            </div> )}
        </div>
    )
}






export default Categories;