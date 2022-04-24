import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
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
                    {product.brand} / 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}