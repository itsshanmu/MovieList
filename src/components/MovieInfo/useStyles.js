import { makeStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles(() => ({ 
    movieImg:{      
        height : '300px',
        width : '200px',
        borderRadius: '10px',
        alignItems: 'center'
    },
    movieTitle:{
        fontSize :'20px',
        paddingRight: '5px'
    },
    movieReleaseYr:{
        fontSize :'20px'
    },
    movieDirector:{
        paddingTop :'20px'
    }
}));

export default useStyles;