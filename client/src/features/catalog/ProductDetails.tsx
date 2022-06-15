import { LoadingButton } from "@mui/lab";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "../basket/BasketSlice";
import { fetchProductAsync, productSelectors } from "./CatalogSlice";

export default function ProductDetails() {
    const { basket, status } = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    const {id} = useParams<{id: string}>();
    const product = useAppSelector(state => productSelectors.selectById(state, id));
    const {status: productStatus} = useAppSelector(state => state.catalog);
    const [quantity, setQuantity] = useState(0);
    const item = basket?.items.find(i => i.productId === product?.id);

    useEffect(() => {
        if (item) setQuantity(item.quantity)
        if (!product) dispatch(fetchProductAsync(parseInt(id)));
    }, [id, item, dispatch, product])

    function handleInputChange(event: any) {
        if(event.target.value >= 0) {
            setQuantity(parseInt(event.target.value));            
        }
    }

    function handleUpdate() {
        if(!item || quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            dispatch(addBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
        } else {
            const updatedQuantity = item.quantity - quantity;
            dispatch(removeBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
        }
    }

    if(productStatus.includes('pending')) return <LoadingComponent message="Loading product..."/>

    if(!product) return <NotFound/>
    return (
        <Grid container spacing={6}>
            <Grid item xs={4}>
                <img src={product.pictureUrl} alt={product.name} style={{width: '90%', border: '2px solid #777'}}/>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='h3'>
                    {product.name}
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant='h4' color='secondary'>
                    {product.price}zł
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>{product.category}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>In stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField variant='outlined' type='number' label='Quantity in cart' 
                        fullWidth value={quantity} onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton sx={{height: '55px'}} color='primary' size='large' 
                        variant='contained' loading={status.includes('pending')} onClick={handleUpdate} 
                        disabled={item?.quantity === quantity || (!item && quantity === 0)}>
                            {item ? 'Update quantity' : 'Add to cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}