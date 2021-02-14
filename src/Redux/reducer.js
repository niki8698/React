import INCREMENT from './action'
const initialState={
    count:0
};

 const reducer=(state=initialState,action)=>{
    const {count}=state;
    switch(action.type){
        
        case "INCREMENT":{
            return {
               
               count:state.count+1,
                
            }
        }

        case "DECREMENT":{
            return {
               
               count:state.count-1,
                
            }
        }
        default:return state;
    }
}

export default reducer