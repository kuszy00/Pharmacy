import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1),
        description: 'some description',
        price: (prevState.length * 10) + 2,
        pictureUrl: 'http://picsum.photos/200',
        category: 'category',
        brand: 'brand',
        quantityInStock: 1,
      }])
  }

  return (
    <>
      <Typography variant='h1'>Hi</Typography>
      <Catalog products={products} addProduct={addProduct}/>

    </>
  );
}

export default App;
