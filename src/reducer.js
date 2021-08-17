export const initialState = {
    term: null,
};

export const actionType = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",
};

const reducer =(state,action) =>{
    //listens to the actions
    switch(action.type){
        case actionType.SET_SEARCH_TERM:
            return{
                //current state with new term 
                ...state,
                term:action.term,
            };
        default:
            return state;
    }
};

export default reducer;
