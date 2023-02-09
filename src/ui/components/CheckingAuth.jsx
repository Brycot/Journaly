import { CircularProgress, Grid } from '@mui/material';

export const CheckingAuth = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignContent="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 4,
            }}
        >
            <Grid item>
                <CircularProgress
                    className="animate__animated animate__fadeIn animate__faster"
                    color="warning"
                />
            </Grid>
        </Grid>
    );
};
