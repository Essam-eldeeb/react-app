import { Link } from "react-router-dom";
import "./card.css"

// import "./Slider.css"
function Product(props) {
console.log(props)

  return (
    <>
      <div className="card height mt-5">
        <img src={props.product.image} className="card-img-top" alt="..." />
        <div className="card-body button1">
        <p className="card-text">
            {props.product.category}
           </p>
           <p className="card-text">
            {props.product.description}
           </p>

           <p className="card-title">{props.product.title}</p>
        </div>
        <Link to={`product/${props.product.id}`} className="btn btn-primary button">
           details
          </Link>

      </div>
    </>
  );
}

export default Product;
