import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, Link } from "react-router-dom";
import { useAppSelector } from "../store/ConfigureStore";
import SignedInMenu from "./SignedInMenu";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': { color: 'grey.400' },
    '&.active': { color: 'text.secondary' },
    textDecoration: 'none'
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    const { basket } = useAppSelector(state => state.basket);
    const { user } = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography component={NavLink} to='/' key='/' exact sx={navStyles}>
                        Pharmacy
                    </Typography>
                </Box>

                <Box>
                    <List sx={{ display: 'flex', flexDirection: 'horizontal' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem component={NavLink} to={path} key={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' sx={{ color: 'white' }}>
                        <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    {user ? (
                        <SignedInMenu/>
                    ) : (
                        <List sx={{ display: 'flex', flexDirection: 'horizontal' }}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    )}
                    
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}