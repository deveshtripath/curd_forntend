import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Home Page of CURD Application</Typography>
            <Box style={{display: 'flex'}}>
            </Box>
        </Box>
    )
}

export default CodeForInterview;