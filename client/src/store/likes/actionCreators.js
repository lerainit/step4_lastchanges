import { incrementLikes,decrementLikes,setCounter } from "./actions";

export  const incrementLikesAC =(payload)=>({type:incrementLikes,payload})

export const decrementLikesAC =() =>({type:decrementLikes})
export const setCounterAC = () => async (dispatch) => {


        try {
            const {status,data} = await fetch('http://localhost:3001/posts').then(response =>response.json());

         
         if(status === 'success'){
                
               
               
                dispatch({ type:setCounter,payload:data})
            
         }
    
        } catch (err) {
         
            console.log(err);
        }
  
    
    } 