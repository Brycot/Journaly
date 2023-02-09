import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { setActiveNote } from '../../store/journal';

import { TurnedInNot } from '@mui/icons-material';
import {
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
    const dispath = useDispatch();
    const onClickNote = () => {
        dispath(setActiveNote({ title, body, id, date, imageUrls }));
    };

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + '...' : title;
    }, [title]);

    const newBody = useMemo(() => {
        return body.length > 30 ? body.substring(0, 30) + '...' : body;
    }, [body]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container direction="column">
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={newBody} />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
