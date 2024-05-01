const initialState = [];

const handleCart = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            const item = state.find((item) => item.id === action.payload.id);
            console.log(item)
            if(item){
                Number(item.qty);
                item.qty += 1;
                return [...state];
            }else{
                action.payload.qty = 1;
                return [...state, action.payload]
            }
        case 'REMOVE_ITEM':
            if(action.payload.qty > 1){
                action.payload.qty -= 1;
                return [...state];
            }
            return state.filter((item) => item.id !== action.payload.id)
        default:
            return state;
    }
}
export default handleCart;