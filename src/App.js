import { useState, useEffect } from "react";
import "./App.css";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState(() => []);

  useEffect(() => {
    fetch("https://showkhinstore.com/myphp/myphp.php")
      .then((res) => res.json())
      .then(setProducts)
      .catch((e) => console.log(e));
  }, []);

  // --------------Show Products-------------
  // todo: solve .map is not a function
  //? .map not working if the array is null or undefined
  // sazzadNote: check if the data is an array or not by typeof()
  // sazzadNote: if data is object convert OBJECT TO ARRAY BY Object.entries()

  // ------------------------------------------------------------
  const showProducts = Object.entries(products).map((prod) => (
    <Product key={prod[1].id} name={prod[1].name} address={prod[1].address} />
  ));

  return (
    <div className="App">
        <h1>All products</h1>
      <div className="products__container">
        {showProducts}
      </div>
    </div>
  );
}

// products.map(prod=>(<Product name={prod.name} address={prod.address}/>))
export default App;
