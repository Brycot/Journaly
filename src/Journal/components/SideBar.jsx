import { MenuOpenOutlined } from '@mui/icons-material';
import {
    Drawer,
    Toolbar,
    Typography,
    List,
    Box,
    Divider,
    IconButton,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../../store/ui';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();
    const { displayName = '' } = useSelector((state) => state.auth);
    const { open } = useSelector((state) => state.ui);
    const { notes = [] } = useSelector((state) => state.journal);

    const onToggleSideBar = () => {
        dispatch(toggleSideBar());
    };
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                open={open}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={onToggleSideBar}
                        color="inherit"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuOpenOutlined />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {notes.map((note) => (
                        <SideBarItem key={note.id} {...note} />
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
