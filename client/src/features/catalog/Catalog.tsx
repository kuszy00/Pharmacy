import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { fetchProductsAsync, productSelectors } from "./CatalogSlice";
import ProductList from "./ProductList";

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const dispatch = useAppDispatch();
    const {productsLoaded, status} = useAppSelector(state => state.catalog);

    useEffect(() => {
      if (!productsLoaded) dispatch(fetchProductsAsync());     
    }, [productsLoaded, dispatch])

    if (status.includes('pending')) return <LoadingComponent message='Loading...'/>

    return (
        <>
            <ProductList products={products}/>
        </>       
    )
}