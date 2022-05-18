import { LoadingButton } from "@mui/lab";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    const [loading, setLoading] = useState(false);
    const {setBasket} = useStoreContext();

    function handleAddItem(productId: number) {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }
    return (
        <Card>
            <CardMedia
                sx={{ height:160, backgroundSize: 'contain', bgcolor: 'white'}}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='primary' variant="h6">
                    {product.name}
                </Typography>
                <Typography gutterBottom color='secondary' variant="h6">
                    {product.price}zł
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.category}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton loading={loading} onClick={() => handleAddItem(product.id)} size="small">
                    Add to cart
                </LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}