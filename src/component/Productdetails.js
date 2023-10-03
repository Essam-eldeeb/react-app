import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const param = useParams();
  const [proDtail, setdtail] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(`${api_url}/${param.productid}`)
      .then((res) => res.json())
      .then((data) => setdtail(data));
  }, [param.productid]);

  console.log(proDtail);
  return (
    <>
      <div className="card col-5 m-auto">
        <h1
          className="text-warning
"
        >
          {proDtail.title}
        </h1>

        <img src={proDtail.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{proDtail.title}</h5>
          <h5 className="card-title">{proDtail.category}</h5>
          <p className="card-text">{proDtail.description}</p>
          <p className="card-text">price{proDtail.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
