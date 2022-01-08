import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({ 
    movieImg:{      
        height : '300px',
        width : '200px',
        borderRadius: '10px',
        alignItems: 'center'
    },
    movieTitle:{
        fontSize :'20px',
        paddingRight: '5px',
        fontWeight: 'bold'
    },
    movieReleaseYr:{
        fontSize :'20px'
    },
    movieDirector:{
        paddingTop :'20px'
    }
}));

export default useStyles;