import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
 
  titleUnselect:{
    display :'flex',
    background:'#EAEAEA',
    height: '30px',  
    alignItems: 'center' 
  },   
  titleSelect:{
    display :'flex',
    background:'#9B9B9B',
    height: '30px',
    alignItems: 'center'     
  },
  movieTitle :{  
    cursor: 'pointer'
  }
}));

export default useStyles;