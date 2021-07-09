import { BUY_CAKE } from './CakeType';

const initialState = {
    numOfCakes : 10
}
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.initialState - 1
        }
        default: return state
    }
}

export default cakeReducer