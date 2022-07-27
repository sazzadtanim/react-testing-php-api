import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Product from "./Product";
import Products from "./pages/Products";

function App() {
  const [products, setProducts] = useState(() => []);
  const [cart, setCart] = useState(() => []);
  const [page, setPage] = useState("products");

  useEffect(() => {
    fetch("https://showkhinstore.com/myphp/myphp.php")
      .then((res) => res.json())
      .then(setProducts)
      .catch((e) => console.log(e));
  }, []);

  // --------------Show Products-------------
  // todo: solve .map is not a function
  //? .map not working if the array is null or undefined
  // sazzadNote: check if the data is an array or not by Array.isArray()
  // sazzadNote: if data is object convert OBJECT TO ARRAY BY Object.entries()
  // console.log(Array.isArray(products));
  // console.log(products);
  // ------------------------------------------------------------

  const addToCart = () => {
    console.log("inside cart");
  };

  const showProducts = Object.entries(products).map((prod) => (
    <Product
      key={prod[1].id}
      id={prod[1].id}
      name={prod[1].name}
      address={prod[1].address}
      addToCart={addToCart}
    />
  ));

  console.log(cart);

  return (
    <div className="App">
      <div className="header">
        <button onClick={() => setPage("product_page")}>Products</button>
        <button onClick={() => setPage("cart_page")}>Cart</button>
      </div>
      {page === "cart_page" ? (
        <Cart />
      ) : (
        <Products showProducts={showProducts} />
      )}
    </div>
  );
}

export default App;
