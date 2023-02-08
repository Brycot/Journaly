import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignContent="center"
            justifyContent="center"
            sx={{
                minHeight: 'calc(100vh - 112px)',
                backgroundColor: 'primary.main',
                borderRadius: 3,
            }}
        >
            <Grid item xs={12} display="flex" justifyContent="center">
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>

            <Grid item xs={12}>
                <Typography color="white" variant="h5">
                    Selecciona o crea una entrada
                </Typography>
            </Grid>
        </Grid>
    );
};
