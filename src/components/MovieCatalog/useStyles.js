import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    catalogTitleDiv:{
        background: '#000000',
        height:'40px',
        alignItems:'center',
        justifyContent:'center'
    },
    catalogTitle:{
        display: 'flex',
        color: '#ffffff',
        fontSize: '30px',
        alignItems:'center',
        justifyContent:'center'
    },
    movieInfoDiv:{
        background: '#ffffff',
    },
    movieListDiv:{
        background: '#E8E8E8',
    }
}));

export default useStyles;