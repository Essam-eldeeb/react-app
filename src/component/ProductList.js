import "./Slider.css";
import Product from "./Product";
import { useEffect } from "react";
import { useState } from "react";

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [allproduct, setallproduct] = useState([]);
  const [categories, setcategory] = useState([]);
  // const [categoriesname, setcategoryname] = useState([]);

  const getproduct = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setallproduct(data));
  }; 

  const getcategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setcategory(data));
  };

  const getproductincategory=(namecat)=>{
    console.log(namecat)
    fetch(`${api_url}/category/${namecat}`)
    .then(res=>res.json())
    .then(data=>setallproduct(data))
}
  useEffect(() => {
    getproduct();
    getcategories();
  }, []);
  return (
    <>
      <h1 className="text-center p-2">our products</h1>
      <button onClick={()=>{
            getproduct();

      }} className="btn btn-info mb-2">All</button>
      {categories.map((cal) => {
        return <button key={cal} className="btn btn-info mb-2" onClick={()=>{
          getproductincategory(cal)
        }}  >{cal}</button>;
      })}
      <div className="container">
        <div className="row ">
          {allproduct.map((allproduct) => {
            return (
              <div className="col-3" key={allproduct.id}>
                <Product product={allproduct} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
