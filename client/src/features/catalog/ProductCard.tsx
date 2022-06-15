import { LoadingButton } from "@mui/lab";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/ConfigureStore";
import { addBasketItemAsync } from "../basket/BasketSlice";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    const { status } = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();

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
                <LoadingButton loading={status.includes('pendingAddItem'+product.id)} onClick={() => dispatch(addBasketItemAsync({productId: product.id}))} size="small">
                    Add to cart
                </LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}