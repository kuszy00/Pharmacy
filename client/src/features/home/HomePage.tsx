import { Box, Typography } from "@mui/material";
import Slider from 'react-slick';

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="https://www.pietercil.com/sites/default/files/styles/intro_block_image/public/2019-01/Pietercil-kanalen-Drug-1560x1040_2.jpg?itok=EfFxSX-B" 
                        alt="store" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/th-december-brno-czech-republic-background-pharmacy-goods-shelf-medicines-vitamins-health-healthy-lifestyle-concept-107925496.jpg" 
                        alt="store" style={{display: 'block', width: '100%', maxHeight: 500}}/>
                </div>
            </Slider>
            <Box display='flex' justifyContent='center' sx={{p: 4}}>
                <Typography variant='h1'>
                    Welcome to our Pharmacy!
                </Typography>
            </Box>
        </>
    )
}