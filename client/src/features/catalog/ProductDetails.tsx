import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://localhost:5001/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false)); 
    }, [id])

    if(loading) return <h3>Loading...</h3>

    if(!product) return <h3>Product not fount</h3>
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
            </Grid>
        </Grid>
    )
}