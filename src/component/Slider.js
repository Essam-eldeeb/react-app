import "./Slider.css";


function Slider(){
return <>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/previews/002/459/336/original/shopping-online-store-for-sale-mobile-ecommerce-3d-blue-background-shop-online-on-mobile-app-24-hours-shopping-cart-credit-card-minimal-store-online-device-3d-rendered-free-vector.jpg" className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-vector/online-shopping-background-with-concept-online-delivery_269039-162.jpg" className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://st2.depositphotos.com/1309454/7392/v/950/depositphotos_73921481-stock-illustration-shopping-online-background.jpg" className="d-block w-100 height-300" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>

}

export default Slider