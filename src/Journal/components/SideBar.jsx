import { TurnedInNot } from '@mui/icons-material';
import {
    Drawer,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Grid,
    ListItemText,
    Box,
    Divider,
} from '@mui/material';

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Bryan Figueroa
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText
                                        secondary={
                                            'Ullamco minim occaecat in ut'
                                        }
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
