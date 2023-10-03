import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Slider from "./component/Slider";
import About from "./component/About-us";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./component/Productdetails";

function App() {
  return (
    <div className="App">
                    <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
           <About /> 
            </>
          }
        />
        <Route path="/product/:productid" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
