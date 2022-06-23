import { Typography } from "@mui/material";

export default function ContactPage() {
    return (
        <>
            <Typography variant='h2'>
                Contact us
            </Typography>
            <Typography fontSize={24}>
                <b>Mail:</b> contact@pharmacy.com
            </Typography>
            <Typography fontSize={24}>
                <b>Phone:</b> 123 123 123
            </Typography>
        </>
    )
}