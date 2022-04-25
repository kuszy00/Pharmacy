import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

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
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': { color: 'grey.400' },
    '&.active': { color: 'text.secondary' },
    textDecoration: 'none'
}

export default function Header({ darkMode, handleThemeChange }: Props) {
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
                    <IconButton size='large' sx={{ color: 'white' }}>
                        <Badge badgeContent={1} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{ display: 'flex', flexDirection: 'horizontal' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>

                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}